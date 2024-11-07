import React from 'react';

const PaymentFailure = () => (
  <div className="container mx-auto py-8 text-center">
    <h1 className="text-3xl font-semibold text-red-600">Transaction Failed!</h1>
    <p className="mt-4 text-lg">Please try again or choose a different payment method.</p>
  </div>
);

export default PaymentFailure;