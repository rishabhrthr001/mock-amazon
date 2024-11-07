import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products?limit=4') 
      .then((response) => setFeaturedProducts(response.data))
      .catch((error) => console.error(error));

    axios
      .get('https://fakestoreapi.com/products?limit=4') 
      .then((response) => setSaleProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-semibold mb-4">Welcome to Amazon Clone</h1>
      <p className="text-lg text-gray-700 mb-6">
        Find your favorite products at amazing prices!
      </p>

      <div className="bg-yellow-200 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/products" className="text-blue-500 hover:underline mt-4 inline-block">
          View All Products
        </Link>
      </div>

      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Big Sale</h2>
        <p className="mb-4">Up to 50% off on selected items. Don’t miss out!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {saleProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Sale
              </div>
              <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Link to="/products" className="text-yellow-400 hover:underline mt-4 inline-block">
          Shop Sale
        </Link>
      </div>
    </div>
  );
};

export default Home;
