import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterEach(() => {
    cleanup();
})

describe('App renders',() => {
    const renderApp = () => {
        render(
            <App/>
        )
    }  
    it("renders the app",() => {
        renderApp()
        expect(screen.getByTestId('app-div'));
    })
})
