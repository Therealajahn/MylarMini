export default function Fader({marginTop,marginLeft, gridArea}){
    return(
        <svg viewBox="0 0 33 136" fill="none" xmlns="http://www.w3.org/2000/svg"
           style={{
               height:'110%',
               justifySelf:'center',
               marginTop:`${marginTop ? marginTop : '0vw'}`,
               marginLeft:`${marginLeft ? marginLeft : '0vw'}`,
               gridArea:`${gridArea ? gridArea : ''}`,
           }}
        >
            <rect x="6" width="7" height="136" rx="3.5" fill="black"/>
            <rect x="1.5" y="107.382" width="17" height="17" rx="6.5" fill="#B9B9B9" stroke="white" stroke-width="3"/>
            <rect x="1.5" y="101.5" width="17" height="17" rx="6.5" fill="black" stroke="white" stroke-width="3"/>
        </svg>
    )
}
