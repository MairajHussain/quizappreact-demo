import "../QuizPartTwo/quizcss.css";
import { questions } from './questions';
import { useState } from 'react';

const QuizComponentTwo = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <section className="showScore-section">
          Your score is {score} out of {questions.length}
        </section>
      ) : (
        <>
          <section className="question-section">
            <h1>
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => 
            (
              <button onClick={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default QuizComponentTwo;
