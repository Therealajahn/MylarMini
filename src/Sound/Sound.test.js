import react from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sound from './Sound.js';

describe('Sound',() => {
    const renderSound = () => {
        render(<Sound/>);
    };

    it('renders Kick component',() => {
       renderSound(); 
       expect(screen.getByTestId('kick-in-sound'));
    })
})
