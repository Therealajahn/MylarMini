 //attach a click listener to a play button
document.getElementsByClassName("audio-button")[0].addEventListener("click", async () => {
	await Tone.start();
	console.log("audio is ready");
});

function controlTriggerLightsFactory(){
	 const triggerLights = {
		 'trigger-light-one':0,
		 'trigger-light-two':0,
		 'trigger-light-three':0,
		 'trigger-light-four':0,
		 'trigger-light-five':0,
		 'trigger-light-six':0,
		 'trigger-light-seven':0,
		 'trigger-light-eight':0,
	 };
};
 const sequence = new Tone.Sequence((time,note) => {
	 console.log('Sequencer time: ',time,' note: ',note);
 },[12,12,12,12]).start(0);

 Tone.Transport.start(0);
