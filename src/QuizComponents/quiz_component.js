import React from 'react';
import { useState } from "react";

const QuizComponent = () => {
  var Questionbank=[
    {
      Question: "What is the capital of pakistan?",
      AnswerText: [
      {Answer: "Lahore", isCorrect: false},
      {Answer: "Karachi", isCorrect: false},
      {Answer: "Islamabad", isCorrect: true},
      {Answer: "Sukkur", isCorrect: false},
      ]
    },
    {
      Question: "Who is the current captain of pakistan cricket team?",
      AnswerText: [
      {Answer: "Rizwan", isCorrect: false},
      {Answer: "Babar", isCorrect: true},
      {Answer: "Shaheen", isCorrect: false},
      {Answer: "Fakhar", isCorrect: false},
      ]
    },
    {
      Question: "which province is the largest in pakistan?",
      AnswerText: [
      {Answer: "Sindh", isCorrect: false},
      {Answer: "Punjab", isCorrect: false},
      {Answer: "Khyber Pakhtoon Khua", isCorrect: false},
      {Answer: "Balochistan", isCorrect: true},
      ]
    },
    {
      Question: "Which city has the best biryani in pakistan?",
      AnswerText: [
      {Answer: "Karachi", isCorrect: true},
      {Answer: "Lahore", isCorrect: false},
      {Answer: "Sukkur", isCorrect: false},
      {Answer: "Hyderabad", isCorrect: false},
      ]
    },
    {
      Question: "where is the mazar of quaid e azam located?",
      AnswerText: [
      {Answer: "Lahore", isCorrect: false},
      {Answer: "Karachi", isCorrect: true},
      {Answer: "Sukkur", isCorrect: false},
      {Answer: "Hyderabad", isCorrect: false},
      ]
    },
  ];

  // useState hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) 
    {
      setCurrentQuestion(nextQuestion);
    }
    else
    {
      setShowScore(true);
    }
  }


  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }


  console.log(Questionbank);

    return (
        <div>
            {showScore ? (
              <div>
                You have scored {score} out of {Questionbank.length}
                <>
                <button type='submit' onClick={resetQuiz}>
                  Reset Quiz
                </button>
                </>
              </div>
            )
            : (
              <>
              <div className='question'>
                <div className='question-num'>
                  <span>Question {currentQuestion + 1}</span>/{Questionbank.length}
                </div>
                <div className='question-text'>
                  {Questionbank[currentQuestion].Question}
                </div>
              </div>
              
              <div className='answer'>
                {Questionbank[currentQuestion].AnswerText.map((answer) => 
                (
                  <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                ))}
              </div>
              </>
            )}
        </div>
    );
};

export default QuizComponent;