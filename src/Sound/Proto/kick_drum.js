function kickInit(){

    const lowpass = new Tone.Filter({
        frequency:100,
        type: 'lowpass',
        Q:7,
    });
    const highpass = new Tone.Filter({
        frequency:50,
        type: 'highpass',
        Q:6,
    });
    const noise = new Tone.Noise('white').start();
    const noiseGain = new Tone.Gain(100);
    const noiseToPitchGain = new Tone.Gain(0);

    const ampEnvelope = new Tone.AmplitudeEnvelope({
        attack: 0.01,
        release: 1,
    });
    const lowpassEnvelope = new Tone.FrequencyEnvelope({
        attack: 0.01,
        release: 0.5,
        baseFrequency: 50,
        octaves: 3,
    })
    const highpassEnvelope = new Tone.FrequencyEnvelope({
        attack: 0.01,
        release: 1,
        baseFrequency: 10,
        octaves: 5,
    })
    const outputGain = new Tone.Gain(0.5);
    const outputFilter = new Tone.Filter({
        frequency:500,
        type:'lowpass',
        Q:0,
    });

    noise.chain(noiseToPitchGain,lowpass.frequency);
    noise.chain(noiseGain,lowpass,highpass,ampEnvelope,outputGain,outputFilter,Tone.Destination);
       lowpass.chain(highpass,ampEnvelope,Tone.Destination);
    lowpassEnvelope.connect(lowpass.frequency);
    highpassEnvelope.connect(highpass.frequency);

    return () => {
        console.log('return')
        const now = Tone.now();
        ampEnvelope.triggerAttackRelease(now,0.001,1);
        lowpassEnvelope.triggerAttackRelease(now,0.001,1);
        highpassEnvelope.triggerAttackRelease(now,0.001,1);
    }
}
