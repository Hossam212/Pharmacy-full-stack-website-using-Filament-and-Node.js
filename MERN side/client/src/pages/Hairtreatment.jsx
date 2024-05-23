import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/products");
                const data = await response.json();

                // Filter products based on category
                const filteredProducts = data.filter((product) => {
                    const firstWord = product.Category.split(" ")[0];
                    return firstWord.toLowerCase() === "hair";
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
                        <h2>Health Care</h2>
                        <ol>
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>Hair Treatment</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* End Breadcrumbs Section */}
            <section className="inner-page">
                <div className="container">
                    <h3>Hair Treatment</h3>
                    <div>
                        {products.map((product, index) => (
                            <div className="col-md-3 col-sm-6">
                                <div className="product-grid">
                                    <div className="product-image">
                                        <a
                                            href="www.example.com"
                                            className="image"
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
                                        <a
                                            href="www.example.com"
                                            className="add-to-cart"
                                        >
                                            Purchase
                                        </a>
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
