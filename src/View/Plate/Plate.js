export default function Plate({gridArea,plateColor,width,height,alignSelf,marginTop,name}) {
    function getModule(){
        switch(name){
            case 'rhythm':
                return renderRhythm();
            break;
        }
    }
    function renderRhythm(){
        console.log('renderRhythm')
        return(
            // Button Frame
            <div style={{
                display:'grid',
                width:'95%',
                height:'40%',
                alignSelf:'center',
                justifySelf:'center',
                backgroundColor:'#404240',
                borderRadius:'1vw',
                border: 'solid .2vw white'
            }}></div>
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
