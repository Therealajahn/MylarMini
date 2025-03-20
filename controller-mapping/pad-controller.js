function padControllerFactory(){
	const padControllerStore = {
		//(One button row example)
		//0:[
		//		{onOrOff:'off',controlNumber:0},
		//		{onOrOff:'off',controlNumber:1},
		//		{onOrOff:'off',controlNumber:2},
		//		{onOrOff:'off',controlNumber:3},
		//		{onOrOff:'off',controlNumber:4},
		//		{onOrOff:'off',controlNumber:5},
		//		{onOrOff:'off',controlNumber:6},
		//		{onOrOff:'off',controlNumber:7},
		//],
	};
	let rowStart = 0;

	for(let i = 0;i < 8;i++){
		padControllerStore[i] = Array(8).fill(0).map((button,j) => (
			{onOrOff:'off',controlNumber:rowStart + j})
		);
		rowStart += 16;
	}

	const padColors = {
			'white': 10,
			'yellow': 20,
			'light-blue': 40,
			'purple': 50,
			'blue': 70,
			'green': 90,
			'red': 100,
  }
	function colorToVelocity(color){
  	return padColors[color];	
	};

	let output = {};

	return{
		defineOutput:function (definition) {
			output = definition;
			console.log('output: ',output);
		},
		send:function (message) {
			const [channel,controlNumber,velocity] = message;

			switch(typeof velocity){
				case 'number':
					message = [channel,controlNumber,velocity];
				break;
				case 'string':
					message = [channel,controlNumber,colorToVelocity(velocity)];
				break;
			};

			output.send(message);
		},
		getStore:function () {
			return padControllerStore; 
		},
	};
}
const padController = padControllerFactory();

navigator.requestMIDIAccess().then(getMIDI);

	function getMIDI(MIDIAccess){
		getMIDIInputs(MIDIAccess);
		getMIDIOutputs(MIDIAccess);
	};

	function getMIDIInputs(MIDIAccess){
		for(const input of MIDIAccess.inputs) {
			let smartPad = {};
			if(input[1].name !== "SmartPAD:SmartPAD MIDI 1 20:0"){
				continue;
			}
			console.log('pad input: ',input[1].name);
			smartPad = input[1];
			smartPad.onmidimessage = (midiMessage) => {
				console.log("pad midi message: ",midiMessage.data);

				const [channel, controlNumber, controlValue] = midiMessage.data;
			};
		}
	};

	function getMIDIOutputs(MIDIAccess){
		for(const output of MIDIAccess.outputs) {
			let smartPad = {};
			if(output[1].name !== "SmartPAD:SmartPAD MIDI 1 20:0"){
				continue;
			}
			smartPad = output[1];
			smartPad.send([144,0,127]);
			padController.defineOutput(smartPad);
		  function resetPads(){
				for(const rowOfPads in padController.getStore()){
					for(const pad of padController.getStore()[rowOfPads]){
						console.log('pad: ',pad);
						padController.send([128,pad.controlNumber,0]);
					}
				}; 
			};
			resetPads();
      padController.send([144,0,'white']);
      padController.send([144,1,'yellow']);
      padController.send([144,2,'light-blue']);
      padController.send([144,3,'purple']);
      padController.send([144,4,'blue']);
      padController.send([144,5,'green']);
      padController.send([144,6,'red']);
      padController.send([144,7,0]);
		}
	};

