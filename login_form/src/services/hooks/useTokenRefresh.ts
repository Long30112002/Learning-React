// import { useEffect } from 'react';
// import { useAuth } from '../../features/auth/context/AuthContext';

// export function useTokenRefresh() {
//     const { user } = useAuth();

//     useEffect(() => {
//         if (!user) return;

//         const refreshToken = async () => {
//             try {
//                 console.log('⏰ Auto-refreshing token...');
//                 const response = await fetch('http://localhost:3000/api/auth/verify', {
//                     method: 'GET',
//                     credentials: 'include',
//                     headers: {
//                         'Accept': 'application/json'
//                     }
//                 });

//                 if (response.ok) {
//                     const data = await response.json();
//                     console.log('✅ Auto-refresh response:', data);

//                     if (data.data?.tokenRefreshed) {
//                         localStorage.setItem('last_token_refresh', Date.now().toString());
//                         console.log('🔄 Token auto-refreshed successfully');
//                     }
//                 }
//             } catch (error) {
//                 console.log('Auto-refresh failed:', error);
//             }
//         };

//         refreshToken();
//         const intervalId = setInterval(refreshToken, 4 * 60 * 1000);

//         return () => clearInterval(intervalId);
//     }, [user]);
// }