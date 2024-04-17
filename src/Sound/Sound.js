import { useEffect,useState } from 'react';
import * as Tone from 'tone';


export default function Sound(){
    const [startAudio,flipStartAudio] = useState(false);
    useEffect(()=>{

        if(startAudio){
            const oscillator = new Tone.Oscillator(440,"sine").toDestination();
        }

        return () => {
            console.log('clean up')
        }
    },[startAudio])
    // oscillator -> destination, envelope -> destination(short)
    return(
        <button onClick={() => flipStartAudio(true)}>Start Audio Context</button>
    )
}
