async function startAudio(){
    await Tone.start()
    console.log('audio started')
}

function triggerClap(){
    makeClap();
}

function triggerKick(){
    makeKick();
}

function triggerHat(){
    makeHat();
}

const soundData = {
    //object with sound parameters in it 
}

const controlData = {
    //keep track of which module is selected
    //keep track of the state of the keyboard
}


function makeClap(){
    const now = Tone.now();

    const noise = new Tone.Noise('brown').start();
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack:0.01,
        release:0.5,
    })

    noise.chain(audioEnv,Tone.Destination);
    audioEnv.triggerAttackRelease(now,0.001);

    const envLength = audioEnv.get().attack + 
        audioEnv.get().release;

    setTimeout(()=>{
        noise.dispose();
        audioEnv.dispose();
    },envLength * 1000);
}

function makeKick(){
    const now = Tone.now();
    //make a sine with a pitch envelope and a audio envelope
    const sine = new Tone.Oscillator({type:'sine'}).start();
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack:0.01,
        release:0.5,
    })

    sine.chain(audioEnv,Tone.Destination);
    const pitchEnv =  new Tone.FrequencyEnvelope({
        attack:0.01,
        release:0.5,
        baseFrequency:'C2',
        octaves:4,
    });
    pitchEnv.connect(sine.frequency);
    pitchEnv.triggerAttackRelease(now,0.001);
    audioEnv.triggerAttackRelease(now,0.001);
    //put a waveshaper and distortion on top
    //generate a object that has its settings
}

function makeHat(){
    const now = Tone.now();
    //make an fm synth with sines complex wavforms
    const carrier = new Tone.Oscillator(220,'sine').start();
    const modulator = new Tone.Oscillator(440,'sine').start();
    const gain = new Tone.Gain(200);
    modulator.chain(gain,carrier.frequency);
//     modulator.connect(Tone.Destination);
    carrier.connect(Tone.Destination);

    //make multiply node
    //connect gain node to modulator
    //connect gain node to signal 
    //connect signal to carrier frequency
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
    document.addEventListener('keydown',event => {
        if(event.key === 'j'){
            makeClap();
        }
        if(event.key === 'k'){
            makeKick();
        }
    })
}
keyboardControl();
