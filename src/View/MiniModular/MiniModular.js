import Plate from '../Plate/Plate';

export default function MiniModular() {

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
    let mainPlateWrapper = {
        gridArea: 'main',
        display: 'grid',
        gridTemplateRows: '100%',
        gridTemplateColumns:'repeat(10,10%)',
        width:'92.5%',
        height:'99%',
        justifySelf:'center',
        marginTop:'-.8%',
    }
    let renderSomePlates = (renderNumber) => {
        return Array(renderNumber).fill(
            <Plate
                height= '99%'
                width='90%'
            />
        ) 
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
                {renderSomePlates(10)}
            </div>
        </div>
            )

};
