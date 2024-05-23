import React from "react";
import Header from "../components/Header.jsx";
function Signup() {
    return (
        <>
            <Header />;
            <main className="main">
                <div className="singup-form">
                    <h2 className="heading-secondary ma-bt-lg">
                        Create your account!
                    </h2>
                    <form className="form form" action="/signup" method="POST">
                        <div className="form__group">
                            <label className="form__label" htmlFor="name">
                                Your name
                            </label>
                            <input
                                className="form__input"
                                id="name"
                                type="text"
                                name="name"
                                placeholder=""
                                required=""
                            />
                        </div>
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
                                required=""
                            />
                        </div>
                        <div className="form__group ma-bt-md">
                            <label className="form__label" htmlFor="password">
                                Password
                                <input
                                    className="form__input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    required=""
                                    minLength={8}
                                />
                            </label>
                        </div>
                        <div className="form__group ma-bt-md">
                            <label
                                className="form__label"
                                htmlFor="confirmPassword"
                            >
                                Confirm password
                                <input
                                    className="form__input"
                                    id="confirmPassword"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="••••••••"
                                    required=""
                                    minLength={8}
                                />
                            </label>
                        </div>
                        <div className="form__group">
                            <button className="btn btn--green" type="submit">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

export default Signup;
