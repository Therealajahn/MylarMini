import { createElement } from 'react';
import Button from '../Button/Button.js';
import Knob from '../Knob/Knob.js';
import Fader from '../Fader/Fader.js';
import Keys from '../Keys/Keys.js';
import RepeatElement from '../../Utilities/RepeatElement/RepeatElement.js';

export default function Plate({gridArea,backgroundColor,width,height,alignSelf,marginTop,dataTestId,type}) {
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
            case 'mid-plate':
                return renderMidPanel();
            break;
            case 'top-plate':
                return renderTopPanel();
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
                <Button type={'square'} width='8.5vw'/>
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
                    'knob1 knob2 knob3 knob4'
                    'fader1 fader2 fader3 fader4'
                    'fader1 fader2 fader3 fader4'
                    'fader1 fader2 fader3 fader4'
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

    function renderMidPanel(){
        const pathOne = createElement('path',{
            fillRule:'evenodd',
            clipRule:'evenodd',
            d:'M141.166 70C145.552 61.1834 148 51.3583 148 41C148 29.8515 145.164 19.3206 140.129 10L7.87092 10C2.83557 19.3206 0 29.8515 0 41C0 51.3583 2.44784 61.1834 6.83356 70H141.166Z', 
            fill:'#5A5A5A',
        });
        const circleOne = createElement('circle',{
            cx:'76.5',
            cy:'40.5',
            r:'37',
            fill:'#4B4B4B',
            stroke:'white',
            strokeWidth:'7',
        })
        return(
            <div style={{
                display:'grid',
                width:'100%',
                gridTemplateColumns:'repeat(8,1fr)',
                gridTemplateRows:'1fr',
            }}
            >
                <div style={{
                    position:'relative',
                    display:'grid',
                    width:'100%',
                    gridColumn:'6 / 9',
                    justifySelf:'end',
                    alignItems:'center',
                    justifyItems:'center',
                    marginRight:'.5vw',
                    backgroundColor:'#f3f3f3',
                    borderRadius:'1vw',
                    border: '.25vw black solid'
                }}
                >
                    
                    <svg style={{marginRight:'1vw'}} width='102%' height='100%' viewBox='0 0 347 81' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            {pathOne}
                            {circleOne}
                            <rect x='179' y='15' width='137' height='60' fill='#D9D9D9'/>
                            <circle cx='249' cy='42' r='38' fill='#4B4B4B'/>
                            <circle cx='315' cy='43' r='32' fill='#4B4B4B'/>
                            <circle cx="182" cy="43" r="32" fill="#4B4B4B"/>
                    </svg>
                <div style={{
                    position:'absolute',
                    display:'grid',
                    width:'100%',
                    height:'100%',
                    gridTemplateColumns:'repeat(5,1fr)',
                    gridTemplateRows:'1fr',
                    gridTemplateAreas:`" . . knob1 knob2 knob3"`
                }}
                >
                    <Knob gridArea="knob1" width="60%" marginTop='.6vw' marginLeft=
                        '.3vw'/>
                    <Knob gridArea="knob2" width="70%"/>
                    <Knob gridArea="knob3" width="60%" marginTop='.6vw' marginLeft=
                        '-.15vw'/>
                </div>
            </div>
        </div>
        )
    }

    function renderTopPanel(){
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
            backgroundColor: `${backgroundColor ? backgroundColor : '#666666'}`,
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
