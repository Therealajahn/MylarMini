async function startAudio(){
    await Tone.start()
    console.log('audio started')
}

function triggerClap(){
    makeClap();
}

const soundData = {
    //object with sound parameters in it 
}

const controlData = {
    //keep track of which module is selected
    //keep track of the state of the keyboard
}

function makeClap(){
    console.log('clap started')
    //make a noise source 
    const noise = new Tone.Noise('brown').start();
    //with a bit crusher on it 
    const crusher = new Tone.BitCrusher(5);
    //with an envelope
    const envAttack = 0.01;
    const envRelease = 0.1;
    const envLength = (envAttack + envRelease) * 1000;
    const ampEnvelope = new Tone.AmplitudeEnvelope({
        attack:envAttack,
        release:envRelease,
    });
    //connect noise to envelope
    noise.chain(ampEnvelope,crusher,Tone.Destination);
    ampEnvelope.triggerAttackRelease();
    //stop noise 
    setTimeout(() => {
        console.log('disposal')
        noise.dispose();
        crusher.dispose();
        ampEnvelope.dispose();
    },envLength);
    //generate a object that has its settings
}

function makeKick(){
    //make a sine with a pitch envelope and a audio envelope
    //put a waveshaper and distortion on top
    //generate a object that has its settings
}

function makeHat(){
    //make an fm synth with sines complex wavforms
    //put bit crush and short delay on top
    //generate a object that has its settings
}

function makeBass(){
    //make a vibrato sine wave bass 
    //put filter, waveshaper, distortion, and short reverb over it
    //generate a object that has its settings
}

function makeSequencer(){
    //make an eight step sequencer that mimics a Metropolis
    //can take notes or chords from the keyboard
    //generate a object that has its settings
}

function keyboardControl(){
    //make a keyboard that can be transposed
}
