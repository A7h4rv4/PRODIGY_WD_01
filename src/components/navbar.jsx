import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-center items-center h-14 fixed mx-auto w-full z-50">
      <nav className="flex gap-7 text-xl font-semibold text-indigo-600">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/about">
          <h3>About</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
