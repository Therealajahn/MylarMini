import { render, screen, cleanup } from '@testing-library/react';
import Button from './Button.js';

afterEach(() => {
    cleanup();
});

describe('Button when it recieves correct type props',() => {
    const squareButton  = () => {
        render(
        <Button type='square'/>
        );
    }

    it("renders a square button", () => {
        squareButton();
       expect(screen.getByTestId('square-button'));
    }) 

    const circleButton = () => {
        render(
        <Button type='circle'/>
        );
    }

    it("renders a circle button", () => {
        circleButton();
        expect(screen.getByTestId('circle-button'));
    })
})


