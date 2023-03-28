import React, { useState } from "react";

/**
 * Component for displaying the questions
 * @returns
 */
const Question = (props) => {
  const [selected, setSelected] = useState(null);

  /**
   * If an answer is clicked, mark it as selected
   * @param {*} answer Which element was clicked
   */
  const elementClicked = (answer) => {
    setSelected(answer);
    props.answerClicked(answer);
  };

  return (
    <div className="question-container">
      {props.answers !== "" ? (
        <div>
          <p>{props.question}</p>
          <div className="question-answers">
            {props.answers.map((answer) => (
              <p
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
