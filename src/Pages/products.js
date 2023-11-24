import axios from "axios";
import { useState, useEffect } from "react";
import { imageMap } from "./ImageMap";

// Rest of your Products component code



export default function Products({addToCart}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost/tomford/products.php')
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    

    return (
        <>
            <p style={{textAlign:"center", fontSize:"3rem", fontWeight:"bolder"}}>All Fragrances</p>
            <div >
            <div className="product_display">
                {products.map(product => (
                    <div key={product.id} className="product_cont">
                        <img src={imageMap[product.name]} alt={product.name} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart({ ...product, imageUrl: imageMap[product.name] })}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}

