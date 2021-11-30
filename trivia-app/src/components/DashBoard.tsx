
import Quiz from  './Quiz';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { score} from '../store/triviaSlice';
import Navigate from'./Navigate';
import './DashBoard.css';


const   DashBoard : React.FC = () => {
  const params = useParams();
  const questions = useAppSelector((state) => state.trivia.items);
  const dispatch = useAppDispatch()
  const navigate =  useNavigate();
  let currentIndex = -1

  if(params.id != undefined)
  currentIndex = parseInt(params.id);
  if(!questions[currentIndex]){
    return <p>Item {params.id} not found!</p>;
  }


  const onAnswer = (answerId: string) => {
   const updatAnswer = {
        questionId: currentIndex,
        answerId: answerId
    };

    dispatch(score(updatAnswer));
}


  const handleClick = (buttonName: string) => {
      const size = questions.length;
      switch(buttonName){
          case "back":
               navigate(`../${Math.abs((currentIndex - 1)) % size}`);
               break;
          case "next":
               navigate(`../${(currentIndex + 1) % size}`);
               break;
          case "submit":
               navigate(`${'../../summary'}`); 
      }
  }
                    


    return (
      <div className="container">
      <Quiz onAnswer={onAnswer} currentIndex={currentIndex} /> 
      <br/>
      <br/>
      <Navigate handleClick={handleClick}/>
    </div>

    );

  };

  export default DashBoard ;