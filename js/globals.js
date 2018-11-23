$(document).ready(function(){
	grid();

})

var rows=15
var colums=20;

function grid() {
	var ImageArray = [];
	for (var i = 0; i < ; i++) {
		cardArray.push(i);
		cardArray.push(i);
	}

	var shuffleCards = [];
	while (cardArray.length > 0) {
		var r = Math.floor(Math.random() * cardArray.length);
		shuffleCards.push(cardArray[r]);
		cardArray.splice(r, 1);///how many items to get rid of//
	}
	document.getElementById("game").innerHTML = "";

	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < columns; j++) {
			createCard(shuffleCards.pop(), rows, columns);
			console.log("check");


		}
		game.appendChild(document.createElement("br"));//add break tag at end of each row-issue with this//
	}

}

function createCard(cardNum, rows, columns) {
	var card = document.createElement("img");
	card.num = cardNum;
	card.src = "Images/logo.jpg";
	card.style.maxWidth = 100 / columns + "%";//mention positioning in freetext
	card.style.maxHeight = 95 / rows + "vh";
	card.onclick = cardClicked;
	game.appendChild(card);
}


function handleResize() {
	document.querySelectorAll("#game img").forEach(function (img) {
		img.style.maxWidth = 100 / columns + "%";
		img.style.maxHeight = 95 / rows + "vh";
	});

}















var MyCraft = {};

MyCraft.rows = 15;
MyCraft.cols = 20;

MyCraft.grid = [];

MyCraft.tiles = {
	sand: 'images/sand.jpg',
	cactus: 'images/cactus.png',
	dirt: 'images/dirt.png',
	grass: 'images/grass.png',
	leaf: 'images/leaf.jpg',
	rock: 'images/rock.png',
	tree: 'images/tree.png',
	bird: 'images/bird.png',
	none: '',
};

MyCraft.tools = {
	pickaxe: 'pickaxe',
	shovel: 'shovel',
	axe: 'axe',
	slingshot: 'slingshot',
};

MyCraft.toolsAbility = {
	pickaxe: ['rock', 'cactus'],
	shovel: ['grass', 'dirt'],
	axe: ['leaf', 'tree'],
	slingshot: ['bird'],
};

MyCraft.selectedTile = '';
MyCraft.selectedTool = '';
MyCraft.lastSelected = '';

MyCraft.inventory = {
	cactus: 10,
	dirt: 15,
	grass: 9,
	tree: 9,
	leaf: 9,
	rock: 15,
	bird: 3,
};

