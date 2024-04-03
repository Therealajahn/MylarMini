import { render, screen, cleanup } from '@testing-library/react';
import Knob from './Knob.js';

afterEach(() => {
    cleanup();
});

describe("Knob recieving no props",() => {
    const renderKnob = () => {
        render(
            <Knob/>
        );
    }

    it('renders the correct svg element',()=>{
        renderKnob();
        expect(screen.getByTestId('knob-svg'))
    })
});

