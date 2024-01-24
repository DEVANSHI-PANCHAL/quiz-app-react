import React from 'react';
import { useParams } from 'react-router-dom';
import './Quiz.css';

const Quiz = () => {
  const { id } = useParams();
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 0,
    },
    {
      id: 2,
      question: 'What is the capital of England?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 1,
    },
    {
      id: 3,
      question: 'What is the capital of Germany?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 2,
    },
    {
      id: 4,
      question: 'What is the capital of Spain?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 3,
    },
  ];

  const question = questions.find((q) => q.id.toString() === id);

  return (
    <div>
      <h1>{question.question}</h1>
      {question.options.map((option, index) => (
        <button key={index}>{option}</button>
      ))}
    </div>
  );
};

export default Quiz;