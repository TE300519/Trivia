
import Quiz from  './Quiz';
import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setScore} from '../store/triviaSlice';
import Navigate from'./Navigate';
import './DashBoard.css';


const   DashBoard : React.FC = () => {
  const params = useParams();
  const questions = useAppSelector((state) => state.trivia.items);
  const dispatch = useAppDispatch()
  const navigate =  useNavigate();
  let currentIndex = -1

  if(params.id)
    currentIndex = parseInt(params.id);
  if(!questions[currentIndex]){
    return <p>Item {params.id} not found!</p>;
  }


  const onAnswerClick = (answerId: string) => {
   const updatAnswer = {
        questionId: currentIndex,
        answerId: answerId
    };

    dispatch(setScore(updatAnswer));
}


  const handleClick = (buttonName: string) => {
      const size = questions.length;
      switch(buttonName){
          case "back":
               if(currentIndex -1 >= 0)
                navigate(`../${Math.abs((currentIndex - 1)) % size}`);
                break;
               
          case "next":
            if(currentIndex + 1 < questions.length)
               navigate(`../${(currentIndex + 1) % size}`);
               break;
          case "submit":
               navigate(`${'../../summary'}`); 
      }
  }
                    


    return (
      <div className="container">
      <Quiz onAnswer={onAnswerClick} currentIndex={currentIndex} /> 
      <Navigate handleClick={handleClick}/>
    </div>

    );

  };

  export default DashBoard ;