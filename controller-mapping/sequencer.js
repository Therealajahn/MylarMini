const pitchOne = document.getElementsByClassName('pitch-one')[0];
pitchOne.value = 50;

function sequencerControlFactory() {
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
		getPitchKeys:function () {return Object.keys(pitchStages)},
		incrementSelectIndex:function (increment,disableSpace) {
			if(!inputSpaceReached() && (disableSpace !== 'no-space')){return}

			selectIndex = loopValue(selectIndex,increment,7,0);
			previousIndex = loopValue(previousIndex,increment,7,0);
			postIndex = loopValue(postIndex,increment,7,0);

			console.log('selectIndex: ',selectIndex);
		},
		incrementSelection:function (increment) {
		  pitchStages[pitchKeys[selectIndex]] += increment;
			const currentPitch = this.getCurrentStageValue();

			if(currentPitch > 127){
				setPitchStage(127);
			}
			if(currentPitch < 0){
				setPitchStage(0);
			}
			console.log('stages', pitchStages);
		},
		getPitchStage:function (stage) {
			return pitchStages[stage];
		},                
		getCurrentStage:function () {
			return pitchKeys[selectIndex]
		},
		getCurrentStageValue:function (){
			return pitchStages[pitchKeys[selectIndex]];
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

const sequencerControl = sequencerControlFactory();

function getMidiMessage(tagName,controlValue){
	//get the jog wheel input
	//take forward and back of the jog wheel
	console.log('tagName: ',tagName);
	switch(tagName){
		case 'left-platter':
			if(controlValue === 1){
				switch(sequencerControl.getPlatterMode()){
					case 'select':
						sequencerControl.incrementSelectIndex(1);
						updateSliderSelection();
					break;
					case 'change':
						sequencerControl.incrementSelection(1);
						updateSliderValue();
					break;
				};
			}else if(controlValue === 127){
				switch(sequencerControl.getPlatterMode()){
					case 'select':
						sequencerControl.incrementSelectIndex(-1);
						updateSliderSelection();
					break;
					case 'change':
						sequencerControl.incrementSelection(-1);
						updateSliderValue();
					break;
				};
			}
		break;
		case 'vinyl-left':
				if(controlValue !== 127){break};
				sequencerControl.togglePlatterMode();
		 		console.log('platter mode: ',sequencerControl.getPlatterMode()); 
		break;
		case 'in-left':
			if(controlValue !== 127){break};
			sequencerControl.incrementSelectIndex(-1,'no-space');
			sequencerControl.setPlatterMode('change');
			updateSliderSelection();
		break;
		case 'out-left':
			if(controlValue !== 127){break};
			sequencerControl.incrementSelectIndex(1,'no-space');
			sequencerControl.setPlatterMode('change');
			updateSliderSelection();
		break;
		//case 'right-platter':
		//		if(controlValue === 1){
		//			sequencerControl.incrementSelection(1);
		//			updateSliderValue();
		//		}else if(controlValue === 127){
		//				sequencerControl.incrementSelection(-1);
		//				updateSliderValue();
		//		}
		//break;
		}
}

function updateSliderSelection(){
	let currentSlider = document.getElementsByClassName(
		sequencerControl.getCurrentStage()
	)[0];
	let previousSlider = document.getElementsByClassName(
		sequencerControl.getPreviousStage()
	)[0];
	let postSlider = document.getElementsByClassName(
		sequencerControl.getPostStage()
	)[0];
	currentSlider.getElementsByClassName('select-indicator')[0].innerHTML = '1';
	previousSlider.getElementsByClassName('select-indicator')[0].innerHTML = '0';
	postSlider.getElementsByClassName('select-indicator')[0].innerHTML = '0';
};

function updateSliderValue(){
	let currentSlider = document.getElementsByClassName(
		sequencerControl.getCurrentStage()
	)[0];
	currentSlider.querySelector('input').value = sequencerControl.getCurrentStageValue();
	console.log('change value: ',sequencerControl.getCurrentStageValue());
};
