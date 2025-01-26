import { createSlice } from '@reduxjs/toolkit';

export const controlEventSlice = createSlice({
	name: 'controlEvent',
	initialState: {
		eventType:[],
	},
 	reducers: {
		addEventToApp: (state,eventType) => {
			//console.log('eventType (from slice):',eventType);
			return {
				...state,
				eventType: [...state.eventType,eventType],
			};
		},
	},  
});

export const { addEventToApp } = controlEventSlice.actions;

export default controlEventSlice.reducer;
