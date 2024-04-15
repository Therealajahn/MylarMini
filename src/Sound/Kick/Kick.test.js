import react from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Kick from './Kick.js'; // Import your React component

// Mock the Tone.js library
jest.mock('tone', () => ({
  Oscillator: jest.fn(() => ({
    toDestination: jest.fn()
  })),
  Envelope: jest.fn(() => ({
    toDestination: jest.fn(),
    triggerAttackRelease: jest.fn()
  }))
}));

describe('Kick', () => {
  it('plays the kick sound when button is clicked', () => {
    const { getByText } = render(<Kick/>);
    const playButton = getByText('Play Kick');

    // Click the button
    fireEvent.click(playButton);

    // Check if the oscillator's start method is called
    expect(Tone.Oscillator.mock.instances[0].start).toHaveBeenCalled();

    // Check if the envelope's triggerAttackRelease method is called
    expect(Tone.Envelope.mock.instances[0].triggerAttackRelease).toHaveBeenCalledWith(0.1);
  });
});
