
import Answer from './Answer';
import './Quiz.css';
import React from 'react';
import { useAppSelector} from '../store/hooks';

interface IProps{
  onAnswer: Function;
  currentIndex: number
}

const Quiz: React.FC<IProps> = ({onAnswer, currentIndex}) => {

	const questions = useAppSelector((state) => state.trivia.items);
  const currentQuiz = questions[currentIndex]


    return (
      <div>
        <div className="question">{currentQuiz.question}</div>
        <br/>
        <br/>
        <ul>
           {currentQuiz.answers.map((answer: string, index:any) =>
            <li className="answer">
            <Answer id={index.toString()} text={answer}
            onAnswer={onAnswer}  currentIndex={currentIndex}/>
            </li>
           )}
       </ul>
    </div>
    );
          
  };

  export default Quiz;