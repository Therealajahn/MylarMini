import MiniModular from './2-View/MiniModular/MiniModular.jsx';
import Sound from './Sound/Sound.jsx';
import { useRef,useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addEventToApp,updateMouseEvent } from './3-Controller/controlEventSlice.jsx';



export default function App() {

		const appRef = useRef();
		const getEventArray = useSelector(state => state.getEvent.eventType);
	  const dispatch = useDispatch();
	
		
   	const whenEventAdded = useEffect(() => {
			console.log('(from app)event array added: ',getEventArray);
			getEventArray.forEach(getEvent => {
				appRef.current.addEventListener(getEvent.payload,event => {
					switch(event.type){
						case 'mousemove':
							whenMouseMoves();
						break;
					}
					function whenMouseMoves() {
						dispatch(updateMouseEvent(event.clientY));
						//console.log('whenMouseMoves(in whenEventAdded)',event.clientY);
					};
				});
			});
		},[getEventArray]);
		
	


    let appStyle = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        backgroundColor: '#707070'
    };
		

    return (
        <div 
					data-testid="app-div" 
					className='App' 
					style={appStyle} 
					ref={appRef}>
						<MiniModular appRef={appRef}/>
            <Sound/>
        </div>
    );
};

