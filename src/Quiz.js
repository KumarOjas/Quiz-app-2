// Quiz.js
import React, { useState, useEffect } from 'react';
import Question from './Question';

const Quiz = () => {



    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare",
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    useEffect(() => {
        if (timeLeft > 0 && !isQuizFinished) {
            const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            handleNextQuestion();
        }
    }, [timeLeft, isQuizFinished]);

    const handleAnswer = (selectedOption) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.answer) {
            setScore((prev) => prev + 1);
        }
        handleNextQuestion();
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setTimeLeft(30);
        } else {
            setIsQuizFinished(true);
        }
    };

    return (
        <div className="quiz">
            {isQuizFinished ? (
                <div className="result">
                    <h2>Quiz Finished!</h2>
                    <p>Your score: {score} / {questions.length}</p>
                </div>
            ) : (
                <div className="question-container" style={{ marginTop: '60px' }}> {/* Add marginTop here */}
                    <Question
                        question={questions[currentQuestionIndex]}
                        timeLeft={timeLeft}
                        onAnswer={handleAnswer}
                    />
                </div>
            )}
        </div>
    );
};

export default Quiz;
