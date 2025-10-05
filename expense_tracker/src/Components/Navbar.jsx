import { NavLink , Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>
      <ul className="flex gap-6 text-lg">
       <NavLink to='/'>
        <li className="hover:text-yellow-300 cursor-pointer">Dashboard</li>
       </NavLink>

       <NavLink to='/Add'>
        <li className="hover:text-yellow-300 cursor-pointer">Add</li>
        </NavLink>

        <NavLink to='/History'>
        <li className="hover:text-yellow-300 cursor-pointer">History</li>
        </NavLink>

        <NavLink to='/About'>
        <li className="hover:text-yellow-300 cursor-pointer">About</li>
        </NavLink>

      </ul>
    </nav>
  );
}

export default Navbar;
