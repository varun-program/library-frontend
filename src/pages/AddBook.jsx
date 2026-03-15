import { useState } from "react"
import axios from "axios"

export default function AddBook(){

const [title,setTitle] = useState("")
const [author,setAuthor] = useState("")
const [category,setCategory] = useState("")
const [cover,setCover] = useState("")
const [loading,setLoading] = useState(false)

const addBook = async () => {

if(!title.trim() || !author.trim() || !category.trim()){
alert("Please fill all required fields")
return
}

try{

setLoading(true)

await axios.post("http://127.0.0.1:8000/add-book",{
title,
author,
category,
cover
})

setTitle("")
setAuthor("")
setCategory("")
setCover("")

alert("Book Added Successfully")

}catch(error){

console.error(error)
alert("Failed to add book")

}finally{

setLoading(false)

}

}

return(

<div className="p-10 flex justify-center">

<div className="w-full max-w-3xl
bg-slate-900/60 backdrop-blur-lg
border border-slate-800
rounded-2xl p-10 shadow-xl">

<h2 className="text-3xl font-bold text-indigo-400 mb-8">
Add New Book
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

<input
value={title}
onChange={(e)=>setTitle(e.target.value)}
placeholder="Book Title"
className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg
focus:ring-2 focus:ring-indigo-500 outline-none"
/>

<input
value={author}
onChange={(e)=>setAuthor(e.target.value)}
placeholder="Author"
className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg
focus:ring-2 focus:ring-indigo-500 outline-none"
/>

<input
value={category}
onChange={(e)=>setCategory(e.target.value)}
placeholder="Category"
className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg
focus:ring-2 focus:ring-indigo-500 outline-none"
/>

<input
value={cover}
onChange={(e)=>setCover(e.target.value)}
placeholder="Cover Image URL (optional)"
className="bg-slate-900 border border-slate-700 px-4 py-3 rounded-lg
focus:ring-2 focus:ring-indigo-500 outline-none"
/>

</div>

<button
onClick={addBook}
disabled={loading}
className="bg-indigo-600 hover:bg-indigo-500
px-6 py-3 rounded-lg text-white font-semibold
transition disabled:opacity-50">

{loading ? "Adding..." : "Add Book"}

</button>

</div>

</div>

)
}