import "./App.css";
import React, {Component} from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render(){
  return (
    <div className="bg-primary-subtle">
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
         />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} category="general"/>} />
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={1000*Math.random()} category="general"/>} />
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={1000*Math.random()} category="business"/>} />
          <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={1000*Math.random()} category="entertainment"/>} />
          <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={1000*Math.random()} category="health"/>} />
          <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={1000*Math.random()} category="technology"/>} />
          <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={1000*Math.random()} category="science"/>} />
          <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={1000*Math.random()} category="sports"/>} />
        </Routes>
        <Footer />
    </div>
  );
  }
}
export default App;
