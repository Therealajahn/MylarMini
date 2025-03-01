const pitchOne = document.getElementsByClassName('pitch-one')[0];
pitchOne.value = 50;

function sequencerControlFactory() {
	let selectIndex = 0;
	let previousIndex = 7;
	let postIndex = 1;
	let inputCount = 0;
	let inputSpace = 5;
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

	return{
		getPitchKeys:function () {return Object.keys(pitchStages)},
		incrementSelectIndex:function (increment) {
			if(!this.inputSpaceReached()){return}

			selectIndex = this.loopValue(selectIndex,increment,7,0);
			previousIndex = this.loopValue(previousIndex,increment,7,0);
			postIndex = this.loopValue(postIndex,increment,7,0);

			console.log('selectIndex: ',selectIndex);
		},
		loopValue:function (value,addValue,top,bottom) {
			if(value + addValue > top){
				return bottom;
			}
			if(value + addValue < bottom){
				return top;
			}
			return value + addValue;
		},
		inputSpaceReached:function () {
		 inputCount += 1; 
		 console.log('inputCount: ',inputCount);
		 if(inputCount === inputSpace){
			inputCount = 0;
			return true;
			}
			return false;
		},
		getPitchStage:function (stage) {
			return pitchStages[stage];
		},                
		getCurrentStage:function () {
			return pitchKeys[selectIndex]
		},
		getPreviousStage:function () {
			return pitchKeys[previousIndex]
		},
		getPostStage:function () {
			return pitchKeys[postIndex]
		},
		incrementPitchStage:function (increment) {
			return pitchStages[pitchKeys[selectIndex]] += increment;
		},
		setPitchStage:function (setValue) {
			return pitchStages[pitchKeys[selectIndex]] = setValue;
		},
		incrementSelection:function (increment) {
			this.incrementPitchStage(increment);
			const currentPitch = this.getPitchStage('pitch-one');
			if(currentPitch > 127){
				setPitchStage(127);
			}
			if(currentPitch < 0){
				setPitchStage(0);
			}
			console.log('stages', pitchStages);
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
				sequencerControl.incrementSelectIndex(1);
				updateSliderSelection();
			}else if(controlValue === 127){
					sequencerControl.incrementSelectIndex(-1);
					updateSliderSelection();
			}
		break;
		case 'right-platter':
			if(controlValue === 1){
				sequencerControl.incrementSelection(1);
			}else if(controlValue === 127){
					sequencerControl.incrementSelection(-1);
			}
		break;
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
	//console.log('previous: ',sequencerControl.getPreviousIndex());
	currentSlider.nextElementSibling.innerHTML = '1';
	previousSlider.nextElementSibling.innerHTML = '0';
	postSlider.nextElementSibling.innerHTML = '0';
};
