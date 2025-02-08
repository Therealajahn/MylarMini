import { createSlice } from '@reduxjs/toolkit';

export const getEventData = createSlice(
{
		name: 'getEventData',
		initialState: {
			mouseLocation:{
				x:0,
				y:0,
			},
			knobTop:{
				clicked: false,
				ref:{},
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
			whenKnobTopClicked: (state,action) => {
				console.log('knobTopClicked',action);
				return {
					...state,
					knobTop:{
						...state.knobTop,
						clicked:true,
					},
				}
			}
		},
 });

export const { updateMouseLocation, whenKnobTopClicked } = getEventData.actions;

export default getEventData.reducer;
