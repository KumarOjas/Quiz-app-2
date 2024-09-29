import React from 'react';

const Question = ({ question, timeLeft, onAnswer }) => {
    return (
        <div className="question-container">
            <h2>{question.question}</h2>
            <div className="timer">Time Left: {timeLeft} seconds</div>
            <div className="options">
                {question.options.map((option, index) => (
                    <button key={index} className="option" onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
