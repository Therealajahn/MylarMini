import Button from '../Button/Button.js';
import Knob from '../Knob/Knob.js';
import Fader from '../Fader/Fader.js';
import Keys from '../Keys/Keys.js';
import RepeatElement from '../../Utilities/RepeatElement/RepeatElement.js';

export default function Plate({gridArea,plateColor,width,height,alignSelf,marginTop,dataTestId,type}) {
    function getModule(){
        switch(type){
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
            case 'chords':
                return renderChords();
            break;
            case 'wave':
                return renderWave();
            break;
            case 'effects':
                return renderEffects();
            break;
        };
    };

    function renderRhythm(){
        const createButtonRow = (buttonNumber,marginTop,bottomColor) => (

            <div style={{
                    display:'grid',
                    width:'100%',
                    height:'100%',
                    alignSelf:'start',
                    justifySelf:'center',
                    gridTemplateColumns: 'repeat(4,1fr)',
            }}>
                <RepeatElement
                    repetitions={buttonNumber}
                    element={Button}
                    props={{
                        type:'square',
                        marginTop:`${marginTop}`,
                        bottomColor:`${bottomColor}`
                    }}
                    countKeys={['key']}
                    countValues={['rhythm']}
                />
            </div>
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
                {createButtonRow(4,'0vw','black')}
                {createButtonRow(4,'-.3vw','black')}
        
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
                <RepeatElement
                    repetitions={4}
                    element={Knob}
                    props={{
                        marginTop:'-3vw',
                    }}
                    countKeys={['gridArea','key']}
                    countValues={['knob','knob']}
                />
                <RepeatElement
                    repetitions={4}
                    element={Fader}
                    props={{
                        marginTop:'-1.5vw',
                        marginLeft:'.6vw',
                    }}
                    countKeys={['gridArea','key']}
                    countValues={['fader','fader']}
                />
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
                <RepeatElement
                    repetitions={3}
                    element={Knob}
                    props={{
                        width:'70%'
                    }}
                    countKeys={['key']}
                    countValues={['knob']}
                />
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
                <RepeatElement
                    repetitions={3}
                    element={Knob}
                    props={{
                        width:'70%'
                    }}
                    countKeys={['key']}
                    countValues={['knob']}
                />
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
                <RepeatElement
                    repetitions={3}
                    element={Knob}
                    props={{
                        width:'70%'
                    }}
                    countKeys={['key']}
                    countValues={['knob']}
                />
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
                    <RepeatElement
                        repetitions={4}
                        element={Knob}
                        props={{
                            width:'90%'
                        }}
                        countKeys={['key']}
                        countValues={['knob']}
                    />
                </div>
                <Keys/>
            </div>
        );
    };

    function renderChords(){
        return(
            <div style={{
                display:'grid',
                height:'60%', 
                width:'90%',
                alignSelf:'center',
                justifySelf:'center',
                justifyItems:'center',
                gridTemplateColumns:'1fr',
                gridTemplateRows:'1fr 6fr',
            }}>
                <div style={{
                    display:'grid',
                    gridTemplateColumns:'1fr 1fr',
                    gridTemplateRows:'1fr',
                }}>
                    <RepeatElement
                        repetitions={2}
                        element={Knob}
                        props={{
                            width:'100%',
                        }}
                        countKeys={['key']}
                        countValues={['knob']}
                    />
                </div>
                <Keys width='90%'/>
            </div>
        )
    }
    function renderWave(){
        return(
            <div style={{
                display:'grid',
                height:'70%', 
                width:'100%',
                alignSelf:'center',
                justifySelf:'center',
                justifyItems:'center',
                gridTemplateColumns:'1fr',
                gridTemplateRows:'1fr 1fr 1fr',
            }}>
                <Knob width='70%'/>
                <Knob width='45%' alignSelf='center'/>
                <div style={{
                    display:'grid',
                    width:'100%',
                    gridTemplateColumns:'1fr 1fr',
                    gridTemplateRows:'1fr',
                }}>
                    <Knob width='90%' justifySelf='start'/>
                    <Knob width='90%' justifySelf='end'/>
                </div>
            </div>
        )
    }
    function renderEffects(){
        return(
        <div style={{
            display:'grid',
            height:'60%', 
            width:'85%',
            alignSelf:'center',
            justifySelf:'center',
            justifyItems:'center',
            gridTemplateColumns:'1fr',
            gridTemplateRows:'1fr 1fr 1fr',
        }}>
            <Knob/>
            <Knob/>
            <Knob/>
        </div>
        )
    }
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
            border: 'solid .38vw white',
        }}
            data-testid={dataTestId}
            type={type}
        >
            {getModule()} 
        </div>
    );
}
