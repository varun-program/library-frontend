import { FaBook, FaPlus, FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Sidebar(){

return(

<div className="w-60 h-screen bg-gray-900 text-white p-5">

<h2 className="text-xl font-bold mb-8">
Library Admin
</h2>

<nav className="flex flex-col gap-4">

<Link to="/" className="flex items-center gap-3 hover:text-indigo-400">
<FaHome/>
Dashboard
</Link>

<Link to="/add-book" className="flex items-center gap-3 hover:text-indigo-400">
<FaPlus/>
Add Book
</Link>

<Link to="/" className="flex items-center gap-3 hover:text-indigo-400">
<FaBook/>
Books
</Link>

</nav>

</div>

)

}
