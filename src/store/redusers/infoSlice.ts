import { createSlice } from '@reduxjs/toolkit';

type IPortfolioState = {
  balls: number;
  lections: Array<any> | null;
  quize: Array<any> | null;
  name: string | null;
};

const initialState: IPortfolioState = {
  balls: 0,
  lections: null,
  quize: null,
  name: null,
};

export const authSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    setBalls: (state, action) => {
      state.balls += action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLections: (state, action) => {
      state.lections = action.payload;
    },
    setQuize: (state, action) => {
      state.quize = action.payload;
    },
    clearBalls: (state) => {
      state.balls = 0;
    },
    clearName: (state) => {
      state.name = null;
    },
  },
});

export const { setBalls, clearBalls, clearName, setLections, setQuize, setName } = authSlice.actions;

export default authSlice.reducer;
