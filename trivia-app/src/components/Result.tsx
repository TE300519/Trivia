
import React from 'react';
import './Result.css';
import { useAppSelector, useAppDispatch} from '../store/hooks';
import { clean} from '../store/triviaSlice';
import { useNavigate } from 'react-router';


const Summary: React.FC = () => {
	const result = useAppSelector((state) => state.trivia.result);
	const questions = useAppSelector((state) => state.trivia.items);
	const dispatch = useAppDispatch();
	const navigate =  useNavigate();

	let wrongs = 0;
	let corrects = 0;
	let notAnswer = 0;

	for(let i=0; i<questions.length; i++ ){

		if(!result[i]){
		   notAnswer++;
		   continue;
		}
        if(questions[i].correctAnswer === result[i])
		   corrects ++;
		else
		wrongs ++;
	}
	
	
   const reset = () => {
	dispatch(clean());
	navigate(`${'../trivia/0'}`);
   }


	return (
		<div className="summary">
			<h1>Summary</h1>
	
			<div className="result"> Wrongs: {wrongs}</div>
			<div className="result"> Corrects: {corrects}</div>
			<div className="result"> NotAnswers: {notAnswer}</div>
			<br/>
			<button  className="reset" onClick={reset}> startGame</button>
		
		</div>
	);
  };
  
  export default Summary;











