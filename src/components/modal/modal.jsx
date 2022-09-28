import React, { Component } from "react";
import "./modal.css";

class ModalEmployee extends Component {
  render() {
    const { modal, closeModal, modalData: {image,name, agency, wiki, id }} = this.props;
    // console.log("modal window",modalData);
    return (
      <div className={modal ? "modal-wrapper active" : "modal-wrapper"} onClick={closeModal}>
        <div>
          <div className="cardEmployee">
            <img src={image} alt="" />
            <p>
              {name} , id: {id}
            </p>
            <p>{agency}</p>
            <a href={wiki}>Wikipedia</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalEmployee;
