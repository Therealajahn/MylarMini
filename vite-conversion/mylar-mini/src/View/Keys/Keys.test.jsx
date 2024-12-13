import { render, screen, cleanup } from '@testing-library/react';
import Keys from './Keys.js';

afterEach(() => {
    cleanup();
});

describe("there is a correct amount of keys",() => {
    const renderKeys = () => {
        render(
            <Keys/>
        );
    }

    it("renders 7 main keys",() => {
        renderKeys();
        let mainKeys = screen.getAllByTestId('main-key');
        expect(mainKeys.length).toBe(7);
    })

    it("renders 5 secondary keys",() => {
        renderKeys();
        let secondaryKeys = screen.getAllByTestId('secondary-key')
        expect(secondaryKeys.length).toBe(5);
    })
})

