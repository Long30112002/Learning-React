import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth, AuthProvider } from "./domains/auth/context/AuthContext";
import AutoLoginPage from "./domains/auth/pages/AutoLoginPage";
import ForgotPasswordPage from "./domains/auth/pages/ForgotPasswordPage";
import LoginPage from "./domains/auth/pages/LoginPage";
import RegisterPage from "./domains/auth/pages/RegisterPage";
import ResetPasswordPage from "./domains/auth/pages/ResetPasswordPage";
import ProtectedRoute from "./domains/home/components/ProtectedRoute";
import AdminUsersPage from "./domains/home/pages/admin/AdminUsersPage";
import AuditLogsPage from "./domains/home/pages/admin/AuditLogsPage";
import AdminHomePage from "./domains/home/pages/AdminHomePage";
import HomePage from "./domains/home/pages/HomePage";
import ProfilePage from "./domains/profile/pages/ProfilePage";
import { WorkspaceProvider } from "./domains/home/components/context/WorkspaceContext";
import WorkspacesPage from "./domains/home/pages/user/WorkspacesPage";


// Component auto-refresh token
function TokenRefresher() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const refreshToken = async () => {
      try {
        await fetch('http://localhost:3000/api/auth/verify', {
          method: 'GET',
          credentials: 'include'
        });
      } catch (error) {
        console.log('Auto-refresh failed');
      }
    };

    refreshToken();
    const intervalId = setInterval(refreshToken, 4 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, [user]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <WorkspaceProvider>
        <Router>
          <TokenRefresher />
          <Routes>
            {/* Public routes - ai cũng vào được */}
            <Route path="/" element={<HomePage />} />

            <Route path="/homepage" element={<HomePage />} />

            {/* Auth routes - chỉ cho người CHƯA login */}
            <Route path="/login" element={
              <ProtectedRoute isAuthRoute>
                <LoginPage />
              </ProtectedRoute>
            } />

            <Route path="/register" element={
              <ProtectedRoute isAuthRoute>
                <RegisterPage />
              </ProtectedRoute>
            } />

            <Route path="/forgot-password" element={
              <ProtectedRoute isAuthRoute>
                <ForgotPasswordPage />
              </ProtectedRoute>
            } />

            <Route path="/reset-password" element={
              <ProtectedRoute isAuthRoute>
                <ResetPasswordPage />
              </ProtectedRoute>
            } />

            <Route path="/auto-login" element={
              <ProtectedRoute isAuthRoute>
                <AutoLoginPage />
              </ProtectedRoute>
            } />

            // Thêm route
            <Route path="/workspaces" element={
              <ProtectedRoute requireAuth>
                <WorkspacesPage />
              </ProtectedRoute>
            } />

            {/* Admin route - cần login VÀ role ADMIN */}
            <Route path="/admin/homepage" element={
              <ProtectedRoute requireAuth requiredRole="ADMIN">
                <AdminHomePage />
              </ProtectedRoute>
            } />


            <Route path="/admin/profile" element={
              <ProtectedRoute requireAuth requiredRole="ADMIN">
                <ProfilePage />
              </ProtectedRoute>
            } />

            <Route path="/profile" element={
              <ProtectedRoute requireAuth>
                <ProfilePage />
              </ProtectedRoute>
            } />

            <Route path="/admin/users" element={
              <ProtectedRoute requireAuth requiredRole="ADMIN">
                <AdminUsersPage />
              </ProtectedRoute>
            } />

            <Route path="/admin/audit-logs" element={
              <ProtectedRoute requireAuth requiredRole="ADMIN">
                <AuditLogsPage />
              </ProtectedRoute>
            } />

            {/* Redirect 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </WorkspaceProvider>
    </AuthProvider>
  );
}

export default App;