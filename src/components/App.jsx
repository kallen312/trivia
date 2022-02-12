import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let variable = 0;

  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[variable].question.text} />
      {data[variable].question.choices.map(function (choice) {
        return <Answer choices={choice} />;
      })}
      <NextQuestion />
      {/* {
        map is similar to a loop
        array.map(function(x) {
          x represents each element in the array
          return (
            ...add Answer component
          )
        })
      } */}
    </div>
  );
}

function NextQuestion(props) {
  return <button>Next Question</button>;
}

function Question(props) {
  return <div>{props.question}</div>;
}

function Answer(props) {
  return <button>{props.choices}</button>;
}

export default App;
