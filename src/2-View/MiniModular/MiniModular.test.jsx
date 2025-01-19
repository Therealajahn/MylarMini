import { render, screen, cleanup } from '@testing-library/react';
import MiniModular from './MiniModular.js';

afterEach(() => {
    cleanup();
});

describe("MiniModular renders the three sections of the modular, and a back plate",() =>{

    let renderModular = () => {
        render(
            <MiniModular/>
        )
    }   


    it('renders a back plate',() => {
        renderModular();
        expect(screen.getByTestId('back-plate'))
    })

    it('renders a top plate',() => {
        renderModular();
        expect(screen.getByTestId('top-plate'))
    })

    it('renders a middle plate',() => {
        renderModular();
        expect(screen.getByTestId('mid-plate'))
    })

    it('renders a main plate',() => {
        renderModular();
        expect(screen.getByTestId('main-plate'))
    })
})
