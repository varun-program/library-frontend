import axios from "axios"

export default function BookCard({ book }) {

  const borrow = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/borrow/${book.id}`)
      window.location.reload()
    } catch (error) {
      alert("Failed to borrow book")
    }
  }

  const returnBook = async () => {
    try {
      await axios.post(`http://127.0.0.1:8000/return/${book.id}`)
      window.location.reload()
    } catch (error) {
      alert("Failed to return book")
    }
  }

  return (

    <div className="bg-slate-900 border border-slate-800
    rounded-xl p-5 w-full max-w-xs
    shadow-lg hover:border-indigo-500
    transition duration-300">

      {/* COVER IMAGE */}
      <img
        src={book.cover || "https://via.placeholder.com/300x180?text=No+Cover"}
        alt={book.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h2 className="text-lg font-semibold text-indigo-400 mb-1">
        {book.title}
      </h2>

      <p className="text-gray-300 text-sm">{book.author}</p>
      <p className="text-gray-500 text-xs mb-3">{book.category}</p>

      <p className={`text-sm font-semibold mb-4 ${
        book.available ? "text-green-400" : "text-red-400"
      }`}>
        {book.available ? "Available" : "Borrowed"}
      </p>

      {book.available ? (

        <button
          onClick={borrow}
          className="w-full bg-indigo-600 hover:bg-indigo-500
          text-white py-2 rounded-lg transition"
        >
          Borrow
        </button>

      ) : (

        <button
          onClick={returnBook}
          className="w-full bg-green-600 hover:bg-green-500
          text-white py-2 rounded-lg transition"
        >
          Return Book
        </button>

      )}

    </div>

  )
}