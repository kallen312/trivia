import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let variable = 0;
  let [isAnswered, setIsAnswered] = useState(false);
  let [questionNumber, setQuestionNumber] = useState(0);
  return (
    <div className="app">
      <h1>Trivia!</h1>
      <Question question={data[questionNumber].question.text} />
      {data[questionNumber].question.choices.map(function (choice) {
        return <Answer choices={choice} />;
      })}
      <NextQuestion />

      <button onClick={() => setIsAnswered(true)}>Check Answer</button>
      {isAnswered
        ? data[questionNumber].question.choices[
            data[questionNumber].question.correct_choice_index
          ]
        : ""}
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
