import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './webpages/Home';
import Login from "./webpages/Login";
import AddProducts from "./components/AddProducts";

function App() {
  return (
    <Router> {/* Use Router here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<AddProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
