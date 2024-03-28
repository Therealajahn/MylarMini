export default function Button({bottomColor, marginTop, width}) {
   return(
       <div className='button' style={{display:'grid',height:'100%',width:'100%',marginTop:`${marginTop}`}}>
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
};
