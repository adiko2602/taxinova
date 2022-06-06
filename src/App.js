import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/taxinova/" element={<Home />} />
          <Route path="/taxinova/gallery/" element={<Gallery />} />
          <Route path="/taxinova/contact/" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
