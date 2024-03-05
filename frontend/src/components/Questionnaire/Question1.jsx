import  { useState } from 'react';
import { Link } from 'react-router-dom';

const questions = [
 {
    id: 1,
    question: "Can you comfortably walk briskly for 30 minutes without stopping?",
    options: ["Confident I'll manage", "Doubtful about it", "Possible with prep", "Certainly! I am capable"]
 },
 {
    id: 2,
    question: "Can you stand on one leg for at least 30 seconds without lossing balance?",
    options: ["Yes, I can", "No, I can't", "Sometimes, yes", "Of course: I used to"]
 },
 {
    id: 3,
    question: "Can you perform a set of 10 push-ups (on knees or toes)?",
    options: ["Knees push-ups", "Toes push-ups", "Modified push-ups", "Supported knee push-ups"]
 },
 {
    id: 4,
    question: "What motivates you the most?",
    options: ["Feel Confident", "Improve Health", "Release Stress", "Boost Energy"]
 },
 {
    id: 5,
    question: "Can you touch your toes while keeping your legs straight?",
    options: ["Yes, I can", "No, I can't", "Sometimes, yes", "Of course: I used to"]
},
{
    id: 6,
    question: "What’s your activity level",
    options: ["Sedentary", "Moderately active", "Lightly active", "Very active"]
},
];

const Questionnaire = () => {
 const [currentQuestion, setCurrentQuestion] = useState(0);
 const [answers, setAnswers] = useState({});

 const handleOptionChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
 };

 const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
 };

 if (currentQuestion >= questions.length) {
    return <div>Thank you for completing the questionnaire!</div>;
 }

 return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#FFAC49] to-[#f4cfa8]">
      <div className=" bg-gradient-to-b from-[#f6b76a] to-[#FFE6CC] p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Questionnaire</h1>
        <div className="mb-4">
          <p className="text-xl">{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="radio"
                id={`option-${index}`}
                name={`question-${currentQuestion}`}
                value={option}
                className="mr-2"
                onChange={() => handleOptionChange(questions[currentQuestion].id, option)}
              />
              <label htmlFor={`option-${index}`} className="text-lg">{option}</label>
            </div>
          ))}
        </div>
        {currentQuestion < questions.length - 1 ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNext}
          >
            Next
          </button>
       ) : (
           <Link to="/beginnerWeek1">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert('Questionnaire completed!')}
          >
            Finish
          </button>
          </Link>   
        )}
      </div>
    </div>
 );
};

export default Questionnaire;