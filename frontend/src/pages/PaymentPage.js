import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mockQRCode from '../assets/mock-qr-code.png';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardDetails, setCardDetails] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [upiId, setUpiId] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
  });
  const totalAmount = 1000;
  const navigate = useNavigate();

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handlePayment = () => {
    if (!address.street || !address.city || !address.state || !address.postalCode) {
      alert('Please fill in your address details.');
      return;
    }

    // Simulate 50/50 chance of payment success
    const isSuccess = Math.random() >= 0.5;

    navigate('/transaction-result', { state: { isSuccess } });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      {/* Address Section */}
      <div className="space-y-4 mb-8">
        <h3 className="text-xl font-semibold">Shipping Address</h3>
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleAddressChange}
          placeholder="Street Address"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleAddressChange}
          placeholder="City"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          name="state"
          value={address.state}
          onChange={handleAddressChange}
          placeholder="State"
          className="w-full p-3 border rounded-md"
        />
        <input
          type="text"
          name="postalCode"
          value={address.postalCode}
          onChange={handleAddressChange}
          placeholder="Postal Code"
          className="w-full p-3 border rounded-md"
        />
      </div>

      <h2 className="text-2xl font-semibold mb-4">Payment Options</h2>

      <div className="flex">
        <div className="w-1/3 pr-8">
          <div className="space-y-4">
            <button
              onClick={() => setPaymentMethod('COD')}
              className={`w-full p-4 text-lg font-medium border rounded-lg ${paymentMethod === 'COD' ? 'bg-blue-100' : ''}`}
            >
              Cash on Delivery
            </button>

            <button
              onClick={() => setPaymentMethod('Card')}
              className={`w-full p-4 text-lg font-medium border rounded-lg ${paymentMethod === 'Card' ? 'bg-blue-100' : ''}`}
            >
              Credit/Debit Card
            </button>

            <button
              onClick={() => setPaymentMethod('UPI')}
              className={`w-full p-4 text-lg font-medium border rounded-lg ${paymentMethod === 'UPI' ? 'bg-blue-100' : ''}`}
            >
              UPI
            </button>
          </div>
        </div>

        <div className="w-2/3">
          {paymentMethod === 'Card' && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Enter Card Details</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  name="cardName"
                  value={cardDetails.cardName}
                  onChange={handleCardChange}
                  placeholder="Name on Card"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  placeholder="Card Number"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleCardChange}
                  placeholder="Expiry Date (MM/YY)"
                  className="w-full p-3 border rounded-md"
                />
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  placeholder="CVV"
                  className="w-full p-3 border rounded-md"
                />
              </div>
            </div>
          )}

          {paymentMethod === 'UPI' && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Enter UPI ID</h3>
              <input
                type="text"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                placeholder="Enter your UPI ID"
                className="w-full p-3 border rounded-md"
              />

              {/* Mock QR Code Display */}
              <div className="mt-6 text-center">
                <h4 className="text-xl font-semibold mb-4">Scan QR Code</h4>
                <img src={mockQRCode} alt="QR Code" className="mx-auto mb-4" style={{ width: '200px' }} />
                <p className="text-lg font-semibold">Total Amount: ₹{totalAmount}</p>
              </div>
            </div>
          )}

          {paymentMethod === 'COD' && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Cash on Delivery</h3>
              <p className="text-lg">You can pay in cash upon delivery.</p>
            </div>
          )}
        </div>
      </div>

      {/* Payment Button */}
      <div className="mt-8">
        <button
          onClick={handlePayment}
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg w-full text-lg font-semibold"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
