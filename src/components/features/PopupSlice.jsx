import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'popup',
  initialState: { value: false },
  reducers: {
    togglePopup: (state) => {
      state.value = !state.value;
    },
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;

/* 
const [count, setCount] = useState(0);

onClick={() => setCount((prev) => prev + 1)}>
*/
