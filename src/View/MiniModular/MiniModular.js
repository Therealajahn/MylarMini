import Plate from '../Plate/Plate';
import RepeatElement from '../../Utilities/RepeatElement/RepeatElement.js';

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

    let mainPlates = 
        <RepeatElement
            repetitions={9}
            element={Plate}
            props={{
                height:'100%'
            }}
            listProp='type'
            list={[
                'rhythm',
                'tails',
                'kick',
                'hat',
                'clap',
                'pitch',
                'chords',
                'wave',
                'effects',

            ]}
            countKeys={['key']}
            countValues={['plate']}
        />

    return(
        <div data-testid="back-plate" style={backPlate}>
            <Plate
                dataTestId='top-plate'
                gridArea='top'
                alignSelf='center'
                backgroundColor="#aaaaaa"
            />
            <Plate
                dataTestId='mid-plate'
                gridArea='mid'
                backgroundColor="#aaaaaa"
            />
            <div data-testid='main-plate' 
                style={mainPlateWrapper}>
                {mainPlates}
            </div>
        </div>
    )

};
