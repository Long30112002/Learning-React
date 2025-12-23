// home/components/AdminHomeContent.tsx
import { Link } from "react-router-dom";
import "./AdminHomeContext.css";
import { useAuth } from "../../../auth/context/AuthContext";

function AdminHomeContent() {
    const { user, isLoading } = useAuth();

    // Thêm loading state
    if (isLoading) {
        return <div className="loading">Loading admin data...</div>;
    }

    // Type guard để đảm bảo user là admin
    if (!user || user.role !== 'ADMIN') {
        return (
            <div className="error-message">
                <p>No user data available. Please log in.</p>
            </div>
        );
    }

    // Check role với logging
    console.log('AdminHomeContent - User role:', user.role);

    if (user.role !== 'ADMIN') {
        return (
            <div className="access-denied">
                <h2>⚠️ Access Denied</h2>
                <p>This area is restricted to administrators only.</p>
                <p>Your role: {user.role || 'Not assigned'}</p>
                <Link to="/homepage" className="btn btn-primary">
                    Go to User Dashboard
                </Link>
            </div>
        );
    }

    const stats = [
        { label: "Total Users", value: "1,234", change: "+12%", icon: "👥" },
        { label: "Active Sessions", value: "567", change: "+8%", icon: "🟢" },
        { label: "Revenue Today", value: "$12,456", change: "+23%", icon: "💰" },
        { label: "Pending Tasks", value: "42", change: "-3%", icon: "📋" },
    ];

    const recentActivities = [
        { user: "john@example.com", action: "created new account", time: "5 min ago" },
        { user: "admin@system.com", action: "updated user permissions", time: "15 min ago" },
        { user: "alice@company.com", action: "changed subscription plan", time: "1 hour ago" },
        { user: "bob@test.com", action: "reset password", time: "2 hours ago" },
    ];

    const quickActions = [
        { icon: "➕", label: "Add User", path: "/admin/users/add" },
        { icon: "📊", label: "View Reports", path: "/admin/analytics" },
        { icon: "⚙️", label: "System Settings", path: "/admin/settings" },
        { icon: "🔐", label: "Security Logs", path: "/admin/security" },
    ];

    return (
        <div className="home-content">
            {/* Hero Section for Admin */}
            <div className="hero-section admin-hero">
                <h1 className="hero-title">Admin Dashboard</h1>
                <p className="hero-subtitle">
                    Welcome back, Administrator! Manage your platform efficiently.
                </p>
                <div className="admin-banner">
                    <span className="admin-tag">ADMINISTRATOR</span>
                    <span>System Access Level: Full Control</span>
                </div>
            </div>

            {/* Admin Stats */}
            <div className="admin-stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <div className="stat-icon">{stat.icon}</div>
                        <div className="stat-content">
                            <div className="stat-value">{stat.value}</div>
                            <div className="stat-label">{stat.label}</div>
                            <div className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="admin-content-grid">
                {/* Left Column - Quick Actions */}
                <div className="admin-section quick-actions-section">
                    <h3>Quick Actions</h3>
                    <div className="actions-grid">
                        {quickActions.map((action, index) => (
                            <Link key={index} to={action.path} className="action-card">
                                <div className="action-icon">{action.icon}</div>
                                <div className="action-label">{action.label}</div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right Column - Recent Activity */}
                <div className="admin-section recent-activity-section">
                    <h3>Recent Activity</h3>
                    <div className="activity-list">
                        {recentActivities.map((activity, index) => (
                            <div key={index} className="activity-item">
                                <div className="activity-icon">👤</div>
                                <div className="activity-content">
                                    <div className="activity-text">
                                        <strong>{activity.user}</strong> {activity.action}
                                    </div>
                                    <div className="activity-time">{activity.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link to="/admin/activity" className="view-all-link">
                        View all activity →
                    </Link>
                </div>
            </div>

            {/* System Status */}
            <div className="admin-section system-status">
                <h3>System Status</h3>
                <div className="status-grid">
                    <div className="status-item status-ok">
                        <div className="status-icon">✅</div>
                        <div className="status-info">
                            <div className="status-label">Database</div>
                            <div className="status-detail">All systems operational</div>
                        </div>
                    </div>
                    <div className="status-item status-ok">
                        <div className="status-icon">✅</div>
                        <div className="status-info">
                            <div className="status-label">API Services</div>
                            <div className="status-detail">Running smoothly</div>
                        </div>
                    </div>
                    <div className="status-item status-warning">
                        <div className="status-icon">⚠️</div>
                        <div className="status-info">
                            <div className="status-label">Backup</div>
                            <div className="status-detail">Scheduled in 2 hours</div>
                        </div>
                    </div>
                    <div className="status-item status-ok">
                        <div className="status-icon">✅</div>
                        <div className="status-info">
                            <div className="status-label">Security</div>
                            <div className="status-detail">No threats detected</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Admin Profile Card */}
            {/* <div className="user-details-card admin-profile">
                <h3>Admin Profile</h3>
                <div className="verification-status">
                    <span className="status-badge verified">
                        ✅ Super Administrator
                    </span>
                    <span className="status-badge verified">
                        🔐 Full System Access
                    </span>
                </div>
                <div className="user-info-grid">
                    <div className="info-item">
                        <span className="info-label">Email:</span>
                        <span className="info-value">{user.email}</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Role:</span>
                        <span className="info-value admin-role">Administrator</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Member since:</span>
                        <span className="info-value">
                            {new Date(user.createdAt || new Date()).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </span>
                    </div>
                </div>
                <div className="action-buttons">
                    <Link to="/admin/users" className="btn btn-primary">
                        👥 Manage Users
                    </Link>
                    <Link to="/admin/settings" className="btn btn-outline">
                        ⚙️ System Settings
                    </Link>
                    <Link to="/admin/analytics" className="btn btn-secondary">
                        📊 View Analytics
                    </Link>
                </div>
            </div> */}
        </div>
    );
}

export default AdminHomeContent;