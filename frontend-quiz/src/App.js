import React, { useState, useEffect } from "react";

import Question from "./Question";
import Score from "./Score";
import EndTemplate from "./EndTemplate";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentAnswers, setCurrentAnswers] = useState([]);
  const [currentCorrectAnswer, setCurrentCorrectAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const maxRounds = 5;
  const triviaAPI = `https://the-trivia-api.com/api/questions?limit=${maxRounds}`;

  /**
   * Tigger the next question round
   */
  const nextQuestion = () => {
    if (questionIndex < maxRounds - 1) {
      setShowCorrectAnswer(false);
      setQuestionAndAnswers(questionIndex + 1);
    } else {
      setShowFinalResults(true);
    }
  };

  /**
   * The question and the answers of the upcoming round are set
   * @param {*} newIndex Index of the upcoming round
   */
  const setQuestionAndAnswers = (newIndex) => {
    setQuestionIndex(newIndex);
    setCurrentAnswers(
      shuffleArray(
        questions[newIndex].incorrectAnswers.concat(
          questions[newIndex].correctAnswer
        )
      )
    );
    setCurrentCorrectAnswer(questions[newIndex].correctAnswer);
  };

  /**
   * Stores the answer, which was clicked by the user
   * @param {*} answer The clicked answer
   */
  const storeClickedAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  /**
   * Resets the game, so the user can play another round
   */
  const resetGame = () => {
    fetchQuestions();
    setScore(0);
    setQuestionIndex(0);
    setShowFinalResults(false);
    setShowCorrectAnswer(false);
    setSelectedAnswer("");
  };

  /**
   * Validates the given answer and changes the score if it was correct
   */
  const validateAnswer = () => {
    setShowCorrectAnswer(true);
    if (selectedAnswer === currentCorrectAnswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  /**
   * Shuffels an input array. It is used, so that the answers get displayed randomly
   * @param {*} array Array which should be shuffled
   * @returns The shuffled array
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  /**
   * Fetches questions from the Trivia API
   */
  async function fetchQuestions() {
    const response = await fetch(triviaAPI);
    const result = await response.json();
    setQuestions(result);
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setQuestionAndAnswers(questionIndex);
      setQuestionsLoaded(true);
    }
  }, [questions]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Quiz</h1>
      </div>

      <div className="App-content">
        {showFinalResults ? ( // If the max amount of questions are asked, show the end template
          <EndTemplate score={score} playAgain={resetGame} />
        ) : (
          <div>
            <p>
              Question {questionIndex + 1} from {maxRounds}
            </p>
            <Score currentScore={score} />
            {questionsLoaded ? (
              <Question
                question={questions[questionIndex].question}
                answers={currentAnswers}
                correctAnswer={currentCorrectAnswer}
                answerClicked={storeClickedAnswer}
                showCorrectAnswer={showCorrectAnswer}
              />
            ) : (
              <div></div>
            )}
            <button onClick={validateAnswer}>Validate</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
