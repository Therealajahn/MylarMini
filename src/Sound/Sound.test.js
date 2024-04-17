import { render, fireEvent, screen } from '@testing-library/react';
import * as Tone from 'tone';
import Sound from './Sound.js';

jest.mock('tone',() => ({
    Oscillator: jest.fn(() => ({
        toDestination:jest.fn(),
    }))
}));




