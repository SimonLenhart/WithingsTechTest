import React, { useState, useEffect } from "react";

import Question from "./Question";
import Score from "./Score";

const App = () => {
  const [questions, setQuestions] = useState([
    {
      category: "History",
      id: "622a1c3b7cc59eab6f95171c",
      correctAnswer: "Shang",
      incorrectAnswers: ["Liu", "Ming", "Yi"],
      question: "What was the first Chinese dynasty?",
      tags: ["history", "china", "the_ancient_world"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "622a1c3a7cc59eab6f951009",
      correctAnswer: "Underground",
      incorrectAnswers: ["In a tree", "Underwater", "In a damn"],
      question: "Where Does A Gopher Make Its Home?",
      tags: ["science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "History",
      id: "622a1c3c7cc59eab6f951992",
      correctAnswer: "The Long March",
      incorrectAnswers: [
        "The Trail of Tears",
        "The Mao Manouver",
        "The Maontain Retreat",
      ],
      question:
        "What do historians call the military retreat made by Mao to evade the Kuomintang army?",
      tags: ["china", "wars", "history"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "History",
      id: "622a1c367cc59eab6f9503fd",
      correctAnswer: "Ming",
      incorrectAnswers: ["Qin", "Han", "Tang"],
      question: "Which Chinese dynasty lasted from 1368 to 1644?",
      tags: ["china", "leaders", "history"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "History",
      id: "622a1c367cc59eab6f950358",
      correctAnswer: "John Adams",
      incorrectAnswers: ["Thomas Jefferson", "Andrew Jackson", "James Monroe"],
      question: "Who was George Washington's vice-president?",
      tags: ["history"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "622a1c377cc59eab6f95047b",
      correctAnswer:
        "a set of words and/or phrases, usually in relation to some particular canon or field of study",
      incorrectAnswers: [
        "nematodes",
        "the nose and its diseases",
        "parasitic worms",
      ],
      question: "What is Terminology the study of?",
      tags: ["science"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "History",
      id: "622a1c367cc59eab6f950352",
      correctAnswer: "Anne Boleyn",
      incorrectAnswers: [
        "Catherine Parr",
        "Anne of Cleves",
        "Catherine Howard",
      ],
      question: "Who was Henry VIII's second wife?",
      tags: [
        "middle_ages",
        "medieval",
        "kings",
        "uk",
        "people",
        "general_knowledge",
        "history",
      ],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "History",
      id: "622a1c3c7cc59eab6f95197b",
      correctAnswer: "Woodstock Festival",
      incorrectAnswers: [
        "The first nuclear bomb test",
        "The Watergate scandal",
        "The assassination of Martin Luther King Jr",
      ],
      question:
        "What Happened At Max Yasgur's Dairy Farm In New York State in 1969?",
      tags: ["events", "1960's", "history"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "622a1c377cc59eab6f950505",
      correctAnswer: "waves or wave motions",
      incorrectAnswers: [
        "weather",
        "Tibet",
        "mental processes in living creatures",
      ],
      question: "What is Kymatology the study of?",
      tags: ["words", "science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "622a1c3a7cc59eab6f9510d4",
      correctAnswer: "Forty",
      incorrectAnswers: ["Thirty", "Twenty", "Fifty"],
      question: "How fast (mph) can a kangaroo hop?",
      tags: ["science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "History",
      id: "63a039adc7d86251f9b65c9d",
      correctAnswer: "Delaware",
      incorrectAnswers: ["Pennsylvania", "New Jersey", "New York"],
      question: "What was the first US state to join the Union?",
      tags: ["history", "usa", "us_states"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "History",
      id: "622a1c367cc59eab6f95034e",
      correctAnswer: "Jimmy Carter",
      incorrectAnswers: ["Ronald Regan", "Richard Nixon", "Gerald Ford"],
      question: "Who was known as 'the peanut president'?",
      tags: ["history"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "622a1c377cc59eab6f950512",
      correctAnswer: "sleep",
      incorrectAnswers: [
        "the effects of radiation upon living organisms",
        "is concerned with earth materials that can be utilized for economic and/or industrial purposes",
        "the eyes",
      ],
      question: "What is Hypnology the study of?",
      tags: ["science"],
      type: "Multiple Choice",
      difficulty: "medium",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "622a1c3a7cc59eab6f951035",
      correctAnswer: "Iron",
      incorrectAnswers: ["Copper", "Gold", "Nickel"],
      question:
        "What is the heaviest element that can be formed by regular fusion reactions in the core of a star?",
      tags: ["physics", "chemistry", "science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "6242cb5ed543524f1b19c927",
      correctAnswer: "A stud",
      incorrectAnswers: ["A cete", "A paddling", "A troop"],
      question: "What is the word for a group of mares?",
      tags: ["science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "622a1c377cc59eab6f95059f",
      correctAnswer: "Mars",
      incorrectAnswers: [
        "Nipples",
        "Abnormalities of the teeth",
        "Word origins",
      ],
      question: "What is areology the study of?",
      tags: ["science", "words"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "6243358ccfaae40c129614b3",
      correctAnswer: "A Cub",
      incorrectAnswers: ["A Baby", "A Kit", "A Caterpillar"],
      question: "What is a baby walrus known as?",
      tags: ["words", "animals", "science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "62433489cfaae40c1296144d",
      correctAnswer: "A Doe",
      incorrectAnswers: ["A Tigeress", "A Leopardess", "A Cow"],
      question: "What is the word for a female kangaroo?",
      tags: ["science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "63adbd7304c68cc1e14b8e42",
      correctAnswer: "Pear Tree",
      incorrectAnswers: ["Oak Tree", "Maple Tree", "Birch Tree"],
      question: "Which type of tree is known for its fragrant white flowers?",
      tags: ["science", "trees", "plants", "nature"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
    {
      category: "Science",
      id: "6242cb0cd543524f1b19c907",
      correctAnswer: "A rag",
      incorrectAnswers: ["A nest", "A watch", "A stud"],
      question: "What is the word for a group of colts?",
      tags: ["science"],
      type: "Multiple Choice",
      difficulty: "hard",
      regions: [],
      isNiche: false,
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentAnswers, setCurrentAnswers] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showFinalResults, setFinalResults] = useState(false);
  const [questionsLoaded, setQuestionsLoaded] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const fetchQuestions = () => {
    fetch(
      "https://the-trivia-api.com/api/questions?limit=20&categories=science,history"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        loadQuestionAndAnswers(questionIndex);
      })
      .catch((error) => console.error(error));
  };

  const nextQuestion = () => {
    setShowCorrectAnswer(false);
    setQuestionIndex(questionIndex + 1);
    loadQuestionAndAnswers(questionIndex);
  };

  const loadQuestionAndAnswers = (newIndex) => {
    const possibleAnswers = [...questions[questionIndex].incorrectAnswers];
    possibleAnswers.push(questions[questionIndex].correctAnswer);
    setCurrentQuestion(questions[questionIndex]);
    setCurrentAnswers(possibleAnswers);
    setQuestionsLoaded(true);
  };

  const validateAnswer = () => {
    setShowCorrectAnswer(true);
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Quiz</h1>
      </div>

      <div className="App-content">
        {showFinalResults ? (
          <div>Final Test</div>
        ) : (
          <div>
            <Score />
            {questionsLoaded ? (
              <Question
                question={currentQuestion}
                answers={currentAnswers}
                correctAnswer={currentAnswers[currentAnswers.length - 1]}
                showCorrectAnswer={showCorrectAnswer}
                nextQuestion={nextQuestion}
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
