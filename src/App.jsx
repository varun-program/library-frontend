import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import AddBook from "./pages/AddBook"
import Books from "./pages/Books"
import History from "./pages/History"

function App() {

return ( <BrowserRouter>


  <div className="min-h-screen bg-slate-950 text-gray-200 flex flex-col">

    {/* Top Navigation */}
    <Navbar />

    {/* Main Content */}
    <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-10 py-10">

      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/history" element={<History />} />

      </Routes>

    </main>

  </div>

</BrowserRouter>
)
}

export default App
