import {PayloadAction, createSlice} from '@reduxjs/toolkit';
type config = {
   letters: Array<string>
}
type passState = {
   password: string
   isCopy: boolean
   sliderValue: number
   passStatus: Array<boolean>
   passLetters: Array<config>
   passgenArray: Array<string>
   strengthCount: number
}
const initialState: passState = {
   password: '',
   isCopy: false,
   sliderValue: 10,
   passStatus: [false, false, false, false],
   passLetters: [
      {letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']},
      {letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']},
      {letters: ['0','1','2','3','4','5','6','7','8','9']},
      {letters: ['!','@','#','$','%','^','&','*','_','+','-','=','|','/','<','>','?']}],
   passgenArray: [],
   strengthCount: 0,
}
export const passgenSlice = createSlice({
   name: 'passgen',
   initialState,
   reducers: {
      displayCopyTitle: (state, action: PayloadAction<boolean>) => {
         state.isCopy = action.payload;
      },
      changeThumbValue: (state, action: PayloadAction<number>) => {
         state.sliderValue = action.payload;
      },
      changeSettings: (state, action: PayloadAction<number>) => {
         state.passStatus[action.payload] = !state.passStatus[action.payload];
         state.passgenArray = [];
         state.passStatus.forEach((el, index) => {
            if (el) state.passgenArray.push(...state.passLetters[index].letters)
         })
      },
      generatePass: (state) => {
         let pass = [];
         for (let i = 0; i < state.sliderValue; i++) {
            pass.push(state.passgenArray[Math.floor(Math.random() * ((state.passgenArray.length - 1) - 0 + 1)) + 0])
         }
         state.password = pass.join('');
         //Math.floor(Math.random() * ((state.passgenArray.length - 1) - 0 + 1)) + 0
      },
      renderStrength: (state) => {
         let points = 0;
         if (state.passStatus.some(el => el) && state.sliderValue > 5) {
            points += state.sliderValue;
            points -= 5;
            state.passStatus.forEach(el => {
               if (el) points += 5
            })
            if (points > 20) state.strengthCount = 3
            else if (points > 15) state.strengthCount = 2
            else if (points > 10) state.strengthCount = 1
         } else {
            state.strengthCount = 0;
         }
      },
   }
})
export const {displayCopyTitle, changeThumbValue, changeSettings, generatePass, renderStrength} = passgenSlice.actions;
export default passgenSlice.reducer;