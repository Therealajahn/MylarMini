import Plate from '../Plate/Plate';

export default function MiniModular() {

    let backPlate = {
        width: '70vw',
        height: '45vw',
        backgroundColor: '#4E4848',
        justifySelf: 'center',
        alignSelf: 'center',
        borderRadius: '1.5vw',
        display: 'grid',
        gridTemplateRows: '20% 20% 60%',
        gridTemplateAreas: `
            'top'
            'mid'
            'main'
        `
    }
    let mainPlateWrapper = {
        gridArea: 'main',
        display: 'grid',
        gridTemplateRows: '100%',
        gridTemplateColumns: '15fr 15fr 8fr 8fr 8fr 11fr 8fr 11fr 6fr',
        width:'92.5%',
        height:'99%',
        justifySelf:'center',
        marginTop:'-.8%',
    }
    let mainPlates = [
        {height: '100%', name:'rhythm'},
        {height: '100%', name:'tails'},
        {height: '100%', name:'kick'},
        {height: '100%', name:'hat'},
        {height: '100%', name:'clap'},
        {height: '100%', name:'pitch'},
        {height: '100%', name:'chords'},
        {height: '100%', name:'wave'},
        {height: '100%', name:'fx'},
    ]
    let mainElements = mainPlates.map((plate) => (
        <Plate
            name={plate.name}
            height= {plate.height} 
            width='90%'
            plateColor='#666666'
        />
    ))

    return(
        <div style={backPlate}>
            <Plate
                gridArea='top'
                alignSelf='center'
            />
            <Plate
                gridArea='mid'
            />

            <div style={mainPlateWrapper}>
                {mainElements}
            </div>
        </div>
    )

};
