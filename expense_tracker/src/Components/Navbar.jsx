import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Expense Tracker</h1>
        
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-lg">
          <NavLink to="/" className="hover:text-yellow-300">Dashboard</NavLink>
          <NavLink to="/Add" className="hover:text-yellow-300">Add</NavLink>
          <NavLink to="/History" className="hover:text-yellow-300">History</NavLink>
          <NavLink to="/About" className="hover:text-yellow-300">About</NavLink>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 md:hidden text-lg">
          <NavLink to="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Dashboard</NavLink>
          <NavLink to="/Add" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Add</NavLink>
          <NavLink to="/History" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>History</NavLink>
          <NavLink to="/About" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>About</NavLink>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
