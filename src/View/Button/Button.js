export default function Button({type,dataTestid, bottomColor, marginTop, width, topColor,gridArea,toKey}) {
    function renderSquareButton(){
        return(
            <div  data-testid={`${dataTestid? dataTestid : 'square-button'}`} className='button' style={{
                display:'grid',
                height:'100%',
                width:'100%',
                marginTop:`${marginTop}`,
                gridArea:`${gridArea ? gridArea : ''}`
            }}>
               <div className='button-top'
                   style={{
                        width:`${width ? width : '1.6vw'}`,
                        height:'1.6vw',
                        alignSelf:'center',
                        justifySelf:'center',
                        backgroundColor:'#000',
                        borderRadius:'.25vw',
                        border: 'solid .25vw white',
                        zIndex:'1000',
                    }}></div>

               <div className='button-bottom'
                   style={{
                        position:'absolute',
                        marginTop:'1vw',
                        width:`${width ? width : '1.6vw'}`,
                        height:'1.6vw',
                        alignSelf:'center',
                        justifySelf:'center',
                        backgroundColor:`${bottomColor ? bottomColor : '#000'}`,
                        borderRadius:'.25vw',
                        border: 'solid .25vw white',
                        zIndex:'900',
                    }}></div>
           </div>
        )
    }

    function renderCircleButton(){
        return(
           <div  data-testid={`${dataTestid? dataTestid : 'circle-button'}`} className='button' style={{
               display:'grid',
               height:'100%',
               width:'100%',
               marginTop:`${marginTop}`,
               gridArea:`${gridArea ? gridArea : ''}`,
            }}>
               <div className='button-top'
                   style={{
                        width:`${width ? width : '1.6vw'}`,
                        height:'1.6vw',
                        alignSelf:'center',
                        justifySelf:'center',
                        backgroundColor:`${topColor ? topColor : '#000'}`,
                        borderRadius:'50%',
                        zIndex:'1000',
                    }}></div>

               <div className='button-bottom'
                   style={{
                        position:'absolute',
                        marginTop:'1vw',
                        width:`${width ? width : '1.6vw'}`,
                        height:'1.6vw',
                        alignSelf:'center',
                        justifySelf:'center',
                        backgroundColor:`${bottomColor ? bottomColor : '#fff'}`,
                        borderRadius:'50%',
                        zIndex:'900',
                    }}></div>
           </div>
        )
    }

    switch(type){
        case "square":
            return renderSquareButton();
        break;
        case "circle":
            return renderCircleButton();
        break;
        default:
            throw new Error(`${gridArea} has been given no type`)
            console.log("This button has been given no type");
    }
};
