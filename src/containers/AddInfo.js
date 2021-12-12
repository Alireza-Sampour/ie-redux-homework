import React from "react";
import { connect } from "react-redux";
import { addInfo } from "../actions/index";

let AddInfo = ({ dispatch, inputs, focus_input }) => {
  return (
    <form autoComplete="off" className="dsh_form">
      {Object.keys(inputs).map((key, i) => (
        <div key={i} className="col-3 width-15 full_small">
          <input
            className="effect-19"
            id={key}
            type="text"
            onBlur={focus_input}
          />
          <label>{inputs[key]}</label>
          <span>
            <i></i>
          </span>
        </div>
      ))}
      <input
        className="btn_form"
        type="button"
        onClick={() => {
          var inps = [];
          Object.keys(inputs).map((key) =>
            inps.push(document.getElementById(key.toString()))
          );
          if (inps.every((element) => element.value !== "")) {
            dispatch(
              addInfo(
                inps[0].value,
                inps[1].value,
                inps[2].value,
                inps[3].value
              )
            );
            inps.forEach((inp) => (inp.value = ""));
            inps.forEach((inp) => focus_input(inp));
          }
        }}
        value="افزودن"
      />
    </form>
  );
};

AddInfo = connect()(AddInfo);
export default AddInfo;
