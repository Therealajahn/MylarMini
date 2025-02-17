import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import AnimationComponent from "./3-Controller/AnimationComponent.jsx";
import store from './1-Model/store.jsx';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<Provider store={ store }>
			<App />
		</Provider>
  </StrictMode>,
)
