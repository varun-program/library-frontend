import { NavLink } from "react-router-dom"

export default function NavBar(){

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1"
      : "text-gray-300 hover:text-indigo-400 transition"

  return(

    <nav className="w-full bg-slate-950 border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        <h1 className="text-lg font-semibold text-indigo-400">
          📚 Library Management
        </h1>

        <div className="flex gap-8">

          <NavLink to="/" className={linkStyle}>
            Dashboard
          </NavLink>

          <NavLink to="/add-book" className={linkStyle}>
            Add Book
          </NavLink>

          <NavLink to="/books" className={linkStyle}>
            Books
          </NavLink>

            <NavLink to="/history" className={linkStyle}>
            History
            </NavLink>

        </div>

      </div>

    </nav>

  )
}