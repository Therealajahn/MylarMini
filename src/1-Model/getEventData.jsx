import { createSlice } from '@reduxjs/toolkit';

export const getEventData = createSlice(
{
		name: 'getEventData',
		initialState: {
			mouseLocation:{
				x:0,
				y:0,
			},
		},
		reducers: {
			updateMouseLocation: (state,action) => {
			 //console.log('from (getEventDataSlice): ',action);
			 const { x, y } = action.payload;
			 	return {
			 		...state,
			 		mouseLocation:{
			 				...state.mouseEvent,
			 				x:x,
			 				y:y,
			 		},
			 	};
			},                                 
			whenTheMouseUps: (state,action) => {

			},
		},
 });

export const { updateMouseLocation } = getEventData.actions;

export default getEventData.reducer;
