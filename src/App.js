import { Component } from "react";
import "./App.css";
import {Routes, Route, Link} from 'react-router-dom';
import AboutCompany from "./components/about_company/about_company";
import Capsules from "./components/capsules/capsules";
import Crew from "./components/crew/crew";
import Dragons from "./components/dragons/dragons";

class App extends Component {
  constructor(props) {
    super(props);
    state:{
    }
  }
  
render() {
    return (
      <div className="App">
        <header> 
          
          <div className="header">this is header</div>
        </header>
        
        <section className="left section "></section>
        
        <ul className="menu">
          <li> <Link to={"/about_company"}> <span> About SpaceX </span></Link></li>
          <li> <Link to={"/capsules"}> <span>Capsules</span> </Link></li>
          <li> <Link to={"/crew"}> <span>Crew</span> </Link></li>
          <li> <Link to={"/dragons"}> <span>Dragons</span></Link></li>
        
        </ul>
        
        <Routes>
                <Route path="/about_company" element={<AboutCompany/>}/>
                <Route path="/capsules" element={<Capsules/>}/>
                <Route path="/crew" element={<Crew/>}/>
                <Route path="/dragons" element={<Dragons/>}/>
        </Routes>
        
      </div>
    );
  }
}

export default App;



// getFromLocalStorage () {
//   const data = JSON.parse(localStorage.getItem('data'));
//   console.log(data);

//   data.flickr_images.forEach(item => {console.log(item);})
//   this.setState({data})
// }

//   showData () {
//     console.log(...this.state.data.flickr_images);
//   }