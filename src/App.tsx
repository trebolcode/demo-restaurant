import { Route, Routes } from "react-router-dom";
import ConsultApi from "./components/ConsultApi";
import Footer from "./components/Footer";
import GetApi from "./components/GetApi";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<p>Page reservation</p>} />
        <Route path="/stuff" element={<p>Page stuff</p>} />
        <Route path="/gallery" element={<p>Page gallery</p>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<p>Page blog</p>} />
        {/* for test */}
        <Route path="/api" element={<ConsultApi />} />
        <Route path="/testapi" element={<GetApi />} />
        {/* for test */}
        <Route path="*" element={<p>404 Not Found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
