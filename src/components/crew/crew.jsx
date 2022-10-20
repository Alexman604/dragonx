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
  //  console.log("hello from update data");
    this.setState({ loading: true, modal: false });
    setTimeout(() => {
      this.getCrewData //get all employees data
        .getCrewAll()
        .then((employees) => {
          this.setState({
            data: [...employees],
            loading: false,
          });
        });
    }, 2000); //timeout is for spinner
  };

  openModal = (id) => {
    let index = this.state.data.findIndex((item) => item.id === id);
    this.setState({
      modal: true,
      modalData: this.state.data[index],
    });
  };

  closeModal = () => {
    this.setState({ modal: false });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.updateData();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = (event) => {
  //  console.log(document.documentElement.scrollHeight, document.documentElement.scrollTop, document.documentElement.clientHeight);
  //  if (window.scrollY <= 0) {
    //  this.updateData();
   // }
  };
  render() {
    const { data, loading } = this.state;

    return (
      <div className="crew">
        <div className="crew-wrapper" name="crew" onScrollCapture={this.handleScroll}>
          {loading ? <Spinner /> : <CrewList data={data} openModal={this.openModal} />}
        </div>
        <ModalEmployee modal={this.state.modal} modalData={this.state.modalData} closeModal={this.closeModal} />
      </div>
    );
  }
}

const CrewList = ({ data, openModal }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div className="cardEmployee" onClick={() => openModal(item.id)}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};
export default Crew;
