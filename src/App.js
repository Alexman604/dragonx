import { Component } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AboutCompany from "./components/about_company/about_company";
import Capsules from "./components/capsules/capsules";
import Crew from "./components/crew/crew";
import Dragons from "./components/dragons/dragons";
import Header from "./components/header/header";

class App extends Component {
  constructor(props) {
    super(props);
    state: {
    }
  }

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
