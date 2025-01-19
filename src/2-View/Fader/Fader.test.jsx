import { render, screen, cleanup } from '@testing-library/react';
import Fader from './Fader.js';

afterEach(() => {
    cleanup();
});

describe('Fader when its not receiving props',() => {
    const faderEmpty = () => { 
        render(
            <Fader/>
        ); 
    };

    it("renders a fader",() => {
        faderEmpty();
        expect(screen.getByTestId('fader-svg'));
    })
})
