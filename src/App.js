import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/taxinova/" element={<Home />} />
          <Route exact path="/taxinova/gallery/" element={<Gallery />} />
          <Route exact path="/taxinova/contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
