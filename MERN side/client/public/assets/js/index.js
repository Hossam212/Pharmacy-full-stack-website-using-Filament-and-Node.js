/*
import $ from "https://code.jquery.com/jquery-3.7.1.min.js";
*/
//import { showAlert } from "./alert.js";
/*
import { changeSettings } from "./updateSettings.js";

*/
//import { bookTour } from "./stripe.js";

//DOM ELEMENTS
/*
const filterForm = document.querySelector("#filterForm");
*/

/*
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");
*/
//const bookBtn = document.getElementById("book-property");
// DELEGATION
/*
// getting user coordinates
if (document.getElementById("radius")) {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                document.getElementById("latitude").value = latitude;
                document.getElementById("longitude").value = longitude;
            },
            (error) => {
                console.error("Error getting geolocation:", error);
            }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
}


if (bookBtn) {
    console.log("I SAW THE BUY BUTTTTTTOOOOOOOOOOOOOOOOOOOOOOOON");
    bookBtn.addEventListener("click", (e) => {
        e.target.textContent = "Processing...";
        const { propertyId } = e.target.dataset;
        //      bookTour(propertyId);
    });
}
*/
/*
// index.js

// index.js
*/

/*
if (userDataForm) {
    document.querySelector(".form").addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("name", document.getElementById("name").value);
        form.append("email", document.getElementById("email").value);
        form.append("photo", document.getElementById("photo").files[0]);
        changeSettings(form, "data");
    });
}
if (userPasswordForm) {
    userPasswordForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        document.querySelector(".btn--save-password").textContent =
            "Updating...";
        const passwordCurrent =
            document.getElementById("password-current").value;
        const newPassword = document.getElementById("password").value;
        const passwordConfirm =
            document.getElementById("password-confirm").value;
        await changeSettings(
            { passwordCurrent, newPassword, passwordConfirm },
            "password"
        );

        document.querySelector(".btn--save-password").textContent =
            "Save password";
        document.getElementById("password-current").value = "";
        document.getElementById("password").value = "";
        document.getElementById("password-confirm").value = "";
    });
}

const alertMessage = document.querySelector("body").dataset.alert;
if (alertMessage) showAlert("success", alertMessage, 7);
*/
