
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
    titlte?: string;
    onSubmit?: (email: string, password: string) => Promise<void> | void;
    buttonText?: string;
}


function LoginForm({ titlte = "Welcome Back", onSubmit, buttonText = "Sign in", }: Props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);

    //Validate email
    const validateEmail = (value: string) => {
        if (!value.trim()) {
            return "Email is required";
        }
        if (!/^\S+@\S+\.\S+$/.test(value)) {
            return "Invalid email format";
        }
        return "";
    }

    const validatePassword = (value: string) => {
        if (!value.trim()) {
            return "Password is requied";
        }
        if (value.length < 6) {
            return "Password must be at least 6 characters";
        }
        return "";
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        setEmailError(emailError);
        setPasswordError(passwordError);

        if (emailError || passwordError) {
            return;
        }

        setLoading(true);

        try {
            if (onSubmit) {
                await onSubmit(email, password);
            }
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 3000)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="company-logo">
                        {/* <div className="logo-icon"></div> */}
                    </div>
                    <h2>{titlte}</h2>
                    <p>Please sign in to your corporate account</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit} noValidate>
                    {/* Email */}
                    <div className="form-group">
                        <div className={`input-wrapper ${emailError ? "error" : ""}`}>
                            <input
                                type="email"
                                value={email}
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder=" "
                                required
                                autoComplete="email" />
                            <label htmlFor="email">Business Email</label>
                            <span className="input-border"></span>
                        </div>
                        {emailError && (<span className="error-message show" id="emailError">{emailError}</span>)}
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <div className={`input-wrapper password-wrapper ${passwordError ? "error" : ""}`}>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                placeholder=" "
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password" />
                            <label htmlFor="password">Password</label>
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility">
                                <span className={`toggle-icon ${showPassword ? "show-password" : ""}`}></span>
                            </button>
                            <span className="input-border"></span>
                        </div>
                        {passwordError && (<span className="error-message show" id="passwordError">{passwordError}</span>)}
                    </div>

                    {/* Remember signin */}
                    <div className="form-options">
                        <div className="remember-wrapper">
                            <input type="checkbox" id="remember" name="remember" />
                            <label htmlFor="remember" className="checkbox-label">
                                <span className="checkbox-custom"></span>
                                Keep me signed in
                            </label>
                        </div>
                        <a href="#" className="forgot-password">Reset password</a>
                    </div>

                    <button type="submit" className={`login-btn ${loading ? "loading" : ""}`} disabled={loading}>
                        {!loading && (<span className="btn-text">{buttonText}</span>)}
                        {loading && (<span className="btn-loader"></span>)}
                    </button>

                    {/* <!-- Register --> */}
                    <div className="register">
                        <p>Not a member? <Link to="/register">Register</Link></p>
                    </div>

                </form>

                <div className="divider">
                    <span>or sign in with</span>
                </div>

                {/* Other signin */}
                <div className="sso-options">
                    <button type="button" className="sso-btn azure-btn">
                        <span className="sso-icon azure-icon"></span>
                        <span>Microsoft Azure AD</span>
                    </button>
                    <button type="button" className="sso-btn okta-btn">
                        <span className="sso-icon okta-icon"></span>
                        <span>Okta</span>
                    </button>
                </div>

                <div className="footer-links">
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <span className="separator">•</span>
                    <a href="#" className="footer-link">Terms of Service</a>
                    <span className="separator">•</span>
                    <a href="#" className="footer-link">Support</a>
                </div>

                {/* success massage */}
                {success && (<div className={`success-message ${success ? "show" : ""}`} id="successMessage">
                    <div className="success-icon">✓</div>
                    <h3>Login Successful</h3>
                    <p>Way to go back login page...{loading && <span className="inline-loader"></span>}</p>
                </div>)}
            </div>
        </div>
    );
}

export default LoginForm;