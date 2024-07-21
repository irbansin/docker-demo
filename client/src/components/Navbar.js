import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-center">
      <Link className="navbar-brand" to="/">
        To Do list App
      </Link>
  
    </nav>
  );
};

export default Navbar;
