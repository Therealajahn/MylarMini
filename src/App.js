import MiniModular from './View/MiniModular/MiniModular.js';
import './App.css';

function App() {
    let appStyle = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        backgroundColor: '#707070'
    };
    return (
        <div className='App' style={appStyle}>
            <MiniModular/> 
        </div>
    );
};

export default App;
