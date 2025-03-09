document.getElementsByClassName("audio-button")[0].addEventListener("click", async () => {
	await Tone.start();
	console.log("audio is ready");
});

const am = new Tone.MonoSynth({
	oscillator:{
		type: 'square',
	},     
	filter:{
		rolloff:'-24',
	},
	filterEnvelope:{
		baseFrequency: 100,
		octaves: 2,
	},
	volume:-15,
	portamento:0.05,
	detune:50,
}).toDestination();

let sequenceStage = 0;
let stagePlays = 1;

const loop = new Tone.Loop((time,note) => {
	//console.log('sequenceStage: ',sequenceStage);
	//console.log('stagePlays: ',stagePlays);
	//console.log('pulse value: ',pulseControl.getStage(sequenceStage));
	const currentPitch = pitchControl.getPitchStage(sequenceStage);
	console.log('current pitch: ',);
	am.triggerAttackRelease(currentPitch,'32n',time);
	let increment = 0;
	if(stagePlays === pulseControl.getStage(sequenceStage)){
		increment = 1;	
		stagePlays = 1;
	}else{
		stagePlays += 1;
	};
  flashCurrentTriggerLight(increment);
	sequenceStage = (sequenceStage + increment) % 8;
},'8n').start(0);

Tone.Transport.start(0);


