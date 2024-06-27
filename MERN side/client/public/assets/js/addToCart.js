import axios from "https://cdn.jsdelivr.net/npm/axios@1.7.1/+esm";
export const addToCart = async (id) => {
    try {
        await axios({
            method: "POST",
            url: "/api/v1/users/addtocart",
            body: JSON.stringify({ id }),
        });
    } catch (err) {
        console.log(err);
    }
};
