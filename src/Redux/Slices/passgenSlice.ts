import {PayloadAction, createSlice} from '@reduxjs/toolkit';
type config = {
   letters: Array<string>
}
type passState = {
   password: string
   isCopy: boolean
   sliderThumbValue: number
   passStatus: Array<boolean>
   passLetters: Array<config>
   passgenArray: Array<string>
}
const initialState: passState = {
   password: '',
   isCopy: false,
   sliderThumbValue: 10,
   passStatus: [false, false, false, false],
   passLetters: [
      {letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']},
      {letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']},
      {letters: ['0','1','2','3','4','5','6','7','8','9']},
      {letters: ['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',"'",'"',',','.','/','<','>','?',',']}],
   passgenArray: [],
}
export const passgenSlice = createSlice({
   name: 'passgen',
   initialState,
   reducers: {
      displayCopyTitle: (state, action: PayloadAction<boolean>) => {
         state.isCopy = action.payload;
      },
      changeThumbValue: (state, action: PayloadAction<number>) => {
         state.sliderThumbValue = action.payload;
      },
      changeSettings: (state, action) => {
         state.passStatus[action.payload] = !state.passStatus[action.payload];
         state.passgenArray = [];
         state.passStatus.forEach((el, index) => {
            if (el) state.passgenArray.push(...state.passLetters[index].letters)
         })
      },
      generatePass: (state) => {

      }
   }
})
export const {displayCopyTitle, changeThumbValue, changeSettings, generatePass} = passgenSlice.actions;
export default passgenSlice.reducer;