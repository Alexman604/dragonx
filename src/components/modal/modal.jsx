import React, { Component } from "react";
import "./modal.css";

class ModalEmployee extends Component {
  render() {
    const {
      modal,
      closeModal,
      modalData: { image, name, agency, wiki, launches },
    } = this.props;

    return (
      <div className={modal ? "modal1-wrapper active" : "modal1-wrapper"} onClick={closeModal}>
        <div
          className="modal1-content"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img src={image} alt="" />
          <div className="info">
            <p> Name: {name} </p>
            <p>Agency: {agency}</p>
            <p className={launches}>Launches: /under construction/</p>
            <a target="_blank" rel="noreferrer" href={wiki}>
              MORE INFO (wiki)
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalEmployee;
