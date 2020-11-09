import React from "react";
import { Redirect } from "react-router-dom";
function TInfo(props) {
  if (!props.itemItem) {
    return (
      <>
        <Redirect to="/Tablet" />
        <span>fdfd</span>
      </>
    );
  } else {
    return (
      <div className="itemItem">
        <div>
          <b>firstName :</b> {props.itemItem.firstName}
        </div>
        <div>
          <b>email:</b> {props.itemItem.email}
        </div>
        <div>
          <b>phone:</b> {props.itemItem.phone}
        </div>
        <div className="item_left">
          <div>
            <b> Location : </b>
          </div>
          <div>
            {" "}
            <b>streetAddress:</b> {props.itemItem.address.streetAddress}
          </div>
          <div>
            <b>city:</b> {props.itemItem.address.city}
          </div>
          <div>
            <b>state:</b> {props.itemItem.address.state}
          </div>
        </div>
        <div>
          <b>about:</b> <p>{props.itemItem.description}</p>
        </div>
      </div>
    );
  }
}
export default TInfo;
