import React, { useRef,useEffect,useState } from 'react';



export default function Fader({marginTop,marginLeft, gridArea}){
		const buttonBottomRef = useRef();
		const buttonTopRef = useRef();
		const [sliderState,setSliderState] = 
			useState({
				previous:0,
				current:0,
		});


		useEffect(()=>{
				console.log('slider state',sliderState);
				const previousTopY = buttonBottomRef.current.y.animVal.value;
				const previousBottomY = buttonTopRef.current.y.animVal.value;
				buttonBottomRef.current.setAttribute('y',`${previousTopY - 1}`);
		},[sliderState]);


    return(
		<>
		<input type='range' min='0' max='127' className='vanilla-slider'
				style={{
					position: 'absolute',
					height: '1rem',
					width: '2rem',
					transform: 'rotate(-90deg)',
				}}
				onInput={event => {
					const sliderValue = +event.target.value;
					if(!sliderState.previous){
						console.log("slider event",event);
						setSliderState(
							prevState => ({
								previous: sliderValue,
								current: sliderValue,
							})
						);
						return;
					}
          setSliderState({
						previous: sliderState,
						current: sliderState,
					})
				}}
			/> 
        <svg data-testid="fader-svg" viewBox="0 0 33 136" fill="none" xmlns="http://www.w3.org/2000/svg"
           style={{
               height:'110%',
               justifySelf:'center',
               marginTop:`${marginTop ? marginTop : '0vw'}`,
               marginLeft:`${marginLeft ? marginLeft : '0vw'}`,
               gridArea:`${gridArea ? gridArea : ''}`,
           }}
        >
						<rect x="6" width="7" height="136" rx="3.5" fill="black"/>

				//wiper rectangles
            <rect ref={buttonBottomRef} x="1.5" y="107.382" width="17" height="17" rx="6.5" fill="#B9B9B9" stroke="white" strokeWidth="3"/>
            <rect ref={buttonTopRef} x="1.5" y="101.5" width="17" height="17" rx="6.5" fill="black" stroke="white" strokeWidth="3"/>        
			</svg>
				</>
    )
}
