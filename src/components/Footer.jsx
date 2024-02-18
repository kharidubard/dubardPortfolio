import React from "react";

function Footer() {
  return (
    <footer className="bg-primaryDarkBrown text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-[14px] md:text-base mb-4 md:mb-0">© 2024 Your Company Name</p>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
            <li>
              <a href="#" className="hover:text-primaryOrange">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-primaryOrange">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-primaryOrange">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

