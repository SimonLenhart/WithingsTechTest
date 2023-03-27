import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Question = (props) => {
  const [selected, setSelected] = useState(null); // TODO select an answer
  const [arrayWasShuffled, setArrayWasShuffled] = useState(false);
  if (!arrayWasShuffled) {
    shuffleArray(props.answers);
    setArrayWasShuffled(true);
  }

  const elementClicked = (answer) => {
    setSelected(answer);
  };

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    // TODO reset when question change
    setSelected(null);
    setArrayWasShuffled(false);
  }, []);

  return (
    <div className="question-container">
      {props.question !== null && arrayWasShuffled ? (
        <div>
          <p>{props.question.question}</p>
          <div className="question-answers">
            {props.answers.map((answer, index) => (
              <p
                key={index}
                onClick={() => elementClicked(answer)}
                className={`${
                  answer === props.correctAnswer && props.showCorrectAnswer
                    ? "correctAnswer"
                    : ""
                } ${selected === answer ? "selected" : ""}`}
              >
                {answer}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Question;
