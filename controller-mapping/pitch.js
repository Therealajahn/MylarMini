function pitchControlFactory() {
	let selectIndex = 0;
	let previousIndex = 7;
	let postIndex = 1;
	let inputCount = 0;
	let inputSpace = 8;
	let platterMode = 'select';
	//const pitchMax = 24;
	const pitchStages = 
	{
		'pitch-one':0,
		'pitch-two':0,
		'pitch-three':0,
		'pitch-four':0,
		'pitch-five':0,
		'pitch-six':0,
		'pitch-seven':0,
		'pitch-eight':0,
	};
	const pitchKeys = Object.keys(pitchStages);
	const octaveStages = 
	{
			'octave-one':4,
			'octave-two':4,
			'octave-three':4,
			'octave-four':4,
			'octave-five':4,
			'octave-six':4,
			'octave-seven':4,
			'octave-eight':4,
	};
	const octaveKeys = Object.keys(octaveStages);

	function loopValue(value,addValue,top,bottom) {
		if(value + addValue > top){
			return bottom;
		}
		if(value + addValue < bottom){
			return top;
		}
		return value + addValue;
	};

	function inputSpaceReached() {
	 inputCount += 1; 
	 console.log('inputCount: ',inputCount);
	 if(inputCount === inputSpace){
		inputCount = 0;
		return true;
		}
		return false;
	};

	function setPitchStage (setValue) {
		return pitchStages[pitchKeys[selectIndex]] = setValue;
	};

	return{
		chromaticPitchValue:function () {
    	return(
				Math.ceil(this.getCurrentPitchStageValue() / 11)
				+ (12 * this.getCurrentOctaveStageValue())
			); 
		},
		getPitchKeys:function () {return Object.keys(pitchStages)},
		getSelectIndex:function () {
			return selectIndex;
		},
		incrementSelectIndex:function (increment,disableSpace) {
			if(!inputSpaceReached() && (disableSpace !== 'no-space')){return}

			selectIndex = loopValue(selectIndex,increment,7,0);
			previousIndex = loopValue(previousIndex,increment,7,0);
			postIndex = loopValue(postIndex,increment,7,0);

			console.log('selectIndex: ',selectIndex);
		},
		incrementSelectedPitch:function (increment) {
		  pitchStages[pitchKeys[selectIndex]] += increment;
			const currentPitch = this.getCurrentPitchStageValue();

			if(currentPitch > 127){
				setPitchStage(127);
			}
			if(currentPitch < 0){
				setPitchStage(0);
			}
			console.log('stages', pitchStages);
		},
		incrementSelectedOctave:function (increment) {
      octaveStages[octaveKeys[selectIndex]] += increment;
		},
		getPitchStage:function (stage) {
			return pitchStages[stage];
		},                
		getCurrentPitchStage:function () {
			return pitchKeys[selectIndex]
		},
		getCurrentPitchStageValue:function (){
			return pitchStages[pitchKeys[selectIndex]];
		},
		getCurrentOctaveStage:function () {
			console.log('from factory current octave stage: ',octaveKeys[selectIndex]);
			return octaveKeys[selectIndex];
		},
		getCurrentOctaveStageValue:function () {
			return octaveStages[octaveKeys[selectIndex]];
		},
		getPreviousStage:function () {
			return pitchKeys[previousIndex]
		},
		getPostStage:function () {
			return pitchKeys[postIndex]
		},
		togglePlatterMode:function () {
			platterMode = platterMode === 'select'? 'change' : 'select';
		},
		setPlatterMode:function (mode) {
			platterMode = mode;
		},
		getPlatterMode:function () {
			return platterMode;
		},
	}
};                                                       

const pitchControl = pitchControlFactory();
function getPitchMessage(tagName,controlValue){
	switch(tagName){
		case 'left-platter':
			switch(controlValue){
				case 1:
					updateFromPlatter(1);
				break;
				case 127:
					updateFromPlatter(-1);
				break;
			};
			function updateFromPlatter(increment){
					switch(pitchControl.getPlatterMode()){
						case 'select':
							pitchControl.incrementSelectIndex(increment);
							updateSliderSelection();
						break;
						case 'change':
							pitchControl.incrementSelectedPitch(increment);
							updateSliderValue();
						break;
					};
			}
			
		break;
		case 'left-platter-rim':
			switch(controlValue){
				case 1:
					pitchControl.incrementSelectIndex(1);
					updateSliderSelection();
				break;
				case 127:
					pitchControl.incrementSelectIndex(-1);
					updateSliderSelection();
				break;
			};
			
		break;
		case 'vinyl-left':
				if(controlValue !== 127){break};
				pitchControl.togglePlatterMode();
		 		console.log('platter mode: ',pitchControl.getPlatterMode()); 
		break;
		case 'in-left':
			if(controlValue !== 127){break};
			pitchControl.incrementSelectIndex(-1,'no-space');
			pitchControl.setPlatterMode('change');
			updateSliderSelection();
		break;
		case 'out-left':
			if(controlValue !== 127){break};
			pitchControl.incrementSelectIndex(1,'no-space');
			pitchControl.setPlatterMode('change');
			updateSliderSelection();
		break;
    ////Octave
  	case 'drum-left-one':
			if(controlValue !== 127){break};
			pitchControl.incrementSelectedOctave(1);
			updateOctaveIndicator();
		break;
  	case 'drum-left-three':
			if(controlValue !== 127){break};
			pitchControl.incrementSelectedOctave(-1);
			updateOctaveIndicator();
		break;
		//case 'right-platter':
		//break;
		}
}

function updateSliderSelection(){
	let currentSlider = document.getElementsByClassName(
		pitchControl.getCurrentPitchStage()
	)[0];
	let previousSlider = document.getElementsByClassName(
		pitchControl.getPreviousStage()
	)[0];
	let postSlider = document.getElementsByClassName(
		pitchControl.getPostStage()
	)[0];
	currentSlider.getElementsByClassName('select-indicator')[0].innerHTML = '1';
	previousSlider.getElementsByClassName('select-indicator')[0].innerHTML = '0';
	postSlider.getElementsByClassName('select-indicator')[0].innerHTML = '0';
};

function updateSliderValue(){
	let currentSlider = document.getElementsByClassName(
		pitchControl.getCurrentPitchStage()
	)[0];
	currentSlider.querySelector('input').value = 
		pitchControl.getCurrentPitchStageValue();
	console.log('current slider value: ', currentSlider.value);
	console.log('current chromatic value: ',pitchControl.chromaticPitchValue());
};

function updateOctaveIndicator(octaveIndicator){
	const currentOctaveStage = octaveIndicator ?
		octaveIndicator : 
		document.getElementsByClassName(
			pitchControl.getCurrentOctaveStage()
		)[0];
		console.log('current octave stage: ',currentOctaveStage);
		for(const octave of currentOctaveStage.children){
			if(+octave.classList[0] === pitchControl.getCurrentOctaveStageValue()){
      	updateOctaveView(octave);
			}
		}; 
};

function updateOctaveView(target){
	const siblings = Object.values(target.parentElement.children);
	siblings.forEach(sibling => {sibling.style.background = 'white'});
	target.style.background = 'black';
};
