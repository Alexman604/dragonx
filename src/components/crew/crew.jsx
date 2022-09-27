import React, { Component } from "react";
import DragonServices from "../../services/fetchdata";
import Spinner from "../spinner/spinner";
import "./crew.css";

class Crew extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    data: [],
    loading: true,
  };

  getCrewData = new DragonServices();

  updateData = () => {
    this.getCrewData  //get all data
    .getCrewAll().
    then((employees)=>{
        this.setState({
          data: [...employees],
          loading: false,
        })
    }
        )
    
    this.getCrewData //get one employee data
      .getCrewEmployee("5ebf1a6e23a9a60006e03a7a")
      .then((employee) => {
        this.setState(employee);
      });
  };

  componentDidMount() {
    setTimeout(() => { this.updateData() }, 1000) //timeout is for spinner
    
  }

  render() {
    const { name, image, agency, wiki, id, data, loading } = this.state;
    
    if(loading) {return <Spinner/>}

    
    return (
      <div>
        <div>
          <div className="cardEmployee">
            <img src={image} alt="" />
            <p>{name} , id: {id}</p>
            <p>{agency}</p>
            <a href={wiki}>Wikipedia</a>
          </div>
        </div>
        <div className="crew-wrapper">
          {data.map((item) => {
            
           return (
             <React.Fragment key={item.id}>
               <div className="cardEmployee">
                 <img src={item.image} alt="" />
                 <p>{item.name}</p>
                 <p>{item.agency}</p>
                 <a href={item.wiki}>Wikipedia</a>
               </div>
             </React.Fragment>
           );
            
          })}
        </div>
      </div>
    );
  }
}

export default Crew;
