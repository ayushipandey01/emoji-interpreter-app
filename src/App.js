// import React, {useState} from *react* ;
import React, { useState } from "react";

import "./styles.css";

// var headingText = "Welcome";

var color = "blue";

var userName = "to EMoJi Interpreter";
// var userName = prompt("What is ypur name ?");

// var likeCounter = 0;

export default function App() {
  // const [likeCounter, setlikeCounter] = useState(0);

  // function likeClickHandler() {
  //   var newlikeCounter = likeCounter + 1;
  //   // console.log("Clicked!");
  //   // console.log("CLicked", likeCounter, "times!");
  //   setlikeCounter(newlikeCounter);
  // }

  // const [userInput , setuserInput] = useState("");
  // function inputChangeHandler(event) {
  //   // console.log(event.target);
  //   // console.log(event.target.value);
  //   setuserInput(event.target.value);
  // }
  const emojiDictionary = {
    "😀": "Smiling face",
    "😉": "Winking face",
    "😘": "Kissing emoji",
    "🥶": "Cold face",
    "😡": "Angry face",
    "🧡": "Heart"
  };

  const [meaning, setmeaning] = useState("");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have it in the database";
    }

    setmeaning(meaning);

    // console.log(event.target.value);
  }

  function emojiClickHandler(emoji) {
    // console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  // function emojiDisplayHandler() {
  //   console.log(emoji);
  // }
  var emojiDisplayHandler = Object.keys(emojiDictionary);
  return (
    <div className="App">
      <h1 style={{ color: color }}>
        Welcome <span style={{ color: "orange" }}>{userName}</span>
      </h1>
      {/* <button onClick={likeClickHandler}>Like Me !</button> {likeCounter} */}

      {/* <input onChange={inputChangeHandler}></input> */}

      {/* <div>Welcome {userInput} </div> */}
      <input onChange={emojiChangeHandler}></input>
      <h2 style={{ color: "green" }}>{meaning}</h2>

      <h3> emojis we know </h3>
      {emojiDisplayHandler.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              padding: "1rem 0.5rem",
              fontSize: "30px",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
