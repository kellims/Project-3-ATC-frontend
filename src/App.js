
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Information from "./pages/Information";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/locations' element={<Locations />} />
          <Route path="/locations/:id" element={ <Information />} />
          </Routes>
        <Footer />
    </div>
    </>
  );
}

export default App;
