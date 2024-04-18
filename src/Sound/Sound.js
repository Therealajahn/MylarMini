import React, { useEffect,useState,useRef } from 'react';
import * as Tone from 'tone';


export default function Sound(){
    const [startAudio,flipStartAudio] = useState(false);
    const oscillator = useRef(null);
    const envelope = useRef(null);

    useEffect(()=>{

        Tone.start()
            .then(() => {
                    console.log('audio started')
                    envelope.current = new Tone.AmplitudeEnvelope({
                        attack:0.1,
                        release:0.3,
                    });
                
                    oscillator.current = new Tone.Oscillator(440,'sine').connect(envelope.current).start();
                    envelope.current.toDestination();
                });
                return () => {
                    if(oscillator.current){
                        oscillator.current.dispose();
                        console.log('audio stopped');
                    }
                }
    },[startAudio])

    return(
        <button onClick={() => flipStartAudio(true)}>Start Audio</button>
    )
}
