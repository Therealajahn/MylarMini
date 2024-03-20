export default function Plate({gridArea,plateColor,height,alignSelf,marginTop}) {
    return(
        <div style={{
            width:'92%',
            height:`${height ? height : '80%'}`,
            alignSelf: `${alignSelf ? alignSelf : 'start'}`,
            justifySelf: 'center',
            gridArea: gridArea,
            marginTop: marginTop,
            backgroundColor: `${plateColor ? plateColor : '#aaaaaa'}`,
            borderRadius: '15px',
            border: 'solid 3px white'
        }}>
        </div>
    );
}
