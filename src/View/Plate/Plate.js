import Button from '../Button/Button.js';


export default function Plate({gridArea,plateColor,width,height,alignSelf,marginTop,name}) {
    function getModule(){
        switch(name){
            case 'rhythm':
                return renderRhythm();
            break;
        }
    }

    function renderRhythm(){
        const buttonRow = {
                display:'grid',
                width:'100%',
                height:'100%',
                alignSelf:'start',
                justifySelf:'center',
                gridTemplateColumns: 'repeat(4,1fr)'
        }        
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

            <div style={buttonRow}>
                <Button  marginTop={'-1vw'} bottomColor='#B9B9B9'/>
                <Button  marginTop={'-1vw'} bottomColor='#B9B9B9'/>
                <Button  marginTop={'-1vw'} bottomColor='#B9B9B9'/>
                <Button  marginTop={'-1vw'} bottomColor='#B9B9B9'/>
            </div>

            <div style={buttonRow}>
                <Button marginTop={'0vw'}/>
                <Button marginTop={'0vw'}/>
                <Button marginTop={'0vw'}/>
                <Button marginTop={'0vw'}/>
            </div>

            <div style={buttonRow}>
                <Button marginTop={'-.3vw'}/>
                <Button marginTop={'-.3vw'}/>
                <Button marginTop={'-.3vw'}/>
                <Button marginTop={'-.3vw'}/>
        </div>
        
            <div className= 'Spacebar'
            style={{
                display:'grid',
                width:'100%',
                height:'100%',
                alignSelf:'start',
                justifySelf:'center',
            }}>
                <Button width="8.5vw"/>
            </div>
           </div>
    )

    }
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
