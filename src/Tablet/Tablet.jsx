import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Tablet(props) {
  let up = props.sort === "asc" ? "↓" : "↑";
  return (
    <table className="table Tablet">
      <thead>
        <tr>
          <th
            onClick={() => {
              props.sortItems("id");
            }}
          >
            {" "}
            id {props.sortField == "id" ? up : ""}{" "}
          </th>
          <th
            onClick={() => {
              props.sortItems("firstName");
            }}
          >
            firstName {props.sortField == "firstName" ? up : ""}
          </th>
          <th
            onClick={() => {
              props.sortItems("email");
            }}
          >
            email {props.sortField == "email" ? up : ""}
          </th>
          <th
            onClick={() => {
              props.sortItems("phone");
            }}
          >
            phone {props.sortField == "phone" ? up : ""}
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((i) => (
          <>
            <tr
              key={i.id + i.firstName}
              onClick={() => {
                props.checkItem(i);
              }}
              className="tablet__data"
            >
              <td>{i.id}</td>
              <td>{i.firstName}</td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
            </tr>
            <div className="tablet__data-ln">
              <NavLink
                onClick={() => {
                  props.checkItem(i);
                }}
                to="/Todo"
              >
                {" "}
                see about {i.firstName}{" "}
              </NavLink>
            </div>
          </>
        ))}
      </tbody>
    </table>
  );
}
export default Tablet;
