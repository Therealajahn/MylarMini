import { createElement } from 'react';
import Button from '../Button/Button.js';
import RepeatElement from '../../Utilities/RepeatElement/RepeatElement.js';

export default function Keys(){

    return(
        <div style={{
            display:'grid',
            height:'100%',
            backgroundColor:'#818181',
            gridTemplateRows:'repeat(7,1fr)',
            gridTemplateColumns:'1fr 1fr',
            gridTemplateAreas:`
                "black1 ."
                "black2 white1"
                "black3 white2"
                "black4 ."
                "black5 white3"
                "black6 white4"
                "black7 white5"
            `
        }}>
            <RepeatElement 
                repetitions={7}
                element={Button}
                props={{
                    type:'circle',
                }}
                countKey='gridArea'
                countValue='black'
            />
            <RepeatElement 
                repetitions={5}
                element={Button}
                props={{
                    type:'circle',
                    topColor:'#fff',
                    bottomColor:'#000',
                    marginTop:'-50%',
                }}
                countKey='gridArea'
                countValue='white'
            />
        </div>     
    );
};
