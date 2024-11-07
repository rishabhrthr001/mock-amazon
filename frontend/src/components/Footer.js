import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h5 className="font-semibold mb-2">Get to Know Us</h5>
          <ul>
            <li className="hover:underline"><a href="#">About Us</a></li>
            <li className="hover:underline"><a href="#">Careers</a></li>
            <li className="hover:underline"><a href="#">Press Releases</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Make Money with Us</h5>
          <ul>
            <li className="hover:underline"><a href="#">Sell on Amazon</a></li>
            <li className="hover:underline"><a href="#">Affiliate Program</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Amazon Payment</h5>
          <ul>
            <li className="hover:underline"><a href="#">Amazon Pay</a></li>
            <li className="hover:underline"><a href="#">Reload Your Balance</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-2">Help</h5>
          <ul>
            <li className="hover:underline"><a href="#">Customer Service</a></li>
            <li className="hover:underline"><a href="#">Returns</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
