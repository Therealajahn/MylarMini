async function startAudio(){
    await Tone.start()
    console.log('audio started')
}
const clap = clapInit();
// const kick = kickInit();
const hat = hatInit();
const bass = bassInit();

function triggerClap(){
    clap();
}

function triggerKick(){
    kickInit();
}

function triggerHat(){
    hat();
}

function triggerBass(){
    bass();
}

const soundData = {
    //object with sound parameters in it 
}

const controlData = {
    //keep track of which module is selected
    //keep track of the state of the keyboard
}


function clapInit(){
    console.log('clap init');

    const noise = new Tone.Noise('white').start();
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack:0.01,
        release:1,
    })

    const hiPass = new Tone.Filter(900,'highpass');
    const loPass = new Tone.Filter(2000,'lowpass');
    const filterLFO = new Tone.Oscillator(80,'sawtooth').start();
    const filterLFOGain = new Tone.Gain(300);
    const crusher = new Tone.BitCrusher(8);

    filterLFO.connect(filterLFOGain);
    filterLFOGain.fan(hiPass.frequency,loPass.frequency)
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

function kickInit(){
    console.log('kick init');
//SOUND GENERATION
    const sine = new Tone.Oscillator('c1','sine').start();
    const noise = new Tone.Noise('brown').start();
    const noiseGain = new Tone.Gain(0.1);
    
//SOUND SHAPING
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack:0.01,
        sustain:0.5,
        release:1,
    });

    sine.chain(audioEnv,Tone.Destination);
    noise.chain(noiseGain,audioEnv,Tone.Destination);


    const pitchEnv = new Tone.FrequencyEnvelope({
        attack:0.001,
        release:0.001,
        baseFrequency:'c2',
        octaves:1,
    })

    pitchEnv.connect(sine.frequency);

    const now = Tone.now();
    audioEnv.triggerAttackRelease(now,0.001)
    pitchEnv.triggerAttackRelease(now,0.001)
}

function hatInit(){
    console.log('hat init');
    
    const carrierPitch = 100;
    const carrierWave = new Tone.Oscillator(100,'sine').start();
    const modulatorWave = new Tone.Oscillator(carrierPitch * 1.1,'sine').start();
    const modulatorGain = new Tone.Gain(1000);

    const carrierAudioEnvelope = new Tone.AmplitudeEnvelope({
        attack: 0.01,
        release: 1,
    });

    modulatorWave.chain(modulatorGain,carrierWave.frequency);
    carrierWave.chain(carrierAudioEnvelope,Tone.Destination);

    return () => {
        const now = Tone.now();
        carrierAudioEnvelope.triggerAttackRelease(now,0.01,1);
    }
    //make an fm synth with sines complex wavforms
    //make multiply node
    //connect gain node to modulator
    //connect gain node to signal 
    //connect signal to carrier frequency
    //put bit crush and short delay on top
    //generate a object that has its settings
}

function bassInit(){
    console.log('bass init');
    //make a vibrato sine wave bass 
    const wave = new Tone.Oscillator('c1','sine').start();
    const audioEnv = new Tone.AmplitudeEnvelope({
        attack: 0.01,
        release: 1,
    });
    wave.chain(audioEnv,Tone.Destination);

    return () => {
        const now = Tone.now();
        audioEnv.triggerAttackRelease(now,'0.001');
    }
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
        if(event.key === ' '){
            startAudio();
        }
        if(event.key === 'j'){
            clap();
        }
        if(event.key === 'k'){
            kick();
        }
        if(event.key === 'l'){
            hat();
        }
        if(event.key === ';'){
            bass();
        }
    })
}
keyboardControl();
