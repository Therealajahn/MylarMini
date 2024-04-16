import { useEffect, useState, useTransition } from 'react';
import * as Tone from 'tone';

export default function Kick() {
    const [oscillator] = useState(new Tone.Oscillator({
      frequency: 100,
      type: 'sine'
    }).toDestination());

    const [envelope] = useState(new Tone.Envelope({
      attack: 0.001,
      decay: 0.1,
      sustain: 0,
      release: 0.5
    }).toDestination());

   function playKick() {
     oscillator.start();
     envelope.triggerAttackRelease(0.1);
     setTimeout(oscillator.stop(),100);
   }
   
    useEffect(() => {
        console.log("effect");
    },[])

    return (
        <button onClick={() => playKick()}>Play Kick</button>
    );
}

