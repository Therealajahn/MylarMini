function makeElementsFactory(){
		let crossClassIndex = 0;
		function repeatElement ({
					elementTag,
					parent,
					listOfClassLists,
					childrenMap,
					propList,
					childClasses,
					classString,
		}) 
		{
			let crossIndex = 0;
			let element = {};

      function createFromClassLists(){
		   const [ firstList ] = listOfClassLists;
		   firstList.forEach((classItem,i) => {
		   	element = document.createElement(elementTag);
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
		   	parent.appendChild(element);
		  	console.log(`create element:`,element);
				if(childrenMap){
					makeChildFromMap();
					console.log('child condition',element);
				};
		   });
		  };

      function makeChildFromMap(){
		  	console.log('makeChildFromMap');
		   for(const child of childrenMap){
		   	repeatElement({
		   		elementTag: child.tag,
		   		parent: element,
		   		childClasses:child.classes,
		   		propList:child.props,
		   	});				
		   }
		  };
			if(listOfClassLists){
				createFromClassLists();
				console.log('class list condition',element);
			};
			if(childClasses){
			 const child = document.createElement(elementTag);
				console.log('child classes condition',child);
			 child.setAttribute(
			 	'class',
			 	classString,
			 );
			 if(propList){
			 	propList.forEach(prop => {
			 		child.setAttribute(
			 			prop.name,
			 			prop.value,
			 		);
			 	});
			 }
			 parent.appendChild(child);
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
	parent: stages,
	listOfClassLists: [pitchList],
	childrenMap: [
		{tag:'p',classes:'select-indicator'},
		{tag:'p',classes:'note-indicator'},
		{tag:'trigger-light',
		 class:'grid-item',
		 classes: triggerList,
		 parentList: pitchList,
		 props:[{name:'id',value:'what?'}],
		},
		//{tag:'figure',
		// class:[octaveList,'octave-indicator','grid-item'],
		//},
	],
});







