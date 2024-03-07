import { createSlice } from "@reduxjs/toolkit";
import Adder from "../Adder";
import { RootState } from "../store";

const initialState = { count: 0 };

export const selectCount = (state: RootState) => state.count.count;

const count = createSlice({
	name: "count",
	initialState,
	reducers: {
		increment: (state) => {
			state.count = Adder(state.count, 1);
		},
	},
});

export const { increment } = count.actions;

export default count.reducer;
