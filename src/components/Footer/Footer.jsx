import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[100px] bg-white py-[100px] px-[250px]">
      <h1 className="text-[#09080F] text-3xl font-bold text-center">
        Gadget Heaven
      </h1>

      <p className="text-[#09080F99] font-medium text-center mt-3">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="mt-5" />
      <div className="flex justify-between mt-12">
        <ul className="text-[#09080F99] flex flex-col">
          <h2 className="text-[#09080F] text-[18px] font-bold mb-3">
            Services
          </h2>
          <li>Product Support</li>
          <li>Order Tracking</li>
          <li>Shipping & Delivery</li>
          <li>Return</li>
        </ul>
        <ul className="text-[#09080F99] flex flex-col">
          <h2 className="text-[#09080F] text-[18px] font-bold mb-3">Company</h2>

          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="text-[#09080F99] flex flex-col">
          <h2 className="text-[#09080F] text-[18px] font-bold mb-3">Legal</h2>

          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
