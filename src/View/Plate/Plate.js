import Button from '../Button/Button.js';
import Knob from '../Knob/Knob.js';
import Fader from '../Fader/Fader.js';
import Keys from '../Keys/Keys.js';

export default function Plate({gridArea,plateColor,width,height,alignSelf,marginTop,name}) {
    function getModule(){
        switch(name){
            case 'rhythm':
                return renderRhythm();
            break;
            case 'tails':
                return renderTails();
            break;
            case 'kick':
                return renderKick();
            break;
            case 'hat':
                return renderHat();
            break;
            case 'clap':
                return renderClap();
            break;
            case 'pitch':
                return renderPitch();
            break;
        };
    };

    function renderRhythm(){
//         const buttonRow = {
//             display:'grid',
//             width:'100%',
//             height:'100%',
//             alignSelf:'start',
//             justifySelf:'center',
//             gridTemplateColumns: 'repeat(4,1fr)'
//         }

        const createButtonRow = (buttonNumber,marginTop,bottomColor) => (
            <div style={{
                    display:'grid',
                    width:'100%',
                    height:'100%',
                    alignSelf:'start',
                    justifySelf:'center',
                    gridTemplateColumns: 'repeat(4,1fr)'
            }}>
                {repeatButtons(buttonNumber,marginTop,bottomColor)}
            </div>
        )

        const repeatButtons = (buttonNumber,marginTop,bottomColor) => (
                Array(buttonNumber).fill(0).map((button,i) => 
                    <Button  
                        type={'square'} 
                        marginTop={`${marginTop}`} 
                        bottomColor={`${bottomColor}`}
                    />
                )
        )
    return(
            <div className='ButtonFrame'
            style={{
                display:'grid',
                width:'95%',
                height:'40%',
                alignSelf:'center',
                justifySelf:'center',
                backgroundColor:'#404240',
                borderRadius:'1vw',
                border: 'solid .2vw white',
                gridTemplateRows:'repeat(4,1fr)',
            }}>

                {createButtonRow(4,'-1vw','#B9B9B9')}
                {/*
                {repeatButtons(4,'-1vw','#B9B9B9')}
                */}
                {/*
                <Button  type={'square'} marginTop={'-1vw'} bottomColor='#B9B9B9'/>
                <Button  type={'square'} marginTop={'-1vw'} bottomColor='#B9B9B9'/>
                <Button  type={'square'} marginTop={'-1vw'} bottomColor='#B9B9B9'/>
                <Button  type={'square'} marginTop={'-1vw'} bottomColor='#B9B9B9'/>
                */}
{/*
                {/*
                {repeatButtons(4,'0vw')}
                */}
                {/*
                <Button type={'square'} marginTop={'0vw'}/>
                <Button type={'square'} marginTop={'0vw'}/>
                <Button type={'square'} marginTop={'0vw'}/>
                <Button type={'square'} marginTop={'0vw'}/>
                */}

                {/*
                {repeatButtons(4,'-.3vw')}
                */}
                {/*
                <Button type={'square'} marginTop={'-.3vw'}/>
                <Button type={'square'} marginTop={'-.3vw'}/>
                <Button type={'square'} marginTop={'-.3vw'}/>
                <Button type={'square'} marginTop={'-.3vw'}/>
                */}
        
            <div className= 'Spacebar'
            style={{
                display:'grid',
                width:'100%',
                height:'100%',
                alignSelf:'start',
                justifySelf:'center',
            }}>
                <Button type={'square'} width="8.5vw"/>
            </div>
           </div>
    )};

    function renderTails(){
        return(
            <div className='ControlFrame' 
            style={{
                display:'grid',
                width:'95%',
                height:'33%',
                marginTop:'17%',
                alignSelf:'center',
                justifySelf:'center',
                backgroundColor:'#404240',
                borderRadius:'1vw',
                border: 'solid .2vw white',
                gridTemplateRows:'repeat(4,1fr)',
                gridTemplateColumns:'repeat(4,1fr)',
                gridTemplateAreas:`
                    "knob1 knob2 knob3 knob4"
                    "fader1 fader2 fader3 fader4"
                    "fader1 fader2 fader3 fader4"
                    "fader1 fader2 fader3 fader4"
                `,
            }}>
                <Knob gridArea={'knob1'} marginTop={'-3vw'}/>
                <Knob gridArea={'knob2'} marginTop={'-3vw'}/>
                <Knob gridArea={'knob3'} marginTop={'-3vw'}/>
                <Knob gridArea={'knob4'} marginTop={'-3vw'}/>
                <Fader gridArea={'fader1'} marginTop={'-1.5vw'} marginLeft={'.6vw'}/>
                <Fader gridArea={'fader2'} marginTop={'-1.5vw'} marginLeft={'.6vw'}/>
                <Fader gridArea={'fader3'} marginTop={'-1.5vw'} marginLeft={'.6vw'}/>
                <Fader gridArea={'fader4'} marginTop={'-1.5vw'} marginLeft={'.6vw'}/>
            </div>
        );
    };

    function renderKick(){
        return(
            <div style={{
                display:'grid',
                height:'50%',
                alignSelf:'center',
                gridTemplateRows:'repeat(3,1fr)',
            }}>
                <Knob width={'70%'}/>
                <Knob width={'70%'}/>
                <Knob width={'70%'}/>
            </div>
        );
    };

    function renderHat(){
        return(
            <div style={{
                display:'grid',
                height:'50%',
                alignSelf:'center',
                gridTemplateRows:'repeat(3,1fr)',
            }}>
                <Knob width={'70%'}/>
                <Knob width={'70%'}/>
                <Knob width={'70%'}/>
            </div>
        );
    };

    function renderClap(){
        return(
            <div style={{
                display:'grid',
                height:'50%',
                alignSelf:'center',
                gridTemplateRows:'repeat(3,1fr)',
            }}>
                <Knob width={'70%'}/>
                <Knob width={'70%'}/>
                <Knob width={'70%'}/>
            </div>
        );
    };

    function renderPitch(){
        return(
            <div style={{
                display:'grid',
                height:'40%', 
                width:'90%',
                alignSelf:'center',
                justifySelf:'center',
                gridTemplateColumns:'4fr 6fr',
            }}>
                <div style={{
                    display:'grid',
                    height:'80%',
                    gridTemplateRows:'repeat(4,1fr)',
                }}>
                    <Knob width="90%"/>
                    <Knob width="90%"/>
                    <Knob width="90%"/>
                    <Knob width="90%"/>
                </div>
                <Keys/>
            </div>
        );
    };

// Main Render
    return(
        <div style={{
            display:'grid',
            width:`${width ? width : '92%'}`,
            height:`${height ? height : '80%'}`,
            alignSelf: `${alignSelf ? alignSelf : 'start'}`,
            justifySelf: 'center',
            gridArea: gridArea,
            marginTop: marginTop,
            backgroundColor: `${plateColor ? plateColor : '#aaaaaa'}`,
            borderRadius: '1vw',
            border: 'solid .38vw white'
        }}>
            {getModule()} 
        </div>
    );
}
