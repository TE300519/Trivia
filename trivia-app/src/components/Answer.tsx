import React from 'react';
import './Answer.css';
import { useAppSelector} from '../store/hooks';

interface IProps {
  id: string;
  text: string;
  onAnswer: Function;
  currentIndex: number;
}

const DEFAULT_COLOR = 'rgb(181, 83, 181)';
const SELECTED_ANSWER ='rgb(223, 158, 169)';


const Answer: React.FC<IProps> = ({id, text, onAnswer, currentIndex}) => {
  
 const userAnswer =   useAppSelector((state) => state.trivia.result[currentIndex]);
  let colorAnswer = DEFAULT_COLOR;
  if(userAnswer === id)
  colorAnswer = SELECTED_ANSWER;
  let numAnswer = parseInt(id) + 1;

  return (
    <button className="Answer" style={{backgroundColor: colorAnswer}}  onClick={() => onAnswer(id)}>
      <span className="answerId">{numAnswer.toString()}.</span>
      <p className="answerText">{text}</p>
    </button>
  );

};

export default Answer; 