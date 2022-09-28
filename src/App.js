import { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutCompany from "./components/about_company/about_company";
import Capsules from "./components/capsules/capsules";
import Crew from "./components/crew/crew";
import Dragons from "./components/dragons/dragons";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";


class App extends Component {
 

  render() {
    return (
      <div className="App">
          <Header/>
        <div className="page">
         

          <Routes className ="content">
            <Route path="/" element={<AboutCompany />} />
            <Route path="/capsules" element={<Capsules />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/dragons" element={<Dragons />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

