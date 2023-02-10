import { Routes,Route } from "react-router-dom";
import { About } from "./components/about";
import{ Home} from "./components/hom";
import { Prototype } from "./components/Navprotoype";
import { Footer } from "./components/Footer";
import { Review } from "./components/Review";

function App() {
  return (
    <>
    <Prototype/>
    <Routes>
      <Route path="/" element={<Home id="home" style={{ backgroundColor: "lightblue" }}/>}></Route>
      <Route path="about" element={<About id="lib"/>}></Route>
      <Route path="review" element={<Review id="R"/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
