import { useEffect, useState } from "react"
import axios from "axios"

export default function Books(){

const [books,setBooks] = useState([])

useEffect(()=>{
fetchBooks()
},[])

const fetchBooks = async ()=>{
const res = await axios.get("https://library-backend-1z5w.onrender.com/books")
}

const deleteBook = async(id)=>{
await axios.delete(`https://library-backend-1z5w.onrender.com/delete-book/${id}`)
fetchBooks()
}

return(

<div className="p-10">

<h2 className="text-3xl font-bold text-indigo-400 mb-8">
All Books
</h2>

<div className="overflow-x-auto">

<table className="w-full border border-slate-800 rounded-lg overflow-hidden">

<thead className="bg-slate-900 text-gray-300">

<tr>
<th className="p-4 text-left">Title</th>
<th className="p-4 text-left">Author</th>
<th className="p-4 text-left">Category</th>
<th className="p-4 text-left">Status</th>
<th className="p-4 text-left">Action</th>
</tr>

</thead>

<tbody>

{books.map((b)=>(
<tr key={b.id} className="border-t border-slate-800">

<td className="p-4">{b.title}</td>
<td className="p-4">{b.author}</td>
<td className="p-4">{b.category}</td>

<td className="p-4">
<span className={`font-semibold ${
b.available ? "text-green-400" : "text-red-400"
}`}>
{b.available ? "Available" : "Borrowed"}
</span>
</td>

<td className="p-4">

<button
onClick={()=>deleteBook(b.id)}
className="bg-red-600 hover:bg-red-500 px-3 py-1 rounded text-white"
>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}