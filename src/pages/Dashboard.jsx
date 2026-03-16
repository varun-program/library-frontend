import { useEffect, useState } from "react"
import axios from "axios"
import BookCard from "../components/BookCard"

export default function Dashboard(){

const [books,setBooks] = useState([])
const [search,setSearch] = useState("")
const [loading,setLoading] = useState(true)
const [error,setError] = useState(null)

useEffect(()=>{

axios.get("https://library-backend-1z5w.onrender.com/book")
.then(res=>{
setBooks(res.data)
setLoading(false)
})
.catch(()=>{
setError("Failed to load books")
setLoading(false)
})

},[])

const totalBooks = books.length
const availableBooks = books.filter(b => b.available).length
const borrowedBooks = books.filter(b => !b.available).length

const filteredBooks = books.filter((b)=>
b.title.toLowerCase().includes(search.toLowerCase()) ||
b.author.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="p-10 w-full flex justify-center">
  <div className="w-full max-w-7xl
  bg-slate-900/60 backdrop-blur-lg
  border border-slate-800
  rounded-2xl p-10 shadow-2xl">

{/* Title */}

<h1 className="text-4xl font-bold mb-12 text-center
bg-gradient-to-r from-indigo-400 to-purple-500
text-transparent bg-clip-text">
Library Dashboard
</h1>

{/* Statistics Cards */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-slate-900 border border-slate-800 p-7 rounded-xl">
<p className="text-gray-400 text-sm">Total Books</p>
<p className="text-3xl font-bold text-indigo-400 mt-2">
{totalBooks}
</p>
</div>

<div className="bg-slate-900 border border-slate-800 p-7 rounded-xl">
<p className="text-gray-400 text-sm">Available</p>
<p className="text-3xl font-bold text-green-400 mt-2">
{availableBooks}
</p>
</div>

<div className="bg-slate-900 border border-slate-800 p-7 rounded-xl">
<p className="text-gray-400 text-sm">Borrowed</p>
<p className="text-3xl font-bold text-red-400 mt-2">
{borrowedBooks}
</p>
</div>

</div>


{/* Search Bar */}

<div className="w-full max-w-xl
bg-slate-900 border border-slate-700
px-4 py-3 rounded-xl
focus:ring-2 focus:ring-indigo-500
outline-none mb-10">
<input
placeholder="Search books by title or author..."
className="w-full max-w-xl px-5 py-3
rounded-xl bg-slate-800 border border-slate-700
text-white placeholder-gray-400
focus:ring-2 focus:ring-indigo-500
focus:outline-none shadow-md"
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

{/* Loading */}

{loading && (

<p className="text-center text-gray-400 text-lg">
Loading books...
</p>
)}

{/* Error */}

{error && (

<p className="text-center text-red-400 text-lg">
{error}
</p>
)}

{/* Empty State */}

{!loading && filteredBooks.length === 0 && (

<p className="text-center text-gray-400 text-lg">
No books found
</p>
)}

{/* Book Grid */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    
{filteredBooks.map((b)=>(
<BookCard key={b.id} book={b}/>
))}

</div>
</div>
</div>

)

}
