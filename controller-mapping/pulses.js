function pulseControlFactory(){
	let selectIndex = 0;
	let previousIndex = 7;
	let postIndex = 1;
	let inputCount = 0;
	let inputSpace = 8;
	const pulseStages = {
		'pulse-one':1,
		'pulse-two':1,
		'pulse-three':1,
		'pulse-four':1,
		'pulse-five':1,
		'pulse-six':1,
		'pulse-seven':1,
		'pulse-eight':1,
	};
	const pulseKeys = Object.keys(pulseStages);

	function getSelectIndex() {
		return pitchControl.getSelectIndex();
	};

	return{
		setPulseCount:function (pulseIndex,tickValue) {
			pulseStages[pulseKeys[pulseIndex]] = tickValue;
			//console.log(pulseStages);
		},
		incrementSelection:function (increment) {
			pulseStages[pulseKeys[getSelectIndex()]] += increment;
			console.log('pulse stages: ',pulseStages);
		},
		getCurrentStage:function () {
			return pulseStages[getSelectIndex()];
		},
	};
}

const pulseControl = pulseControlFactory();

function getPulseMessage(tagName,controlValue){
	switch(tagName){
  	case 'drum-left-two':
			if(controlValue !== 127){break};
			pulseControl.incrementSelection(1);
			updatePulseIndicator();
		break;
  	case 'drum-left-four':
			if(controlValue !== 127){break};
			pulseControl.incrementSelection(-1);
			updatePulseIndicator();
		break;
	};                                           	
};


function handleTickClick(){
	const tickList = document.querySelectorAll('tick');
	for(const tick of tickList){
			tick.addEventListener('click',event => {
				const pulseIndex = event.target.parentElement.classList[0];
				const tickValue = event.target.classList[0];

				pulseControl.setPulseCount(pulseIndex,tickValue);
				updateTickView(event.target);
			});
	}
};

handleTickClick();

function updatePulseIndicator(){
};

function updateTickView(target){
	const siblings = Object.values(event.target.parentElement.children);
	siblings.forEach(sibling => {sibling.style.background = 'white'});
	target.style.background = 'black';
};

