
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Information from "./pages/Information";
import LocationEdit from "./pages/LocationEdit";
import RemoveLocation from "./pages/LocationDelete";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header />
      <div className="App">
        
        <Routes>
          <Route path='/locations' element={<Locations />} />
          <Route path="/locations/:id" element={ <Information />} />
            <Route path="/locations/:id/delete" element={<RemoveLocation />} />
            <Route path="/locations/:id/edit" element={<LocationEdit />} />
            
          </Routes>
        <Footer />
    </div>
    </>
  );
}

export default App;
