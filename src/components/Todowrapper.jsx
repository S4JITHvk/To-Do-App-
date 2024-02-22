import React from "react";
import Addtodo from "./Addtod";
import "../App.css";

const Todowrapper = () => {
  return (
    <div className="wrapper">
      <header>
        <img src="/logo3.png.jpg" alt="Logo" style={{ width: "150px", height: "70px" }} />
        Todo App
      </header>
      <Addtodo />
    </div>
  );
};

export default Todowrapper;
