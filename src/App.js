import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import * as axios from "axios";
import Tablet from "./Tablet/Tablet";
import Loader from "./helpers/loader";
import _ from "lodash";

const App = () => {
  // state = {
  //   loading: true,
  //   data: [],
  // };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("asc");
  const [sortField, setField] = useState("id");
  const [itemItem, setTtemItem] = useState(0);

  useEffect(() => {
    axios
      .get(
        "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
      )
      .then((data) => {
        const data_ = data.data;
        setData(_.orderBy(data_, "id", "asc"));
        setLoading(false);
      });
  }, []);
  let sortItems = (field = "id") => {
    let arr = data.concat();
    let sortType = sort === "asc" ? "desc" : "asc";
    let orderedData = _.orderBy(arr, field, sortType);
    setData(orderedData);
    setSort(sortType);
    setField(field);
  };
  let Heigth = React.createRef();
  let checkItem = (row) => {
    // Heigth.current.scrollTop = 0
    console.log(Heigth.current.scrollTop);
    setTtemItem(row);
  };

  return (
    <div className="App" ref={Heigth}>
      <header className="App-header">
        {/* <Wrapper />
          <Switch>
            <Route path="/Tablet" render={() => <Tablet />} />;
            <Route path="/Todo" render={() => <Todo />} />;
          </Switch> */}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {itemItem ? <Todo itemItem={itemItem} /> : <span />}
            <Tablet
              data={data}
              sortItems={sortItems}
              sort={sort}
              sortField={sortField}
              checkItem={checkItem}
            />
          </div>
        )}
      </header>
    </div>
  );
};
function Wrapper() {
  return (
    <div className="Wrapper">
      <div className="ln">
        <NavLink className={"ln"} to="/Tablet" activeClassName={"ln_active"}>
          Tablet
        </NavLink>
      </div>
      <div className="ln">
        <NavLink className={"ln"} to="/Todo" activeClassName={"ln_active"}>
          Todo
        </NavLink>
      </div>
    </div>
  );
}

function Todo(props) {
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
        <p>about: {props.itemItem.description}</p>
      </div>
    </div>
  );
}

export default App;
