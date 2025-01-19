import { render, screen, cleanup } from '@testing-library/react';
import Plate from './Plate.js';

afterEach(() => {
    cleanup();
});


describe('Plate is rendered in all its many flavors',() => {
    const renderPlate = (type) => (
        render(<Plate type={type}/>)
    );

    test('...a plain plate',() => {
        expect(renderPlate()).toMatchSnapshot();
    })
    test('...a rhythm plate',() => {
        expect(renderPlate('rhythm')).toMatchSnapshot();
    })
    test('...a tails plate',() => {
        expect(renderPlate('tails')).toMatchSnapshot();
    })
    test('...a kick plate',() => {
        expect(renderPlate('kick')).toMatchSnapshot();
    })
    test('...a hat plate',() => {
        expect(renderPlate('hat')).toMatchSnapshot();
    })
    test('...a clap plate',() => {
        expect(renderPlate('clap')).toMatchSnapshot();
    })
    test('...a pitch plate',() => {
        expect(renderPlate('tails')).toMatchSnapshot();
    })
    test('...a chord plate',() => {
        expect(renderPlate('chords')).toMatchSnapshot();
    })
    test('...a wave plate',() => {
        expect(renderPlate('wave')).toMatchSnapshot();
    })
    test('...a effects plate',() => {
        expect(renderPlate('effects')).toMatchSnapshot();
    })
    test('...a top plate',() => {
        expect(renderPlate('top-plate')).toMatchSnapshot();})
    test('...a middle plate',() => {
        expect(renderPlate('mid-plate')).toMatchSnapshot();})
})
