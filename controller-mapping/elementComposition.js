function makeElementsFactory(){
		let crossClassIndex = 0;
		function repeatElement ({
					elementTag,
					masterParent,
					listOfClassLists,
					childrenMap,
					propList,
					listOfChildClassLists,
					classString,
		}) 
		{
			let crossIndex = 0;
			let element = {};
      function insertClassLists(){
			 const [ firstList ] = listOfClassLists;
			 firstList.forEach((classItem,i) => {
			 	element = document.createElement(elementTag);
				console.log('comfirm running',childrenMap);
			 	let classString = ''; 
			 	listOfClassLists.forEach((list,j) => {
			 		if(j > 0){ classString += ' '; };
			 		classString += list[i];  
			 	});
			 	element.setAttribute(
			 		'class',
			 		classString,
			 	);
			 	if(propList){
			 		propList.forEach(prop => {
			 			element.setAttribute(
			 				prop.name,
			 				prop.value,
			 			);
			 		});
			 	}
			 	masterParent.appendChild(element);
			 });
		  };
      function makeChildFromMap(){
			 for(const child of childrenMap){
			 	repeatElement({
			 		elementTag: child.tag,
			 		masterParent: element,
			 		classString:child.class,
			 		propList:child.props,
			 	});				
			 }
			};
			if(listOfClassLists){
				insertClassLists();
				console.log('first if',element);
			}
		  if(childrenMap){
				makeChildFromMap();
				console.log('second if',element);
			}else{
				console.log('third if');
				const element = document.createElement(elementTag);
				element.setAttribute(
					'class',
					classString,
				);
				if(propList){
					propList.forEach(prop => {
						element.setAttribute(
							prop.name,
							prop.value,
						);
					});
				}
				masterParent.appendChild(element);
			};
		}
	return{
		repeatElement: repeatElement,
	}
}
const makeElements = makeElementsFactory();

const stages = document.querySelector('stages-replace');

const pitchList = [
	'pitch-one',
	'pitch-two',
];

const triggerList = [
	'trigger-light-one',
	'trigger-light-two',
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
		 listOfChildClassLists: triggerList,
		 parentList: pitchList,
		 props:[{name:'id',value:'what?'}],
		},
		//{tag:'figure',
		// class:[octaveList,'octave-indicator','grid-item'],
		//},
	],
});







