// src/components/Quiz.js
import React, { useState } from 'react';

const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { answer: "Paris", isCorrect: true },
      { answer: "London", isCorrect: false },
      { answer: "Rome", isCorrect: false },
    ],
    type: "multiple-choice",
  },
  {
    question: "Is the Earth flat?",
    options: [
      { answer: "True", isCorrect: false },
      { answer: "False", isCorrect: true },
    ],
    type: "true-false",
  },
];

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <div>
          <h2>Quiz Completed</h2>
          <p>Your score is {score} out of {questions.length}</p>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestionIndex].question}</h3>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index}>
                <button onClick={() => handleAnswerClick(option.isCorrect)}>
                  {option.answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;
