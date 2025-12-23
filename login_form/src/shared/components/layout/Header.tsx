// shared/components/layout/Header.tsx
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../../../domains/auth/context/AuthContext";

interface HeaderProps {
    user?: {
        email: string;
        role?: string;
        name?: string;
    };
    onLogout?: () => void;
    showAuthButtons?: boolean;
}

function Header({ showAuthButtons = true }: HeaderProps) {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const { user, logout } = useAuth();

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('.mobile-menu-btn')
            ) {
                setMobileMenuOpen(false);
            }
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target as Node) &&
                !(event.target as HTMLElement).closest('.user-info')
            ) {
                setUserMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
        setUserMenuOpen(false);
    }, [location]);

    const getNavItems = () => {
        if (user?.role === 'ADMIN') {
            return [
                { path: "/admin/homepage", label: "Admin Home", icon: "🏠" },
                { path: "/admin/dashboard", label: "Admin Dashboard", icon: "📊" },
                { path: "/admin/users", label: "User Management", icon: "👥" },
                { path: "/admin/audit-logs", label: "Audit Logs", icon: "📋" },
                { path: "/admin/settings", label: "Admin Settings", icon: "⚙️" },
                { path: "/admin/analytics", label: "Analytics", icon: "📈" },
            ];
        }
        // Người dùng thường
        return [
            { path: "/homepage", label: "Home", icon: "🏠" },
            { path: "/dashboard", label: "Dashboard", icon: "📊" },
            { path: "/features", label: "Features", icon: "⚡" },
            { path: "/pricing", label: "Pricing", icon: "💰" },
            { path: "/contact", label: "Contact", icon: "✉️" },
        ];
    }

    const navItems = getNavItems();

    const handleProfileClick = () => {
        if (user?.role === 'ADMIN') {
            navigate('/admin/profile');
        } else {
            navigate('/profile');
        }
        setUserMenuOpen(false);
        setMobileMenuOpen(false);
    };

    const handleSettingsClick = () => {
        if (user?.role === 'ADMIN') {
            navigate('/admin/settings');
        } else {
            navigate('/settings');
        }
        setUserMenuOpen(false);
        setMobileMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        setUserMenuOpen(false);
        setMobileMenuOpen(false);
    };

    const getInitials = (email: string) => {
        return email.charAt(0).toUpperCase();
    };

    return (
        <header className="header">
            <div className="header-content">
                {/* Logo */}
                <Link to={user?.role === 'ADMIN' ? "/admin/homepage" : "/"} className="logo-container">
                    <div className="logo-icon">⚡</div>
                    <div>
                        <div className="logo-text">Nexus</div>
                        <div className="logo-tagline">
                            {user?.role === 'ADMIN' ? 'ADMIN PANEL' : 'MODERN PLATFORM'}
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="nav-menu">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            {item.label}
                            {user?.role === 'ADMIN' && item.path.startsWith('/admin') && (
                                <span className="admin-badge">ADMIN</span>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Desktop User Section */}
                <div className="user-section">
                    {user ? (
                        <div className="desktop-user-container">
                            <div
                                className="user-info"
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                                style={{ cursor: 'pointer' }}
                            >
                                <div className="user-avatar">
                                    {getInitials(user.email)}
                                </div>
                                <div className="user-details">
                                    <span className="user-email">
                                        {user.name || user.email.split('@')[0]}
                                    </span>
                                    {user.role && (
                                        <span className="user-role">
                                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                        </span>
                                        
                                    )}
                                </div>
                            </div>

                            {userMenuOpen && (
                                <div className="user-dropdown desktop-dropdown">
                                    <button className="dropdown-item" onClick={handleProfileClick}>
                                        👤 My Profile
                                    </button>
                                    <button className="dropdown-item" onClick={handleSettingsClick}>
                                        ⚙️ Settings
                                    </button>
                                    {user.role === 'ADMIN' && (
                                        <button className="dropdown-item" onClick={() => {
                                            navigate('/admin/dashboard');
                                            setUserMenuOpen(false);
                                        }}>
                                            📊 Admin Dashboard
                                        </button>
                                    )}
                                    <div className="dropdown-divider"></div>
                                    <button className="dropdown-item logout-item" onClick={handleLogout}>
                                        🚪 Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : showAuthButtons ? (
                        <div className="auth-buttons">
                            <Link to="/login" className="auth-btn login-btn-home">
                                Login
                            </Link>
                            <Link to="/register" className="auth-btn register-btn">
                                Register
                            </Link>
                        </div>
                    ) : null}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                >
                    {mobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
                    <div
                        className="mobile-menu-content"
                        ref={mobileMenuRef}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Mobile Navigation */}
                        <nav className="mobile-nav-menu">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`mobile-nav-link ${location.pathname === item.path ? "active" : ""}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="mobile-nav-icon">{item.icon}</span>
                                    <span className="mobile-nav-label">{item.label}</span>
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile User Section */}
                        <div className="mobile-user-section">
                            {user ? (
                                <>
                                    <div className="mobile-user-info">
                                        <div className="mobile-user-avatar">
                                            {getInitials(user.email)}
                                        </div>
                                        <div className="mobile-user-details">
                                            <div className="mobile-user-name">
                                                {user.name || user.email.split('@')[0]}
                                            </div>
                                            {user.role && (
                                                <div className="mobile-user-role">
                                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mobile-profile-options">
                                        <button className="mobile-profile-btn" onClick={handleProfileClick}>
                                            <span className="mobile-profile-icon">👤</span>
                                            My Profile
                                        </button>
                                        <button className="mobile-profile-btn" onClick={handleSettingsClick}>
                                            <span className="mobile-profile-icon">⚙️</span>
                                            Settings
                                        </button>
                                        {user.role === 'ADMIN' && (
                                            <button className="mobile-profile-btn" onClick={() => {
                                                navigate('/admin/dashboard');
                                                setMobileMenuOpen(false);
                                            }}>
                                                <span className="mobile-profile-icon">📊</span>
                                                Admin Dashboard
                                            </button>
                                        )}
                                    </div>


                                    <button className="mobile-logout-btn" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            ) : showAuthButtons ? (
                                <div className="mobile-auth-buttons">
                                    <Link
                                        to="/login"
                                        className="mobile-auth-btn mobile-login-btn"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="mobile-auth-btn mobile-register-btn"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;