import React from "react";
import "../css/styleNatours.css";
import Header from "../components/Header.jsx";

function Login() {
    return (
        <>
            <Header />;
            <main className="main">
                <div className="login-form">
                    <h2 className="heading-secondary ma-bt-lg">
                        Log into your account
                    </h2>
                    <form className="form form--login">
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
                                required="required"
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
                                required="required"
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
