// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../features/auth/context/AuthContext";
// import { useEffect } from "react";

// export function useAuthGuard(requireAuth = true, redirectTo = '/login') {
//     const { user, isLoading } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!isLoading) {
//             if (requireAuth && !user) {
//                 console.log('🚫 Auth guard: Redirecting to login');
//                 navigate(redirectTo, { replace: true });
//             } else if (!requireAuth && user) {
//                 console.log('🚫 Auth guard: Redirecting to homepage');
//                 navigate('/homepage', { replace: true });
//             }
//         }
//     }, [user, isLoading, requireAuth, navigate, redirectTo]);

//     return { user, isLoading };
// }