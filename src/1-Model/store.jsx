import { configureStore } from '@reduxjs/toolkit'; 
import getEventReducer from '../3-Controller/controlEventSlice.jsx';

export default configureStore({
	reducer:{
		getEvent: getEventReducer,
	},
});

