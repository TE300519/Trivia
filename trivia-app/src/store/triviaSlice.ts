import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAnswer } from '../models/IAnswer';

export const triviaSlice = createSlice({
	name: 'trivia',
	initialState: {
		items: 
          [{ "question":"what type of animal is a natterjack?",
            "answers": ["Insact", "Bird", "Fish", "Toad"],
            "correctAnswer": "3"
          },{ "question":"How long does it take to hard boil an egg?",
          "answers": ["Five minutes", "Seven minutes", "Ten minutes", "Nine minutes"],
          "correctAnswer": "1"
          },
          {"question":"How many pairs of wings does a bee have?",
           "answers": ["Two", "One", "Five", "Nine"],
           "correctAnswer": "0"
          },
          {"question":"Where does the President of the United States live while in office?",
           "answers": ["New York", "The White House", "The Moon", "The black house"],
           "correctAnswer": "1"
          }], 

    result: new Array<string>(),
	},

	reducers: {

  setScore: (state, action: PayloadAction<IAnswer>) =>{
    const calcAnswer = [...state.result]
    calcAnswer[action.payload.questionId] = action.payload.answerId; 
    state.result = calcAnswer; 
  },


  clean: (state) => {
    state.result = [];
  }

    },

});

export const { setScore, clean } = triviaSlice.actions;
export default triviaSlice.reducer;




