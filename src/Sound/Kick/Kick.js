import React from 'react';
import * as Tone from 'tone';

export default function Kick() {
    const oscillator = new Tone.Oscillator({
      frequency: 100,
      type: 'sine'
    }).toDestination();

    const envelope = new Tone.Envelope({
      attack: 0.001,
      decay: 0.1,
      sustain: 0,
      release: 0.5
    }).toDestination();

  function playKick() {
    this.oscillator.start();
    this.envelope.triggerAttackRelease(0.1);
  }

    return (
      <button onClick={() => this.playKick()}>Play Kick</button>
    );
}

