import { useState, useCallback, useRef, useEffect } from 'react';

export default function AnimationComponent(){
	const position = useRef(0);
	const [inputValue, setInputValue] = useState(0);

	const animationCallback = useCallback((time)=>{
		console.log('position (animation callback): ',position);
	},[]);

	const startAnimation = useEffect(()=>{
		const animate = (time) => {
			animationCallback(time);
			requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(animate);
		};
	},[]);

	return (
		<div>
			<input type='number' 
			onChange={(e) => {
					setInputValue(Number(e.target.value));
					position.current = Number(e.target.value);
			}}
			/>
			<div>Position: {inputValue.toFixed(2)}</div>
		</div>
	);
};
