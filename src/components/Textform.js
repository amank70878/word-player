import React, { useState } from "react";
import "../componentsStyle/textform.css";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
    if ((event.target.value = 0)) {
      wordLength = 0;
    }
  };

  const handleUpperClass = () => {
    if (text.length !== 0) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase Successfully!", "success");
    } else {
      props.showAlert("please enter some content to convert", "danger");
    }
  };

  const handleLowerClass = () => {
    if (text.length !== 0) {
      console.log(text.length);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("converted to lowercase Successfully!", "success");
    } else {
      props.showAlert("please enter some content to convert", "danger");
    }
  };

  const handleClear = () => {
    if (text.length !== 0) {
      setText("");
      word = 0;
      wordLength = 0;
      props.showAlert("your content is cleared", "success");
    } else {
      props.showAlert("please enter some content to clear", "danger");
    }
  };

  const handleExtraSpaces = () => {
    if (text.length !== 0) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces are removed", "success");
    } else {
      props.showAlert(
        "please enter some content to remove extra spaces",
        "danger"
      );
    }
  };

  const handleCopy = () => {
    var text = document.getElementById("floatingTextarea2");
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("your content is copied", "success");
  };

  var wordLength = text.split(/\s+/).filter((e) => {
    return e.length !== 0;
  }).length;
  var word = wordLength.toFixed(2);
  return (
    <>
      <div className="form-floating container my-4">
        <div style={{ height: "33px" }}></div>
        <h1
          id="h1"
          className={`text-center text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          Enter your Content and play with it
        </h1>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{
            height: "200px",
            backgroundColor: props.mode === "light" ? "white" : "#0a2f5581",
            color: props.mode === "light" ? "black" : "white",
          }}
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <div className="btnDiv">
          <button
            className="button m-2 btn btn-primary"
            onClick={handleUpperClass}
          >
            To Uppercase
          </button>
          <button
            className="button m-2 btn btn-primary"
            onClick={handleLowerClass}
          >
            To Lowercase
          </button>
          <button className="button m-2 btn btn-primary" onClick={handleClear}>
            Clear Article
          </button>
          <button className="button m-2 btn btn-primary" onClick={handleCopy}>
            Copy Content
          </button>
          <button
            className="button2 m-2 btn btn-primary"
            onClick={handleExtraSpaces}
          >
            Remove Extra spaces
          </button>
        </div>
        <h2
          className={`text-bold mt-4 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <u>text summary is --</u>
        </h2>
        <span
          className={`my-5 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          {wordLength} words {text.length} characters
        </span>
        <br />
        <span
          className={`my-5 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          takes {(word * 0.005).toPrecision(1)} min to read
        </span>
      </div>
    </>
  );
}
