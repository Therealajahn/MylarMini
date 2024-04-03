import { createElement } from 'react';

export default function RepeatElement({repetitions, element, props, countKeys, countValues, children}){
    function renderElements(){
        return(
            //generate an array of repeated elements
            Array(repetitions).fill(0).map((elements,i) => {
                if(countKeys){
                    // generate a number beside each value of each given key value pair
                    countKeys.forEach((key,j) => {props[countKeys[j]] = `${countValues[j]}${i + 1}`});
                }
                    return createElement(element,props,children)
                }
            )
        )
    }
    return renderElements();
}
