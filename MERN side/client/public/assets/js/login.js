import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.1/+esm";
import { showAlert } from "./alert.js";
export const login = async (email, password) => {
    try {
        await axios({
            method: "POST",
            url: "/api/v1/users/login",
            data: {
                email,
                password,
            },
        });
        showAlert("success", "Logged in successfully!");
    } catch (err) {
        showAlert("error", err.response.data.message);
    }
};

export const logout = async () => {
    try {
        await axios({
            method: "GET",
            url: "/api/v1/users/logout",
        });
    } catch (err) {
        console.log(err);
    }
};
