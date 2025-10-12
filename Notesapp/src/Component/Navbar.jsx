import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Navbar() {
  const location = useLocation();
  const linkClass = (path) =>
    `px-3 py-2 rounded-md font-medium ${
      location.pathname === path ? "bg-white text-blue-500" : "text-white hover:bg-blue-700 hover:text-white transition duration-300"
    }`;

  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">NotesApp</h1>
        <div className="flex space-x-4">
          <NavLink to="/" className={linkClass("/")}>Home</NavLink>
          <NavLink to="/notes" className={linkClass("/notes")}>Notes</NavLink>
          <NavLink to="/about" className={linkClass("/about")}>About</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
