import { createElement } from 'react';
import Button from '../Button/Button.js';

export default function Keys(){

    const blackButtons = () => (
        Array(7).fill(0).map((button,i) => 
            <Button type='circle' gridArea={`black${i + 1}`}/>
        )
    ); 

    const whiteButtons = () => (
        Array(5).fill(0).map((button,i) =>
            <Button
                type='circle'
                topColor='#fff'
                bottomColor='#000'
                gridArea={`white${i + 1}`}
                marginTop='-50%'
            />
        )
    )     
    
    return(
        <div style={{
            display:'grid',
            height:'100%',
            backgroundColor:'#818181',
            gridTemplateRows:'repeat(7,1fr)',
            gridTemplateColumns:'1fr 1fr',
            gridTemplateAreas:`
                "black1 ."
                "black2 white1"
                "black3 white2"
                "black4 ."
                "black5 white3"
                "black6 white4"
                "black7 white5"
            `
        }}>
            {blackButtons()}
            {whiteButtons()}
            {/*
            <Button type='circle' gridArea='black1'/>
            <Button type='circle' gridArea='black2'/>
            <Button type='circle' gridArea='black3'/>
            <Button type='circle' gridArea='black4'/>
            <Button type='circle' gridArea='black5'/>
            <Button type='circle' gridArea='black6'/>
            <Button type='circle' gridArea='black7'/>
            */}
            {/*
            <Button 
                type='circle' 
                topColor='#fff' 
                bottomColor='#000'
                gridArea='white1'   
                marginTop="-50%"
            />
            <Button 
                type='circle' 
                topColor='#fff' 
                bottomColor='#000'
                gridArea='white2'   
                marginTop="-50%"
            />
            <Button 
                type='circle' 
                topColor='#fff' 
                bottomColor='#000'
                gridArea='white3'   
                marginTop="-50%"
            />
            <Button 
                type='circle' 
                topColor='#fff' 
                bottomColor='#000'
                gridArea='white4'   
                marginTop="-50%"
            />
            <Button 
                type='circle' 
                topColor='#fff' 
                bottomColor='#000'
                gridArea='white5'   
                marginTop="-50%"
            />
            */}
        </div>     
    );
};
