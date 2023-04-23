import React from "react";
import home from "../Assest/home.png";
import modules from "../Assest/modules.png";
import instruction from "../Assest/instruction.png"

const SideMenu = () => {
  return <div className="nav-container">
    <section >
        <img style={{marginTop: "5px" , marginLeft:"20px"}} className="sidepic" src={home} alt="home-icon"/>
        <h5  className="names shift">Home</h5>
    </section>
    <section>
        <img className="sidepic" src={modules} alt="modules-icon"/>
        <h5 className="names shift">Modules</h5>
    </section>
    <section>
        <img className="sidepic" src={instruction} alt="home-icon"/>
        <h5 className="names shift3  ">Instruction</h5>
    </section>

  </div>;
};

export default SideMenu;
