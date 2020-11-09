import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loader from "../assets/prelader/45.svg";
function Loader(props) {
  return (
    <div className="loader">
      <img src={loader} alt="" />
    </div>
  );
}
export default Loader;
