import { render, screen, cleanup } from '@testing-library/react';
import Plate from './Plate.js';

afterEach(() => {
    cleanup();
});

jest.mock('./Plate.js',(props) => "huh?")

const plateMock = jest.fn();

describe('Plate is rendered in all its many flavors',() => {
    const renderPlate = () => {
        <Plate/>
    }

    it('renders a rhythm plate',() => {
        renderPlate();
        screen.debug();
    })
})
