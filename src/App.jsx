import MiniModular from './View/MiniModular/MiniModular.jsx';
import Sound from './Sound/Sound.jsx';

export default function App() {
    let appStyle = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        backgroundColor: '#707070'
    };
    return (
        <div data-testid="app-div" className='App' style={appStyle}>
            <MiniModular/> 
            <Sound/>
        </div>
    );
};

