
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Information from "./pages/Information";
import RemoveLocation from './pages/LocationDelete'
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
            <Route path="/locations/:id/delete" element={<RemoveLocation />} />
          </Routes>
        <Footer />
    </div>
    </>
  );
}

export default App;
