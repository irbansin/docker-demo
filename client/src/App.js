import { Routes, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AddTask />} />
          <Route path="edit/:id" element={<EditTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
