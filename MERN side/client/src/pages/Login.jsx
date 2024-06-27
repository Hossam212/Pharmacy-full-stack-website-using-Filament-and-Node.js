import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/styleNatours.css";
import Header from "../components/Header.jsx";
import { UserContext } from "../components/UserContext.jsx";
function Login() {
    const navigate = useNavigate();
    const { setUserId } = useContext(UserContext);

    const handleLogin = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch("/api/v1/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include", // Include cookies in the request
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }
            // Assuming the response returns a JSON object
            const data = await response.json();
            setUserId(data.data.user._id);
            // Navigate to the home page
            navigate("/");
            toast.success("Logged in successfully");
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Failed to log in");
        }
    };

    return (
        <>
            <Header />
            <main className="main">
                <div className="login-form">
                    <h2 className="heading-secondary ma-bt-lg">
                        Log into your account
                    </h2>
                    <form className="form form--login" onSubmit={handleLogin}>
                        <div className="form__group">
                            <label className="form__label" htmlFor="email">
                                Email address
                            </label>
                            <input
                                className="form__input"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="form__group ma-bt-md">
                            <label className="form__label" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="form__input"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                minLength={8}
                            />
                        </div>
                        <div className="form__group">
                            <button
                                className="btn btn--green"
                                id="submit"
                                type="submit"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Login;
