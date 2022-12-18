import React from "react";
import aleristyle from "../componentsStyle/alert.css"

function Alert(props) {
  const capitalize = (word) => {
    let w = word.toLowerCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  };

  return (
    props.alert && (
      <div  id="strong"
        className={`text-center alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        style={aleristyle}
      >
        <strong>{capitalize(props.alert.type)}---- </strong>
        {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