MyCraft.world = 
{"tile-0-0":{"x":"0","y":"0","tileType":"","element":"tile-0-0"},
"tile-0-1":{"x":"0","y":"1","tileType":"","element":"tile-0-1"},
"tile-0-2":{"x":"0","y":"2","tileType":"","element":"tile-0-2"},
"tile-0-3":{"x":"0","y":"3","tileType":"","element":"tile-0-3"},
"tile-0-4":{"x":"0","y":"4","tileType":"","element":"tile-0-4"},
"tile-0-5":{"x":"0","y":"5","tileType":"","element":"tile-0-5"},
"tile-0-6":{"x":"0","y":"6","tileType":"","element":"tile-0-6"},
"tile-0-7":{"x":"0","y":"7","tileType":"","element":"tile-0-7"},
"tile-0-8":{"x":"0","y":"8","tileType":"","element":"tile-0-8"},
"tile-0-9":{"x":"0","y":"9","tileType":"","element":"tile-0-9"},
"tile-0-10":{"x":"0","y":"10","tileType":"","element":"tile-0-10"},
"tile-0-11":{"x":"0","y":"11","tileType":"","element":"tile-0-11"},
"tile-0-12":{"x":"0","y":"12","tileType":"","element":"tile-0-12"},
"tile-0-13":{"x":"0","y":"13","tileType":"","element":"tile-0-13"},
"tile-0-14":{"x":"0","y":"14","tileType":"","element":"tile-0-14"},
"tile-0-15":{"x":"0","y":"15","tileType":"","element":"tile-0-15"},
"tile-0-16":{"x":"0","y":"16","tileType":"","element":"tile-0-16"},
"tile-0-17":{"x":"0","y":"17","tileType":"","element":"tile-0-17"},
"tile-0-18":{"x":"0","y":"18","tileType":"","element":"tile-0-18"},
"tile-0-19":{"x":"0","y":"19","tileType":"","element":"tile-0-19"},
"tile-1-0":{"x":"1","y":"0","tileType":"","element":"tile-1-0"},
"tile-1-1":{"x":"1","y":"1","tileType":"bird","element":"tile-1-1"},
"tile-1-2":{"x":"1","y":"2","tileType":"","element":"tile-1-2"},
"tile-1-3":{"x":"1","y":"3","tileType":"","element":"tile-1-3"},
"tile-1-4":{"x":"1","y":"4","tileType":"","element":"tile-1-4"},
"tile-1-5":{"x":"1","y":"5","tileType":"","element":"tile-1-5"},
"tile-1-6":{"x":"1","y":"6","tileType":"","element":"tile-1-6"},
"tile-1-7":{"x":"1","y":"7","tileType":"","element":"tile-1-7"},
"tile-1-8":{"x":"1","y":"8","tileType":"","element":"tile-1-8"},
"tile-1-9":{"x":"1","y":"9","tileType":"","element":"tile-1-9"},
"tile-1-10":{"x":"1","y":"10","tileType":"","element":"tile-1-10"},
"tile-1-11":{"x":"1","y":"11","tileType":"","element":"tile-1-11"},
"tile-1-12":{"x":"1","y":"12","tileType":"","element":"tile-1-12"},
"tile-1-13":{"x":"1","y":"13","tileType":"","element":"tile-1-13"},
"tile-1-14":{"x":"1","y":"14","tileType":"","element":"tile-1-14"},
"tile-1-15":{"x":"1","y":"15","tileType":"","element":"tile-1-15"},
"tile-1-16":{"x":"1","y":"16","tileType":"","element":"tile-1-16"},
"tile-1-17":{"x":"1","y":"17","tileType":"","element":"tile-1-17"},
"tile-1-18":{"x":"1","y":"18","tileType":"","element":"tile-1-18"},
"tile-1-19":{"x":"1","y":"19","tileType":"","element":"tile-1-19"},
"tile-2-0":{"x":"2","y":"0","tileType":"","element":"tile-2-0"},
"tile-2-1":{"x":"2","y":"1","tileType":"","element":"tile-2-1"},
"tile-2-2":{"x":"2","y":"2","tileType":"","element":"tile-2-2"},
"tile-2-3":{"x":"2","y":"3","tileType":"","element":"tile-2-3"},
"tile-2-4":{"x":"2","y":"4","tileType":"","element":"tile-2-4"},
"tile-2-5":{"x":"2","y":"5","tileType":"","element":"tile-2-5"},
"tile-2-6":{"x":"2","y":"6","tileType":"","element":"tile-2-6"},
"tile-2-7":{"x":"2","y":"7","tileType":"","element":"tile-2-7"},
"tile-2-8":{"x":"2","y":"8","tileType":"","element":"tile-2-8"},
"tile-2-9":{"x":"2","y":"9","tileType":"","element":"tile-2-9"},
"tile-2-10":{"x":"2","y":"10","tileType":"","element":"tile-2-10"},
"tile-2-11":{"x":"2","y":"11","tileType":"","element":"tile-2-11"},
"tile-2-12":{"x":"2","y":"12","tileType":"","element":"tile-2-12"},
"tile-2-13":{"x":"2","y":"13","tileType":"","element":"tile-2-13"},
"tile-2-14":{"x":"2","y":"14","tileType":"","element":"tile-2-14"},
"tile-2-15":{"x":"2","y":"15","tileType":"","element":"tile-2-15"},
"tile-2-16":{"x":"2","y":"16","tileType":"","element":"tile-2-16"},
"tile-2-17":{"x":"2","y":"17","tileType":"","element":"tile-2-17"},
"tile-2-18":{"x":"2","y":"18","tileType":"","element":"tile-2-18"},
"tile-2-19":{"x":"2","y":"19","tileType":"","element":"tile-2-19"},
"tile-3-0":{"x":"3","y":"0","tileType":"","element":"tile-3-0"},
"tile-3-1":{"x":"3","y":"1","tileType":"","element":"tile-3-1"},
"tile-3-2":{"x":"3","y":"2","tileType":"","element":"tile-3-2"},
"tile-3-3":{"x":"3","y":"3","tileType":"","element":"tile-3-3"},
"tile-3-4":{"x":"3","y":"4","tileType":"","element":"tile-3-4"},
"tile-3-5":{"x":"3","y":"5","tileType":"","element":"tile-3-5"},
"tile-3-6":{"x":"3","y":"6","tileType":"","element":"tile-3-6"},
"tile-3-7":{"x":"3","y":"7","tileType":"","element":"tile-3-7"},
"tile-3-8":{"x":"3","y":"8","tileType":"","element":"tile-3-8"},
"tile-3-9":{"x":"3","y":"9","tileType":"","element":"tile-3-9"},
"tile-3-10":{"x":"3","y":"10","tileType":"","element":"tile-3-10"},
"tile-3-11":{"x":"3","y":"11","tileType":"","element":"tile-3-11"},
"tile-3-12":{"x":"3","y":"12","tileType":"","element":"tile-3-12"},
"tile-3-13":{"x":"3","y":"13","tileType":"","element":"tile-3-13"},
"tile-3-14":{"x":"3","y":"14","tileType":"","element":"tile-3-14"},
"tile-3-15":{"x":"3","y":"15","tileType":"","element":"tile-3-15"},
"tile-3-16":{"x":"3","y":"16","tileType":"","element":"tile-3-16"},
"tile-3-17":{"x":"3","y":"17","tileType":"","element":"tile-3-17"},
"tile-3-18":{"x":"3","y":"18","tileType":"","element":"tile-3-18"},
"tile-3-19":{"x":"3","y":"19","tileType":"","element":"tile-3-19"},
"tile-4-0":{"x":"4","y":"0","tileType":"","element":"tile-4-0"},
"tile-4-1":{"x":"4","y":"1","tileType":"","element":"tile-4-1"},
"tile-4-2":{"x":"4","y":"2","tileType":"","element":"tile-4-2"},
"tile-4-3":{"x":"4","y":"3","tileType":"","element":"tile-4-3"},
"tile-4-4":{"x":"4","y":"4","tileType":"","element":"tile-4-4"},
"tile-4-5":{"x":"4","y":"5","tileType":"","element":"tile-4-5"},
"tile-4-6":{"x":"4","y":"6","tileType":"","element":"tile-4-6"},
"tile-4-7":{"x":"4","y":"7","tileType":"","element":"tile-4-7"},
"tile-4-8":{"x":"4","y":"8","tileType":"","element":"tile-4-8"},
"tile-4-9":{"x":"4","y":"9","tileType":"","element":"tile-4-9"},
"tile-4-10":{"x":"4","y":"10","tileType":"","element":"tile-4-10"},
"tile-4-11":{"x":"4","y":"11","tileType":"","element":"tile-4-11"},
"tile-4-12":{"x":"4","y":"12","tileType":"","element":"tile-4-12"},
"tile-4-13":{"x":"4","y":"13","tileType":"bird","element":"tile-4-13"},
"tile-4-14":{"x":"4","y":"14","tileType":"","element":"tile-4-14"},
"tile-4-15":{"x":"4","y":"15","tileType":"","element":"tile-4-15"},
"tile-4-16":{"x":"4","y":"16","tileType":"","element":"tile-4-16"},
"tile-4-17":{"x":"4","y":"17","tileType":"","element":"tile-4-17"},
"tile-4-18":{"x":"4","y":"18","tileType":"","element":"tile-4-18"},
"tile-4-19":{"x":"4","y":"19","tileType":"","element":"tile-4-19"},
"tile-5-0":{"x":"5","y":"0","tileType":"","element":"tile-5-0"},"tile-5-1":{"x":"5","y":"1","tileType":"","element":"tile-5-1"},"tile-5-2":{"x":"5","y":"2","tileType":"leaf","element":"tile-5-2"},"tile-5-3":{"x":"5","y":"3","tileType":"leaf","element":"tile-5-3"},"tile-5-4":{"x":"5","y":"4","tileType":"leaf","element":"tile-5-4"},"tile-5-5":{"x":"5","y":"5","tileType":"","element":"tile-5-5"},"tile-5-6":{"x":"5","y":"6","tileType":"","element":"tile-5-6"},"tile-5-7":{"x":"5","y":"7","tileType":"","element":"tile-5-7"},"tile-5-8":{"x":"5","y":"8","tileType":"","element":"tile-5-8"},"tile-5-9":{"x":"5","y":"9","tileType":"","element":"tile-5-9"},"tile-5-10":{"x":"5","y":"10","tileType":"","element":"tile-5-10"},"tile-5-11":{"x":"5","y":"11","tileType":"","element":"tile-5-11"},"tile-5-12":{"x":"5","y":"12","tileType":"","element":"tile-5-12"},"tile-5-13":{"x":"5","y":"13","tileType":"","element":"tile-5-13"},"tile-5-14":{"x":"5","y":"14","tileType":"","element":"tile-5-14"},"tile-5-15":{"x":"5","y":"15","tileType":"","element":"tile-5-15"},"tile-5-16":{"x":"5","y":"16","tileType":"","element":"tile-5-16"},"tile-5-17":{"x":"5","y":"17","tileType":"","element":"tile-5-17"},"tile-5-18":{"x":"5","y":"18","tileType":"","element":"tile-5-18"},"tile-5-19":{"x":"5","y":"19","tileType":"","element":"tile-5-19"},"tile-6-0":{"x":"6","y":"0","tileType":"","element":"tile-6-0"},"tile-6-1":{"x":"6","y":"1","tileType":"","element":"tile-6-1"},"tile-6-2":{"x":"6","y":"2","tileType":"leaf","element":"tile-6-2"},"tile-6-3":{"x":"6","y":"3","tileType":"leaf","element":"tile-6-3"},"tile-6-4":{"x":"6","y":"4","tileType":"leaf","element":"tile-6-4"},"tile-6-5":{"x":"6","y":"5","tileType":"","element":"tile-6-5"},"tile-6-6":{"x":"6","y":"6","tileType":"","element":"tile-6-6"},"tile-6-7":{"x":"6","y":"7","tileType":"","element":"tile-6-7"},"tile-6-8":{"x":"6","y":"8","tileType":"","element":"tile-6-8"},"tile-6-9":{"x":"6","y":"9","tileType":"","element":"tile-6-9"},"tile-6-10":{"x":"6","y":"10","tileType":"","element":"tile-6-10"},"tile-6-11":{"x":"6","y":"11","tileType":"","element":"tile-6-11"},"tile-6-12":{"x":"6","y":"12","tileType":"","element":"tile-6-12"},"tile-6-13":{"x":"6","y":"13","tileType":"","element":"tile-6-13"},"tile-6-14":{"x":"6","y":"14","tileType":"","element":"tile-6-14"},"tile-6-15":{"x":"6","y":"15","tileType":"","element":"tile-6-15"},"tile-6-16":{"x":"6","y":"16","tileType":"","element":"tile-6-16"},"tile-6-17":{"x":"6","y":"17","tileType":"","element":"tile-6-17"},"tile-6-18":{"x":"6","y":"18","tileType":"","element":"tile-6-18"},"tile-6-19":{"x":"6","y":"19","tileType":"","element":"tile-6-19"},"tile-7-0":{"x":"7","y":"0","tileType":"","element":"tile-7-0"},"tile-7-1":{"x":"7","y":"1","tileType":"","element":"tile-7-1"},"tile-7-2":{"x":"7","y":"2","tileType":"leaf","element":"tile-7-2"},"tile-7-3":{"x":"7","y":"3","tileType":"tree","element":"tile-7-3"},"tile-7-4":{"x":"7","y":"4","tileType":"leaf","element":"tile-7-4"},"tile-7-5":{"x":"7","y":"5","tileType":"","element":"tile-7-5"},"tile-7-6":{"x":"7","y":"6","tileType":"","element":"tile-7-6"},"tile-7-7":{"x":"7","y":"7","tileType":"","element":"tile-7-7"},"tile-7-8":{"x":"7","y":"8","tileType":"","element":"tile-7-8"},"tile-7-9":{"x":"7","y":"9","tileType":"","element":"tile-7-9"},"tile-7-10":{"x":"7","y":"10","tileType":"","element":"tile-7-10"},"tile-7-11":{"x":"7","y":"11","tileType":"","element":"tile-7-11"},"tile-7-12":{"x":"7","y":"12","tileType":"","element":"tile-7-12"},"tile-7-13":{"x":"7","y":"13","tileType":"","element":"tile-7-13"},"tile-7-14":{"x":"7","y":"14","tileType":"","element":"tile-7-14"},"tile-7-15":{"x":"7","y":"15","tileType":"","element":"tile-7-15"},"tile-7-16":{"x":"7","y":"16","tileType":"","element":"tile-7-16"},"tile-7-17":{"x":"7","y":"17","tileType":"","element":"tile-7-17"},"tile-7-18":{"x":"7","y":"18","tileType":"","element":"tile-7-18"},"tile-7-19":{"x":"7","y":"19","tileType":"","element":"tile-7-19"},"tile-8-0":{"x":"8","y":"0","tileType":"","element":"tile-8-0"},"tile-8-1":{"x":"8","y":"1","tileType":"","element":"tile-8-1"},"tile-8-2":{"x":"8","y":"2","tileType":"","element":"tile-8-2"},"tile-8-3":{"x":"8","y":"3","tileType":"tree","element":"tile-8-3"},"tile-8-4":{"x":"8","y":"4","tileType":"","element":"tile-8-4"},"tile-8-5":{"x":"8","y":"5","tileType":"","element":"tile-8-5"},"tile-8-6":{"x":"8","y":"6","tileType":"","element":"tile-8-6"},"tile-8-7":{"x":"8","y":"7","tileType":"","element":"tile-8-7"},"tile-8-8":{"x":"8","y":"8","tileType":"","element":"tile-8-8"},"tile-8-9":{"x":"8","y":"9","tileType":"","element":"tile-8-9"},"tile-8-10":{"x":"8","y":"10","tileType":"","element":"tile-8-10"},"tile-8-11":{"x":"8","y":"11","tileType":"","element":"tile-8-11"},"tile-8-12":{"x":"8","y":"12","tileType":"","element":"tile-8-12"},"tile-8-13":{"x":"8","y":"13","tileType":"","element":"tile-8-13"},"tile-8-14":{"x":"8","y":"14","tileType":"","element":"tile-8-14"},"tile-8-15":{"x":"8","y":"15","tileType":"","element":"tile-8-15"},"tile-8-16":{"x":"8","y":"16","tileType":"","element":"tile-8-16"},"tile-8-17":{"x":"8","y":"17","tileType":"","element":"tile-8-17"},"tile-8-18":{"x":"8","y":"18","tileType":"","element":"tile-8-18"},"tile-8-19":{"x":"8","y":"19","tileType":"","element":"tile-8-19"},"tile-9-0":{"x":"9","y":"0","tileType":"","element":"tile-9-0"},"tile-9-1":{"x":"9","y":"1","tileType":"","element":"tile-9-1"},"tile-9-2":{"x":"9","y":"2","tileType":"","element":"tile-9-2"},"tile-9-3":{"x":"9","y":"3","tileType":"tree","element":"tile-9-3"},"tile-9-4":{"x":"9","y":"4","tileType":"","element":"tile-9-4"},"tile-9-5":{"x":"9","y":"5","tileType":"","element":"tile-9-5"},"tile-9-6":{"x":"9","y":"6","tileType":"","element":"tile-9-6"},"tile-9-7":{"x":"9","y":"7","tileType":"","element":"tile-9-7"},"tile-9-8":{"x":"9","y":"8","tileType":"rock","element":"tile-9-8"},"tile-9-9":{"x":"9","y":"9","tileType":"","element":"tile-9-9"},"tile-9-10":{"x":"9","y":"10","tileType":"","element":"tile-9-10"},"tile-9-11":{"x":"9","y":"11","tileType":"","element":"tile-9-11"},"tile-9-12":{"x":"9","y":"12","tileType":"","element":"tile-9-12"},"tile-9-13":{"x":"9","y":"13","tileType":"","element":"tile-9-13"},"tile-9-14":{"x":"9","y":"14","tileType":"","element":"tile-9-14"},"tile-9-15":{"x":"9","y":"15","tileType":"","element":"tile-9-15"},"tile-9-16":{"x":"9","y":"16","tileType":"","element":"tile-9-16"},"tile-9-17":{"x":"9","y":"17","tileType":"","element":"tile-9-17"},"tile-9-18":{"x":"9","y":"18","tileType":"","element":"tile-9-18"},"tile-9-19":{"x":"9","y":"19","tileType":"","element":"tile-9-19"},"tile-10-0":{"x":"10","y":"0","tileType":"grass","element":"tile-10-0"},"tile-10-1":{"x":"10","y":"1","tileType":"grass","element":"tile-10-1"},"tile-10-2":{"x":"10","y":"2","tileType":"grass","element":"tile-10-2"},"tile-10-3":{"x":"10","y":"3","tileType":"grass","element":"tile-10-3"},"tile-10-4":{"x":"10","y":"4","tileType":"grass","element":"tile-10-4"},"tile-10-5":{"x":"10","y":"5","tileType":"grass","element":"tile-10-5"},"tile-10-6":{"x":"10","y":"6","tileType":"grass","element":"tile-10-6"},"tile-10-7":{"x":"10","y":"7","tileType":"grass","element":"tile-10-7"},"tile-10-8":{"x":"10","y":"8","tileType":"grass","element":"tile-10-8"},"tile-10-9":{"x":"10","y":"9","tileType":"grass","element":"tile-10-9"},"tile-10-10":{"x":"10","y":"10","tileType":"","element":"tile-10-10"},"tile-10-11":{"x":"10","y":"11","tileType":"","element":"tile-10-11"},"tile-10-12":{"x":"10","y":"12","tileType":"","element":"tile-10-12"},"tile-10-13":{"x":"10","y":"13","tileType":"","element":"tile-10-13"},"tile-10-14":{"x":"10","y":"14","tileType":"","element":"tile-10-14"},"tile-10-15":{"x":"10","y":"15","tileType":"","element":"tile-10-15"},"tile-10-16":{"x":"10","y":"16","tileType":"","element":"tile-10-16"},"tile-10-17":{"x":"10","y":"17","tileType":"","element":"tile-10-17"},"tile-10-18":{"x":"10","y":"18","tileType":"rock","element":"tile-10-18"},"tile-10-19":{"x":"10","y":"19","tileType":"rock","element":"tile-10-19"},"tile-11-0":{"x":"11","y":"0","tileType":"dirt","element":"tile-11-0"},"tile-11-1":{"x":"11","y":"1","tileType":"dirt","element":"tile-11-1"},"tile-11-2":{"x":"11","y":"2","tileType":"dirt","element":"tile-11-2"},"tile-11-3":{"x":"11","y":"3","tileType":"dirt","element":"tile-11-3"},"tile-11-4":{"x":"11","y":"4","tileType":"dirt","element":"tile-11-4"},"tile-11-5":{"x":"11","y":"5","tileType":"dirt","element":"tile-11-5"},"tile-11-6":{"x":"11","y":"6","tileType":"dirt","element":"tile-11-6"},"tile-11-7":{"x":"11","y":"7","tileType":"dirt","element":"tile-11-7"},"tile-11-8":{"x":"11","y":"8","tileType":"dirt","element":"tile-11-8"},"tile-11-9":{"x":"11","y":"9","tileType":"dirt","element":"tile-11-9"},"tile-11-10":{"x":"11","y":"10","tileType":"dirt","element":"tile-11-10"},"tile-11-11":{"x":"11","y":"11","tileType":"dirt","element":"tile-11-11"},"tile-11-12":{"x":"11","y":"12","tileType":"dirt","element":"tile-11-12"},"tile-11-13":{"x":"11","y":"13","tileType":"dirt","element":"tile-11-13"},"tile-11-14":{"x":"11","y":"14","tileType":"dirt","element":"tile-11-14"},"tile-11-15":{"x":"11","y":"15","tileType":"dirt","element":"tile-11-15"},"tile-11-16":{"x":"11","y":"16","tileType":"dirt","element":"tile-11-16"},"tile-11-17":{"x":"11","y":"17","tileType":"dirt","element":"tile-11-17"},"tile-11-18":{"x":"11","y":"18","tileType":"dirt","element":"tile-11-18"},"tile-11-19":{"x":"11","y":"19","tileType":"dirt","element":"tile-11-19"},"tile-12-0":{"x":"12","y":"0","tileType":"dirt","element":"tile-12-0"},"tile-12-1":{"x":"12","y":"1","tileType":"dirt","element":"tile-12-1"},"tile-12-2":{"x":"12","y":"2","tileType":"dirt","element":"tile-12-2"},"tile-12-3":{"x":"12","y":"3","tileType":"dirt","element":"tile-12-3"},"tile-12-4":{"x":"12","y":"4","tileType":"dirt","element":"tile-12-4"},"tile-12-5":{"x":"12","y":"5","tileType":"dirt","element":"tile-12-5"},"tile-12-6":{"x":"12","y":"6","tileType":"dirt","element":"tile-12-6"},"tile-12-7":{"x":"12","y":"7","tileType":"dirt","element":"tile-12-7"},"tile-12-8":{"x":"12","y":"8","tileType":"dirt","element":"tile-12-8"},"tile-12-9":{"x":"12","y":"9","tileType":"dirt","element":"tile-12-9"},"tile-12-10":{"x":"12","y":"10","tileType":"dirt","element":"tile-12-10"},"tile-12-11":{"x":"12","y":"11","tileType":"dirt","element":"tile-12-11"},"tile-12-12":{"x":"12","y":"12","tileType":"dirt","element":"tile-12-12"},"tile-12-13":{"x":"12","y":"13","tileType":"dirt","element":"tile-12-13"},"tile-12-14":{"x":"12","y":"14","tileType":"dirt","element":"tile-12-14"},"tile-12-15":{"x":"12","y":"15","tileType":"dirt","element":"tile-12-15"},"tile-12-16":{"x":"12","y":"16","tileType":"dirt","element":"tile-12-16"},"tile-12-17":{"x":"12","y":"17","tileType":"dirt","element":"tile-12-17"},"tile-12-18":{"x":"12","y":"18","tileType":"dirt","element":"tile-12-18"},"tile-12-19":{"x":"12","y":"19","tileType":"dirt","element":"tile-12-19"},"tile-13-0":{"x":"13","y":"0","tileType":"dirt","element":"tile-13-0"},"tile-13-1":{"x":"13","y":"1","tileType":"dirt","element":"tile-13-1"},"tile-13-2":{"x":"13","y":"2","tileType":"dirt","element":"tile-13-2"},"tile-13-3":{"x":"13","y":"3","tileType":"dirt","element":"tile-13-3"},"tile-13-4":{"x":"13","y":"4","tileType":"dirt","element":"tile-13-4"},"tile-13-5":{"x":"13","y":"5","tileType":"dirt","element":"tile-13-5"},"tile-13-6":{"x":"13","y":"6","tileType":"dirt","element":"tile-13-6"},"tile-13-7":{"x":"13","y":"7","tileType":"dirt","element":"tile-13-7"},"tile-13-8":{"x":"13","y":"8","tileType":"dirt","element":"tile-13-8"},"tile-13-9":{"x":"13","y":"9","tileType":"dirt","element":"tile-13-9"},"tile-13-10":{"x":"13","y":"10","tileType":"dirt","element":"tile-13-10"},"tile-13-11":{"x":"13","y":"11","tileType":"dirt","element":"tile-13-11"},"tile-13-12":{"x":"13","y":"12","tileType":"dirt","element":"tile-13-12"},"tile-13-13":{"x":"13","y":"13","tileType":"dirt","element":"tile-13-13"},"tile-13-14":{"x":"13","y":"14","tileType":"dirt","element":"tile-13-14"},"tile-13-15":{"x":"13","y":"15","tileType":"dirt","element":"tile-13-15"},"tile-13-16":{"x":"13","y":"16","tileType":"dirt","element":"tile-13-16"},"tile-13-17":{"x":"13","y":"17","tileType":"dirt","element":"tile-13-17"},"tile-13-18":{"x":"13","y":"18","tileType":"dirt","element":"tile-13-18"},"tile-13-19":{"x":"13","y":"19","tileType":"dirt","element":"tile-13-19"},"tile-14-0":{"x":"14","y":"0","tileType":"dirt","element":"tile-14-0"},"tile-14-1":{"x":"14","y":"1","tileType":"dirt","element":"tile-14-1"},"tile-14-2":{"x":"14","y":"2","tileType":"dirt","element":"tile-14-2"},"tile-14-3":{"x":"14","y":"3","tileType":"dirt","element":"tile-14-3"},"tile-14-4":{"x":"14","y":"4","tileType":"dirt","element":"tile-14-4"},"tile-14-5":{"x":"14","y":"5","tileType":"dirt","element":"tile-14-5"},"tile-14-6":{"x":"14","y":"6","tileType":"dirt","element":"tile-14-6"},"tile-14-7":{"x":"14","y":"7","tileType":"dirt","element":"tile-14-7"},"tile-14-8":{"x":"14","y":"8","tileType":"dirt","element":"tile-14-8"},"tile-14-9":{"x":"14","y":"9","tileType":"dirt","element":"tile-14-9"},"tile-14-10":{"x":"14","y":"10","tileType":"dirt","element":"tile-14-10"},"tile-14-11":{"x":"14","y":"11","tileType":"dirt","element":"tile-14-11"},"tile-14-12":{"x":"14","y":"12","tileType":"dirt","element":"tile-14-12"},"tile-14-13":{"x":"14","y":"13","tileType":"dirt","element":"tile-14-13"},"tile-14-14":{"x":"14","y":"14","tileType":"dirt","element":"tile-14-14"},"tile-14-15":{"x":"14","y":"15","tileType":"dirt","element":"tile-14-15"},"tile-14-16":{"x":"14","y":"16","tileType":"dirt","element":"tile-14-16"},"tile-14-17":{"x":"14","y":"17","tileType":"dirt","element":"tile-14-17"},"tile-14-18":{"x":"14","y":"18","tileType":"dirt","element":"tile-14-18"},"tile-14-19":{"x":"14","y":"19","tileType":"dirt","element":"tile-14-19"}}
