/* eslint-disable no-unused-vars */
import { Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/hom";
import { About } from "./pages/about";
import { Review } from "./pages/Review";
import{ Footer } from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home id="home" style={{ backgroundColor: "lightblue" }}/>}></Route>
      <Route path="/about" element={<About id="lib"/>}></Route>
      <Route path="/review" element={<Review id="R"/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;