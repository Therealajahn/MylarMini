import Plate from '../Plate/Plate';

export default function MiniModular() {

    let backPlate = {
        width: '80vw',
        height: '50vw',
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
        gridTemplateColumns: '15fr 15fr 8fr 8fr 8fr 11fr 8fr 11fr 11fr 6fr',
        width:'92.5%',
        height:'99%',
        justifySelf:'center',
        marginTop:'-.8%',
    }
    let renderSomePlates = (renderNumber,heightArray) => {
        let plateArray = [];
        for(let i = 0; i < renderNumber; i++){
                plateArray.push(
                    <Plate
                        height= {heightArray[i] + '%'} 
                        width='90%'
                        plateColor='#666666'
                        key={i}
                    />
                )
        }
        return plateArray;
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

            <div style={mainPlateWrapper}>
                {renderSomePlates(10,[100,100,100,100,100,100,100,100,100,100])}
            </div>
        </div>
            )

};
