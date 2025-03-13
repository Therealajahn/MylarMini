function makeElementsFactory(){
	return{
		repeatElement: function({
					elementTag,
					masterParent,
					listOfClassLists,
					listOfChildClassLists,
					childrenMap,
		}) 
		{
			const [ firstList ] = listOfClassLists;
			firstList.forEach((classItem,i) => {
				const element = document.createElement(elementTag);
				let classString = ''; 
				listOfClassLists.forEach((list,j) => {
					if(j > 0){ classString += ' '; };
					classString += list[i];  
				});
				element.setAttribute(
					'class',
					classString,
				);
				masterParent.appendChild(element);
				if(listOfChildClassLists){
					console.log('child class list list: ',listOfClassLists);
				}
			 })
			}
		}
}
const makeElements = makeElementsFactory();

const stages = document.querySelector('stages-replace');

const pitchList = [
	'pitch-one',
	'pitch-two',
];

makeElements.repeatElement({
	elementTag: 'section',
	masterParent: stages,
	listOfClassLists: [pitchList],
	childrenMap: [
		{tag:'p',class:'select-indicator'},
		{tag:'p',class:'note-indicator'},
		{tag:'trigger-light',
		 class:'grid-item',
		 crossClass:triggerList,},
		{tag:'figure',
		 class:'octave grid-item',
		 numberClasses:{start:8,increment:-1},
	],
});







