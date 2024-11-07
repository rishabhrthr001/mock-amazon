import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/orders/${orderId}`);
        const data = await response.json();
        setOrderDetails(data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    if (orderId) {
      fetchOrderDetails();
    }
  }, [orderId]);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Order Success</h2>
      <div className="border p-4 rounded-lg shadow mb-4">
        <p className="text-lg font-medium mb-2">Order ID: {orderDetails.orderId}</p>
        <p className="text-lg font-medium mb-4">Status: {orderDetails.status}</p>
        <h3 className="text-xl font-semibold mb-4">Products:</h3>
        {orderDetails.products.map((product) => (
          <div key={product.id} className="mb-4">
            <h4 className="text-lg">{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="mt-4">
          <p className="text-lg font-semibold">Total Price: ${orderDetails.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
