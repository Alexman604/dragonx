import { Component } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutCompany from "./components/about_company/about_company";
import Launches from "./components/launches/launches";
import Crew from "./components/crew/crew";
import Dragons from "./components/dragons/dragons";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./firebase"
import { getAuth } from "firebase/auth";
import GoogleLogin from "./components/google_auth/google_login";


const auth = getAuth();
class App extends Component {
 

  render() {
    return (
      <div className="App">
          <Header/>
        <div className="page">
         
          
          <Routes className ="content">
            <Route path="/" element={<AboutCompany />} />
            <Route path="/launches" element={<Launches />} />
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

