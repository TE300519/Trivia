import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Obj } from 'reselect/es/types';
import { IAnswer } from '../models/IAnswer';

export const triviaSlice = createSlice({
	name: 'trivia',
	initialState: {
		items: 
          [{ "question":"what type of animal is a natterjack?",
            "answers": ["Insact", "Bird", "Fish", "Toad"],
            "AnswerOfQuiz": "3"
          },{ "question":"How long does it take to hard boil an egg?",
          "answers": ["Five minutes", "Seven minutes", "Ten minutes", "Nine minutes"],
          "AnswerOfQuiz": "1"
          },
          {"question":"How many pairs of wings does a bee have?",
           "answers": ["Two", "One", "Five", "Nine"],
           "AnswerOfQuiz": "0"
          },
          {"question":"Where does the President of the United States live while in office?",
           "answers": ["New York", "The White House", "The Moon", "The black house"],
           "AnswerOfQuiz": "1"
          }], 

    result: new Array<string>(),
    //todo.. userAnswers

	},

	reducers: {

  score: (state, action: PayloadAction<IAnswer>) =>{
    let calcAnswer = [...state.result]
    calcAnswer[action.payload.questionId] = action.payload.answerId; 
    state.result = calcAnswer; 
  },
  //setScore

  clean: (state) => {
    state.result = [];
  }

    },

});

// export const { changeColor, onDisabled, changeQuiz  } = triviaSlice.actions;
export const { score, clean } = triviaSlice.actions;
export default triviaSlice.reducer;




