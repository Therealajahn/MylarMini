async function startAudio(){
    await Tone.start()
    console.log('audio started')
}
const clap = clapInit();

function triggerClap(){
    clap();
}

function triggerKick(){
    makeKick();
}

function triggerHat(){
    makeHat();
}

function triggerBass(){
    makeBass();
}

const soundData = {
    //object with sound parameters in it 
}

const controlData = {
    //keep track of which module is selected
    //keep track of the state of the keyboard
}


function clapInit(){

    const noise = new Tone.Noise('white').start();
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack:0.01,
        release:0.5,
    })

    const hiPass = new Tone.Filter(900,'highpass');
    const loPass = new Tone.Filter(2000,'lowpass');
    const filterLFO = new Tone.Oscillator(0.1,'sawtooth').start();
    const crusher = new Tone.BitCrusher(8);

    filterLFO.fan(hiPass.frequency,loPass.frequency)
    noise.chain(hiPass,loPass,audioEnv,crusher,Tone.Destination);

    const envLength = audioEnv.get().attack + 
        audioEnv.get().release + 0.001;

    return () => {
            const now = Tone.now();
            audioEnv.triggerAttackRelease(now,0.001);
            
//             setTimeout(()=>{
//                 noise.dispose();
//                 audioEnv.dispose();
//             },envLength * 1000);
        }
}

function makeKick(){
    const now = Tone.now();
    //SOUND GENERATION
    const sine = new Tone.Oscillator('c0','sine').start();
    const noise = new Tone.Noise('brown').start();
    const noiseGain = new Tone.Gain(0.05)

//SOUND SHAPING
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack:0.01,
        decay:0.2,
        sustain:1,
        release:0.5,
    })
    const pitchEnv =  new Tone.FrequencyEnvelope({
        attack:0.05,
        attackCurve:'exponential',
        release:0.05,
        releaseCurve:'exponential',
        baseFrequency:'c1',
        octaves:4,
    });
    pitchEnv.connect(sine.frequency);
    const pitchLFO = new Tone.LFO(0.2,5,5).start();
    pitchLFO.connect(sine.frequency);
   
//EFFECTS
    const shaper = new Tone.Chebyshev(1);
    const distortion = new Tone.Distortion(0.2);

//OUTPUT
    audioEnv.chain(distortion,shaper,Tone.Destination);
    noise.chain(noiseGain,audioEnv);
    sine.chain(audioEnv);

//TRIGGERS
    pitchEnv.triggerAttackRelease(now,0.001);
    audioEnv.triggerAttackRelease(now,0.02);

    const envLength = audioEnv.get().attack + 
        audioEnv.get().release + 0.001;

    setTimeout(()=>{
        sine.dispose();
        noise.dispose();
        audioEnv.dispose();
        pitchEnv.dispose();
        shaper.dispose();
        distortion.dispose();
    },envLength * 1000);
}

function makeHat(){
    const now = Tone.now();
    //make an fm synth with sines complex wavforms
    const carrier = new Tone.Oscillator('a1','sine').start();
    const modulator = new Tone.Oscillator('a#1','sine').start();
    const gain = new Tone.Gain(1000);
    modulator.chain(gain,carrier.frequency);

    const audioEnv = new Tone.AmplitudeEnvelope({
        attack:0.01,
        release:1,
    })
    carrier.chain(audioEnv,Tone.Destination);
    audioEnv.triggerAttackRelease(now,'0.001');
    //make multiply node
    //connect gain node to modulator
    //connect gain node to signal 
    //connect signal to carrier frequency
    //put bit crush and short delay on top
    //generate a object that has its settings
}

function makeBass(){
    const now = Tone.now();
    //make a vibrato sine wave bass 
    const wave = new Tone.Oscillator('c1','sine').start();
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack: 0.01,
        release: 1,
    });
    wave.chain(audioEnv,Tone.Destination);
    audioEnv.triggerAttackRelease(now,'0.001');
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
            clap();
        }
        if(event.key === 'k'){
            makeKick();
        }
        if(event.key === 'l'){
            makeHat();
        }
        if(event.key === ';'){
            makeBass();
        }
    })
}
keyboardControl();
