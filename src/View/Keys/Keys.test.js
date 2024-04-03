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
        expect(screen.getByTestId('main-key'));
    })

    it("renders 5 secondary keys",() => {
        renderKeys();
        expect(screen.getByTestId('secondary-key'));
    })
})

