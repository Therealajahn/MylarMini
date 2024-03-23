export default function Plate({gridArea,plateColor,width,height,alignSelf,marginTop}) {
    return(
        <div style={{
            width:`${width ? width : '92%'}`,
            height:`${height ? height : '80%'}`,
            alignSelf: `${alignSelf ? alignSelf : 'start'}`,
            justifySelf: 'center',
            gridArea: gridArea,
            marginTop: marginTop,
            backgroundColor: `${plateColor ? plateColor : '#aaaaaa'}`,
            borderRadius: '10px',
            border: 'solid 3px white'
        }}>
        </div>
    );
}
