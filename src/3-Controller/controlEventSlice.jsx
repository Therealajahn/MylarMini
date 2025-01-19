import { createSlice } from '@reduxjs/toolkit';

export const getEventSlice = createSlice({
	name: 'getEvent',
	initialState: {
		eventType:[],
		mouseEvent:{},
	},
 	reducers: {
		addEventToApp: (state,eventType) => {
			console.log('eventType (from slice):',eventType);
			return {
				...state,
				eventType: [...state.eventType,eventType],
			};
		},
		updateMouseEvent: (state, event) => {
			return {
				...state,
				mouseEvent: event,
			};
		}
	},  
});

export const { addEventToApp, updateMouseEvent } = getEventSlice.actions;

export default getEventSlice.reducer;
