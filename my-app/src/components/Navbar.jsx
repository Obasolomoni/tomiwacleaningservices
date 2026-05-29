import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">My Sister Biz</h1>

      <div className="flex gap-6 text-sm cursor-pointer">
        <Link to="/" className="hover:text-sky-400">Home</Link>
        <Link to="/cleaning" className="hover:text-sky-400">Cleaning</Link>
        <Link to="/food" className="hover:text-sky-400">Food</Link>
        <Link to="/real-estate" className="hover:text-sky-400">Real Estate</Link>
        <Link to="/media" className="hover:text-sky-400">Media</Link>
      </div>
    </nav>
  );
}

export default Navbar;