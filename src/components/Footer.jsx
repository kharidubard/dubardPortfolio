import { NavLink } from "react-router-dom";

function Footer() {
  return (

    <footer className="bg-primaryOrange text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-[14px] md:text-base mb-4 md:mb-0">© 2025 Created by Khari DuBard</p>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
          <NavLink
								to="/"
								className="nav-link block lg:mt-0 text-white text-[1rem] hover:text-black mr-4 relative">
								Home
								<span className="underline-animation"></span>
							</NavLink>
            <NavLink
								to="/contact"
								className="nav-link block lg:mt-0 text-white text-[1rem] hover:text-black mr-4 relative">
								Contact
								<span className="underline-animation"></span>
							</NavLink>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

