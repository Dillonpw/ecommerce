import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

// Updated Product interface
interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string; // URL of the product image
}

const Store: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <Header />
            <div>
                <h1>Product Store</h1>
                {products.length > 0 ? (
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                <img className="w-60"src={product.image} alt={product.title} /> {/* Displaying the image */}
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                                {/* Render additional product details here */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading products...</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Store;
