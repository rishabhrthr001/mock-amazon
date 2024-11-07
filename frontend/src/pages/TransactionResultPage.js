import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TransactionResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isSuccess } = location.state || {};
  const [orderId, setOrderId] = useState(null);
  const [trackingStatus, setTrackingStatus] = useState("Order Confirmed");

  useEffect(() => {
    if (isSuccess) {

      setOrderId(`ORD-${Math.floor(100000 + Math.random() * 900000)}`);

      const trackingUpdates = [
        "Order Confirmed",
        "Packed",
        "Shipped",
        "Out for Delivery",
        "Delivered"
      ];

      let index = 0;
      const interval = setInterval(() => {
        if (index < trackingUpdates.length) {
          setTrackingStatus(trackingUpdates[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 3000); 
    }
  }, [isSuccess]);

  return (
    <div className="container mx-auto py-8 text-center">
      {isSuccess ? (
        <div>
          <h2 className="text-3xl font-semibold mb-4">Transaction Successful!</h2>
          <p className="text-lg mb-6">Thank you for your purchase.</p>
          <p className="text-lg mb-6">Order ID: <span className="font-bold">{orderId}</span></p>
          <h3 className="text-xl font-semibold mt-8">Tracking Status</h3>
          <p className="text-lg mt-2">{trackingStatus}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4">Transaction Failed</h2>
          <p className="text-lg mb-6">Please try again.</p>
        </div>
      )}
      <button
        onClick={() => navigate('/')}
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default TransactionResultPage;
