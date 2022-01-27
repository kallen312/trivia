import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let varible = 0;
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[varible].question.text} />
      <NextQuestion />
    </div>
  );
}

function NextQuestion(props) {
  return <button>Next Question</button>;
}

function Question(props) {
  return <p>{props.question}</p>;
}

export default App;
