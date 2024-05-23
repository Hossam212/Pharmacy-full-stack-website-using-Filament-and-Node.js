import { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("/customers");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    return products;
    /* <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
    */
};

export default ProductList;
