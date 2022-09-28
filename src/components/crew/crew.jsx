import React, { Component } from "react";
import DragonServices from "../../services/fetchdata";
import ModalEmployee from "../modal/modal";
import Spinner from "../spinner/spinner";
import "./crew.css";

class Crew extends Component {
   state = {
    data: [],
    loading: true,
    modal: false,
    modalData: {},
  };

  getCrewData = new DragonServices();

  updateData = () => {
    this.getCrewData  //get all data
    .getCrewAll()
    .then((employees)=>{
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
  
  openModal = (id) => {
    let index = this.state.data.findIndex((item) => item.id === id);
    console.log(this.state.data[index].name);
    this.setState({
      modal: true,
      modalData:  this.state.data[index] 
    });
  }

  closeModal = () => {
    
   this.setState({modal: false});
  }
  
  componentDidUpdate() {
  console.log(this.state.modalData);
  }

  componentDidMount() {
    setTimeout(() => { this.updateData() }, 1000) //timeout is for spinner
    
  }

  render() {
    const { name, image, agency, wiki, id, data, loading, launches } = this.state;
    
    if(loading) {return <Spinner/>}

    
    return (
      <div className="crew">
        
        <ModalEmployee modal={this.state.modal} modalData={this.state.modalData } closeModal={this.closeModal} />
        <div className="crew-wrapper">
          {data.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <div className="cardEmployee" onClick={() => this.openModal(item.id)}>
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
