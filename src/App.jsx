import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen grid place-items-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
