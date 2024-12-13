function clapInit(){
    const noise = new Tone.Noise('white').start();
    const highpass = new Tone.Filter({
        type: 'lowpass',
        frequency: 200,
        Q: 10,
    });
    const lowpass = new Tone.Filter({
        type: 'highpass',
        frequency: 200,
        Q: 10,
    });
    const audioEnvelope = new Tone.AmplitudeEnvelope({
        attack: 0.01,
        release: 0.5,
    })
    const distortion = new Tone.Distortion(0.1);

    noise.chain(lowpass,highpass,audioEnvelope,distortion,Tone.Destination);

    return () => {
        const now = Tone.now();
        audioEnvelope.triggerAttackRelease(now,0.001,1);
    }
}
