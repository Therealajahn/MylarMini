import { render, fireEvent, screen } from '@testing-library/react';
import { useState } from 'react';
import * as Tone from 'tone';
import Sound from './Sound.js';

beforeEach(() => {
    Tone.mockClear();
})

jest.mock('tone');

describe('In Sound',() => {
    const renderSound = () => {
        render(<Sound/>)
    }
    test('audio context is started',() => {
        renderSound(); 
        expect(Tone.start()).toHaveBeenCalled();
    })
    test('AmplitudeEnvelope is called',() => {
        renderSound();
        expect(Tone.AmplitudeEnvelope()).toHaveBeenCalled();
    })
})



