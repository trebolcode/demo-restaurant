import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<p>Page Menu</p>} />
        <Route path="/about" element={<p>Page About</p>} />
        <Route path="/reservation" element={<p>Page reservation</p>} />
        <Route path="/stuff" element={<p>Page stuff</p>} />
        <Route path="/gallery" element={<p>Page gallery</p>} />
        <Route path="/contact" element={<p>Page contact</p>} />
        <Route path="/blog" element={<p>Page blog</p>} />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
