import { createElement } from 'react';

//TODO pass down a prop function to increment the number of times a repetition has been made 
//...for each type of element
export default function RepeatElement({repetitions, element, props,listProp,list, countKeys, countValues, children}){
    function renderElements(){
        return(
            //generate an array of repeated elements
            Array(repetitions).fill(0).map((elements,i) => {
                //Add a repective value from a list for a given prop for all elements
                if(list){
                    props[listProp] = list[i];
                }

                if(countKeys){
                    // generate a number beside each value of each given key value pair
                    countKeys.forEach((key,j) => {
                        props[countKeys[j]] = `${countValues[j]}${i + 1}`
                    });
                }
                    return createElement(element,props,children)
                }
            )
        )
    }
    return renderElements();
}
