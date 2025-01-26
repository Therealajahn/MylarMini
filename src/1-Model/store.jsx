import { configureStore } from '@reduxjs/toolkit'; 
import controlEventReducer from '../1-Model/controlEventSlice.jsx';
import getEventDataReducer from '../1-Model/getEventData.jsx';

export default configureStore({
	reducer:{
		controlEvent: controlEventReducer,
		getEventData: getEventDataReducer,
	},
});

