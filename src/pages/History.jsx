import { useEffect, useState } from "react"
import axios from "axios"

export default function History(){

const [history,setHistory] = useState([])

useEffect(()=>{
fetchHistory()
},[])

const fetchHistory = async () => {

try{

const res = await axios.get("https://library-backend-1z5w.onrender.com/history")

setHistory(res.data)

}catch(error){

console.error("Failed to fetch history")

}

}

return(

<div className="max-w-5xl mx-auto">

<h1 className="text-3xl font-bold text-indigo-400 mb-8">
Borrow History
</h1>

<div className="space-y-4">

{history.map((item)=>{

return(

<div
key={item.id}
className="bg-slate-900 border border-slate-800
rounded-xl p-4 flex justify-between items-center
hover:border-indigo-500 transition">

<div className="text-gray-300">
Book ID: <span className="text-indigo-400">{item.book_id}</span>
</div>

<div className={`px-3 py-1 rounded-full text-sm font-semibold
${item.action === "borrowed"
? "bg-red-900 text-red-400"
: "bg-green-900 text-green-400"}`}>

{item.action}

</div>

</div>

)

})}

{history.length === 0 && (

<div className="text-gray-500 text-center py-10">
No history available
</div>

)}

</div>

</div>

)

}