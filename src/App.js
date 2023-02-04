import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="bg-primary-subtle">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News category="general"/>} />
          <Route exact path="/general" element={<News key={1000*Math.random()} category="general"/>} />
          <Route exact path="/business" element={<News key={1000*Math.random()} category="business"/>} />
          <Route path="/entertainment" element={<News key={1000*Math.random()} category="entertainment"/>} />
          <Route path="/health" element={<News key={1000*Math.random()} category="health"/>} />
          <Route path="/technology" element={<News key={1000*Math.random()} category="technology"/>} />
          <Route path="/science" element={<News key={1000*Math.random()} category="science"/>} />
          <Route path="/sports" element={<News key={1000*Math.random()} category="sports"/>} />
        </Routes>
        <Footer />
    </div>
  );
}
        {/* <Routes>
          <Route path="/" element={<Navbar />} />
          <Route exact path="/" element={<News category="general"/>} />
          <Route exact path="/"><News key="general" category="general"/></Route> 
          <Route exact path="/general" element={<News category="general"/>} />
          <Route exact path="/business" element={<News category="business"/>} />
          <Route path="/entertainment" element={<News category="entertainment"/>} />
          <Route path="/health" element={<News category="health"/>} />
          <Route path="/technology" element={<News category="technology"/>} />
          <Route path="/science" element={<News category="science"/>} />
          <Route path="/sports" element={<News category="sports"/>} />
          
          <Route path="*" element={<Navbar />} />
      </Routes> */}
     

export default App;
