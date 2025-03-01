navigator.requestMIDIAccess().then(midi => {
	console.log(midi);
	//ITS FOR..OF not FOR..IN!!!!!!!
	for(const input in midi.inputs){
		console.log('input: ',input);
	}
});
