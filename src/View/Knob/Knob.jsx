import { createElement } from 'react';

export default function Knob({gridArea,marginTop,marginLeft,width,height,alignSelf,justifySelf}){
    //stroke-width was throwing an error, converted the elements using it
    const pathOne = createElement("path",{
        d:"M51.5 45.5696C51.5 59.3346 40.3108 70.5 26.5 70.5C12.6892 70.5 1.5 59.3346 1.5 45.5696C1.5 31.8047 12.6892 20.6393 26.5 20.6393C40.3108 20.6393 51.5 31.8047 51.5 45.5696Z",
        fill:"#B9B9B9",
        stroke:"white",
        strokeWidth:"3",
    });
    const anotherPath = createElement("path",{
        d:"M46.931 21.8734C46.931 33.1216 37.7875 42.2468 26.5 42.2468C15.2125 42.2468 6.06897 33.1216 6.06897 21.8734C6.06897 10.6252 15.2125 1.5 26.5 1.5C37.7875 1.5 46.931 10.6252 46.931 21.8734Z", 
        fill:"black",
        stroke:"white",
        strokeWidth:"3",
    })
    const lineOne = createElement("line",{
        x1:"6.47819",
        y1:"17.2549",
        x2:"1.47819",
        y2:"46.2549",
        stroke:"white",
        strokeWidth:"3",
    })
    const lineTwo = createElement("line",{
        x1:"46.4782",
        y1:"16.7451",
        x2:"51.4782",
        y2:"45.7451",
        stroke:"white",
        strokeWidth:"3",
    })
   return(
       <svg data-testid="knob-svg" viewBox="0 0 53 72" fill="none" xmlns="http://www.w3.org/2000/svg"
           style={{
               height:`${height ? height : 'auto'}`,
               width:`${width ? width : 'auto'}`,
               marginTop:`${marginTop ? marginTop : '0vw'}`,
               marginLeft:`${marginLeft ? marginLeft : '0vw'}`,
               gridArea:`${gridArea ? gridArea : ''}`,
               alignSelf:`${alignSelf ? alignSelf : ''}`,
               justifySelf:`${justifySelf ? justifySelf : 'center'}`,
           }}
       >
        {pathOne}
        <path d="M4.88649 19.1393H48.1273L53 45.5696H0L4.88649 19.1393Z" fill="#B9B9B9"/>
        {anotherPath}
        {lineOne}
        {lineTwo}
        <mask id="mask0_1_107" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="4" y="0" width="45" height="44">
        <ellipse cx="26.5" cy="21.8734" rx="21.931" ry="21.8734" fill="#8C8C8C"/>
        </mask>
        <g mask="url(#mask0_1_107)">
        <rect x="22.8448" y="-7.29114" width="8.22414" height="25.519" fill="white"/>
        <ellipse cx="26.9569" cy="17.7722" rx="4.11207" ry="4.10127" fill="white"/>
        </g>
        </svg>
   ) 
}
