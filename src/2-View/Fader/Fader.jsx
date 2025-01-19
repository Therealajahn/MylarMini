import React, { useRef,useEffect,useState } from 'react';



export default function Fader({marginTop,marginLeft, gridArea}){
		const buttonBottomRef = useRef();
		const buttonTopRef = useRef();
		const sliderLength = 100;
		const [sliderState,setSliderState] = useState(sliderLength);

    function convertToLength(inputValue, inputLength, outputLength){
  		return outputLength / inputLength * inputValue;	
		}

		useEffect(()=>{
		    const convertedValue = convertToLength(sliderState,127,sliderLength);
				buttonTopRef.current
			.setAttribute('y',`${(sliderLength - convertedValue) + 10}`);
				buttonBottomRef.current
			.setAttribute('y',`${(sliderLength - convertedValue) + 15}`);
		},[sliderState]);


    return(
		<section
			style={{
				display: 'grid',
				marginTop: '.5rem',
			}}
		>
		<input type='range' min='0' max='127' className='vanilla-slider'
				style={{
					position: 'absolute',
					height: '1rem',
					width: '3.5rem',
					transform: 'rotate(-90deg)',
					justifySelf: 'center',
					opacity: '0',
				}}
				onInput={event => {
					const sliderValue = +event.target.value;
						setSliderState(
							sliderValue
						);
 			}}
			/> 
        <svg data-testid="fader-svg" viewBox="0 0 33 136" fill="none" xmlns="http://www.w3.org/2000/svg"
           style={{
               height: '110%',
               justifySelf: 'center',
							 alignSelf: 'center',
               marginTop: `${marginTop ? marginTop : '0vw'}`,
               marginLeft: `${marginLeft ? marginLeft : '0vw'}`,
           }}
        >
						<rect x="6" width="7" height="136" rx="3.5" fill="black"/>

				//wiper rectangles
            <rect ref={buttonBottomRef}
									x="1.5" y="107.382"
					width="17" height="17" rx="6.5" fill="#B9B9B9" stroke="white" strokeWidth="3"/>
            <rect ref={buttonTopRef} x="1.5" y="101.5" width="17" height="17" rx="6.5" fill="black" stroke="white" strokeWidth="3"/>        
			</svg>
				</section>
    )
}
