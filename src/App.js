import MiniModular from './View/MiniModular/MiniModular.js';
import Sound from './Sound/Sound.js';
import './App.css';

export default function App() {
    let appStyle = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        backgroundColor: '#707070'
    };
    return (
        <div data-testid="app-div" className='App' style={appStyle}>
            <Sound/>
            <MiniModular/> 
        </div>
    );
};

