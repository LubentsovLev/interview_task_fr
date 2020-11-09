import React from "react";
function CHstate({ state, setState }) {
  return (
    <>
      <div
        className="btn btn-info"
        onClick={() => {
          setState({ ...state, g1: state.g1 + 1 });
        }}
      >
        to Change state 1 {state.g1}{" "}
      </div>
      <div
        className="btn btn-dark"
        onClick={() => {
          setState({ ...state, g2: state.g2 + 1 });
        }}
      >
        {" "}
        to Change state 2 {state.g2}{" "}
      </div>
      <div
        className="btn btn-primary "
        onClick={() => {
          setState({ ...state, g3: state.g3 + 1 });
        }}
      >
        to Change state 3 {state.g3}{" "}
      </div>
    </>
  );
}
export default CHstate;
