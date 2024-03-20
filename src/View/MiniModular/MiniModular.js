import Plate from '../Plate/Plate';

export default function MiniModular() {

//             <div style={{
//                 width:'98%',
//                 height:'80%',
//                 alignSelf: 'center',
//                 justifySelf: 'center',
//                 gridArea: 'top',
//                 backgroundColor: '#AAAAAA',
//                 borderRadius: '10px',
//                 border: 'solid 3px white'
//             }}>
//             </div>
    //
    let backPlate = {
        width: '80vw',
        height: '50vw',
        backgroundColor: '#4E4848',
        justifySelf: 'center',
        alignSelf: 'center',
        borderRadius: '15px',
        display: 'grid',
        gridTemplateRows: '20% 20% 60%',
        gridTemplateAreas: `
            'top'
            'mid'
            'main'
        `
    }
    return(
        <div style={backPlate}>
            <Plate
                gridArea='top'
                alignSelf='center'
            />
            <Plate
                gridArea='mid'
            />
            <Plate
                gridArea='main'
                height='98.3%'
                marginTop='-.8%'
            />
    </div>
    )

};
