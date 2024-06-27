import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header.jsx";
import { UserContext } from "../components/UserContext.jsx";

const Products = () => {
    const { userId } = useContext(UserContext);
    const addToCart = async (productId) => {
        const fetchAddToCart = async () => {
            const response = await fetch("/api/v1/users/addtocart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, productId }),
            });

            if (!response.ok) {
                throw new Error("Failed to add product to cart");
            }
            return response.json();
        };

        toast.promise(fetchAddToCart(), {
            pending: "Adding to cart...",
            success: "Product added to cart!",
            error: "Failed to add product to cart",
        });
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/products");
                const data = await response.json();

                // Filter products based on category
                const filteredProducts = data.filter((product) => {
                    const firstWord = product.Category.split(" ")[0];
                    return firstWord.toLowerCase() === "hypertensive";
                });

                setProducts(filteredProducts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Header />;{/* ======= Breadcrumbs Section ======= */}
            <section className="breadcrumbs">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2>Pharmaceuticals</h2>
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Hypertensive Medications</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* End Breadcrumbs Section */}
            <section className="inner-page">
                <div className="container">
                    <h3>Hypertensive Medications</h3>
                    <div>
                        {products.map((product, index) => (
                            <div className="col-md-3 col-sm-6">
                                <div className="product-grid">
                                    <div className="product-image">
                                        <a
                                            href="true"
                                            className="image"
                                            id="book-property"
                                        >
                                            <img
                                                src={`/assets/img/products/${product.image}`}
                                                alt=""
                                            />
                                        </a>
                                        <ul className="product-links">
                                            <li>
                                                <a href="www.example.com">
                                                    <i className="fa fa-search" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="www.example.com">
                                                    <i className="fa fa-heart" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="www.example.com">
                                                    <i className="fa fa-random" />
                                                </a>
                                            </li>
                                        </ul>
                                        <button
                                            className="add-to-cart"
                                            onClick={() =>
                                                addToCart(product.id)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faCartShopping}
                                            />
                                            &nbsp; Add to Cart
                                        </button>
                                    </div>
                                    <div className="product-content">
                                        <h3 className="title">
                                            {product.name}
                                        </h3>
                                        <div className="price">
                                            {product.price} EGP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* End #main */}
        </>
    );
};

export default Products;
