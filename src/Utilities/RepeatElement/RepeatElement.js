import { createElement } from 'react';

export default function RepeatElement({repetitions, element, props, countKey, countValue, children}){
    function renderElements(){
        console.log("element",element)
        return(
            Array(repetitions).fill(0).map((elements,i) => {
                props[countKey] = `${countValue}${i + 1}`;
                return createElement(element,props,children)
                }
            )
        )
    }
    return renderElements();
}
