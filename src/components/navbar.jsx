import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 56) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header
      className={
        color
          ? "text-white  flex justify-center items-center h-14 fixed mx-auto w-full z-50 header_bg transition-all duration-200"
          : "text-white  flex justify-center items-center h-14 fixed mx-auto w-full z-50 transition-all duration-200"
      }
    >
      <nav className="flex gap-11 text-xl font-semibold ">
        <Link to="/">
          <h3 className="hover:text-cust_color1">Home</h3>
        </Link>
        <Link to="/about">
          <h3 className="hover:text-cust_color1">About</h3>
        </Link>
        <Link to="/contact">
          <h3 className="hover:text-cust_color1">Contact</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
