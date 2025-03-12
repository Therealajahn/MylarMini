function makeElements({
			elementTag,
			parent,
			listOfClassLists,
			listOfChildClassLists,
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
		parent.appendChild(element);
		if(listOfChildClassLists){
			console.log('child class list list: ',listOfClassLists);
			makeElements({
				elementTag: 'p',
				parent: element,
				listOfClassLists: listOfChildClassLists,
			});
		}
	});
};


const sequencer = document.querySelector('sequencer-compose');

const pitchList = [
 'pitch-one',
 'pitch-two',
];

const pList = [
	'p1',
	'p2',
];

makeElements({
	elementTag: 'section',
	parent: sequencer,
	listOfClassLists: [pitchList,pList],
	listOfChildClassLists:[pList,pitchList],
});

//  {
//		elementTag:'p',
//		listOfClassLists: [pList],
//	},	       






