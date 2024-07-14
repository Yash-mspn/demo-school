import "./App.css";
import "./Components/css/Header.css";
import "./Components/css/Footer.css";
import "./Components/css/Home.css";
import "./Components/css/Banner.css";
import "./Components/css/style.css";
import "./Components/css/Gallery.css";
import "./Components/css/Facility.css";
import "./Components/css/Contact.css";
import "./Components/css/Acadmic.css";
import "./Components/css/Our.css";



import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Updates from "./Components/Header/Updates";
import TopNav from "./Components/Header/TopNav";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Header/Navbar";

import Gallery from "./Components/Gallery";
import Facilities from "./Components/Facilities";
import Contactus from "./Components/Contactus";
import Acadmic from "./Components/Acadmic";
import Ourschool from "./Components/Ourschool";
import Director from "./Components/Director";
import Principle from "./Components/Principle";
import Chairman from "./Components/Chairman";
import UniformDetails from "./Components/UniformDetails"
import LatestUpdate from "./Components/LatestUpdate"
import AdmissionProcedure from "./Components/AdmissionProcedure";
import Eventmain from "./Components/newseventsection/Eventmain"

function App() {
  return (
    <>
      <div class="main">
        <BrowserRouter>
          {/* <Updates />      */}
          <TopNav />
          <Navbar/>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/facilities" element={<Facilities/>} />
            <Route path="/contact" element={<Contactus/>} />
             <Route path="/academic" element={<Acadmic/>} />
             <Route path="/ourSchool" element={<Ourschool/>} />
             <Route path="/director" element={<Director/>} />
             <Route path="/principal" element={<Principle/>} />
             <Route path="/chairman" element={<Chairman/>} />
             <Route path="/uniformdetails" element={<UniformDetails/>} />
             <Route path="/latestupdate" element={<LatestUpdate/>} />
             <Route path="/admissionprocedure" element={<AdmissionProcedure/>} />
             <Route path="/Eventmain" element={<Eventmain/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
    </>
  );
}

export default App;
