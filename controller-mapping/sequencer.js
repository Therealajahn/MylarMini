document.getElementsByClassName("audio-button")[0].addEventListener("click", async () => {
	await Tone.start();
	console.log("audio is ready");
});

const loop = new Tone.Loop((time,note) => {
	 console.log('Sequencer time: ',time,' note: ',note);
	 flashCurrentTriggerLight();
},'8n').start(0);

Tone.Transport.start(0);
