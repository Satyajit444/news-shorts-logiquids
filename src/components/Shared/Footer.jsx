import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/40"
            alt="Inshorts Logo"
            className="w-10 h-10"
          />
          <div>
            <h3 className="text-lg font-semibold">Inshorts</h3>
            <p className="text-sm">Pte. Ltd. ©COPYRIGHT 2024</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2 mt-4 md:mt-0">
          <a href="#" className="text-sm hover:underline">
            Contact Us
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy Policies
          </a>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter size={20}/>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
