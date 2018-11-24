//DICTINARY USED THROUGHOUT GAME.
var Zioncraft = {};
Zioncraft.toolSelected = '';
//REPLACE BECOMES TRUE WHEN.....
// Zioncraft.replace = false;

//BLOCKS CLASS REPRESENT WHAT THEY ARE. DATA IS USED TO IDENTIFY WHICH TOOLS CAN BE USED TO REMOVE A BLOCK
Zioncraft.blocks = {
    'cactus': {class: 'cactus', data: 'fire'},
    'dirt': {class: 'dirt', data: 'shovel'},
    'grass': {class: 'grass', data: 'shovel'},
    'leaf': {class: 'leaf', data: 'axe'},
    'tree': {class: 'tree', data: 'axe'},
    'rock': {class: 'rock', data: 'pickaxe'},
    'sky': {class: 'sky', data: 'nothing'},
    'cloud': {class: 'cloud', data: 'nothing'},
};


Zioncraft.tools = [
    {data: 'axe', src: 'images/axe.png'},
    {data: 'fire', src: 'images/fire.png'},
    {data: 'pickaxe', src: 'images/pickaxe.png'},
    {data: 'shovel', src: 'images/shovel.png'},
];


Zioncraft.matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf', 'leaf'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'cactus', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'cactus', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cactus', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'cactus', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'cactus', 'sky', 'sky', 'sky', 'sky', 'rock', 'rock', 'sky', 'tree', 'sky', 'sky', 'rock'],
    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt']
];


//INITIALIZE GAME AFTER DOM IS LOADED SINCE WE USE JQUERY
$(document).ready(function () {
    document.getElementById('playGame').addEventListener('click', Zioncraft.init);
    document.getElementById("instructions").addEventListener('click', showmodal);
});

function showmodal(){
    $(`.modal`).css('display', `block`);
    $(`.close`).click(exitModal);
}

function exitModal(){
    $(`.modal`).css(`display`, `none`);
}

//INIT CHANGES DISPLAYS SO MODALS DONT SHOW AND GAME DOES
//ALSO CREATES INITIAL GRID BASED ON ARRAY AND TOOLBAR
//CURRENTLY TOOL-TOOLBAR ARE DYNAMIC BUT BOXES-TOOLBAR ARE NOT
Zioncraft.init = function () {
    $(`.modal`).css(`display`,`none`);
    $('.container-fluid').css('display', 'none');
    $('#default-board').css('display', 'block');
    $('#toolsContain').css('display', 'block');
    $('#blocksContain').css('display', 'block');
    Zioncraft.grid();
    Zioncraft.Toolbar();
    updateInventoryNo();
};


//EQ REFERENCES CHILD, WHICH INCREASES BASED ON I
Zioncraft.Toolbar = function () {
    var toolArray = $(".toolItem");
    for (var i = 0; i < toolArray.length; i++) {
        toolArray.eq(i).append("<img src=" + Zioncraft.tools[i].src + ">");
        toolArray.eq(i).attr('data', Zioncraft.tools[i].data);
        toolArray.eq(i).click(Zioncraft.clickTool);
    }
    //SHOULD ADD FOR LOOP TO BUILD SIMILAR BOX INVENTORY
    $('.inventory.cactus').click(Zioncraft.clickCactus);
    $('.inventory.dirt').click(Zioncraft.clickDirt);
    $('.inventory.grass').click(Zioncraft.clickGrass);
    $('.inventory.leaf').click(Zioncraft.clickLeaf);
    $('.inventory.tree').click(Zioncraft.clickTree);
    $('.inventory.rock').click(Zioncraft.clickRock);
    $('.inventory.cloud').click(Zioncraft.clickCloud);
};


//CREATE GRID BASED ON GRID WE MADE ABOVE
Zioncraft.grid = function () {
    var main = $('#main');
    for (var i = 0; i < Zioncraft.matrix.length; i++) {
        for (var j = 0; j < Zioncraft.matrix[i].length; j++) {
            var tile = $('<div/>');
            tile.addClass(Zioncraft.blocks[Zioncraft.matrix[i][j]].class)
                .addClass('box')
                .attr('data', Zioncraft.blocks[Zioncraft.matrix[i][j]].data)
                .click(Zioncraft.clickBlock);
            main.append(tile);
        }
    }
};


//WHEN YOU CLICK A BLOCK, RUN CHECKMATCH FUNCTION
Zioncraft.clickBlock = function () {
    var selectedBlock = $(this);
    Zioncraft.checkMatch(selectedBlock);
};


//CHECKMATCH FUNCTION ONLY ALLOWS TOOLS TO WORK ON APPROPRIATE BLOCKS

//ISSUE WITH GETTING STRING VALUE OF "ZIONCRAFT.INVENTORY.(BLOCKCLASS)
//READS AS STRING --> CAN NOT ADJUST INVENTORY VALUES USING STRING --> 
//USING IF STATEMENTS TO COMPARE STRING TO STRING VALUE OF INVENTORY
Zioncraft.checkMatch = function (selectedBlock) {
    if (Zioncraft.replace === false) {
        var blockClass = selectedBlock.attr('class').replace(" box", "");
        var inventoryName = "Zioncraft.inventory." + blockClass;
        console.log(inventoryName)

        if (inventoryName === "Zioncraft.inventory.cactus") {
            Zioncraft.inventory.cactus += 1;
            updateInventoryNo();
        }
        else if (inventoryName === "Zioncraft.inventory.dirt") {
            Zioncraft.inventory.dirt += 1;
            updateInventoryNo();
        }
        else if (inventoryName === "Zioncraft.inventory.grass") {
            Zioncraft.inventory.grass += 1;
            updateInventoryNo();
        }
        else if (inventoryName === "Zioncraft.inventory.leaf") {
            Zioncraft.inventory.leaf += 1;
            updateInventoryNo();
        }
        else if (inventoryName === "Zioncraft.inventory.tree") {
            Zioncraft.inventory.tree += 1;
            updateInventoryNo();
        }
        else if (inventoryName === "Zioncraft.inventory.rock") {
            Zioncraft.inventory.rock += 1;
            updateInventoryNo();
        }
        //DID NOT ADD TOOL TO ALLOW CLOUD MINING -- THIS IS NOT NECESSARY FOR NOW
        else if (inventoryName === "Zioncraft.inventory.cloud") {
            Zioncraft.inventory.cloud += 1;
            updateInventoryNo();
        }

        //REST OF CODE
        if (selectedBlock.attr('data') === $('.toolSelected').attr('data')) {
            Zioncraft.blockMover(selectedBlock);
        }
        else {
            Zioncraft.incompatibility();
        }
    }
};


Zioncraft.clickBlock = function () {
    var selectedBlock = $(this);
    Zioncraft.checkMatch(selectedBlock);


};


//IF TOOL WAS USED ON INCORRECT BLOCK
Zioncraft.incompatibility = function () {
    $('.toolSelected').addClass('incorrectSelection');
    setTimeout(function () {
        $('.toolSelected').removeClass('incorrectSelection');
    }, 200);
};


//CHANGES TOOL SELECTED TO WHICHEVER TOOL USER CLICKS ON
Zioncraft.clickTool = function () {
    Zioncraft.replace = false;
    $('.toolItem').removeClass('toolSelected');
    $(this).toggleClass('toolSelected');
};


//WHEN YOU MINE BLOCK TURN SELECTEDBLOCK TO CLASS SKY BOX
Zioncraft.blockMover = function (selectedBlock) {
    if (selectedBlock.not('sky box')) {
        selectedBlock.attr('class', 'sky box');
    }
};


//ADDS BLOCK SELECTED TO GAMEBOARD, WHEN GAMEBOARD IS CLICKED
Zioncraft.blockAdder = function () {
    var selectedBlock = $(this);
    selectedBlock.attr('class', Zioncraft.newClass);
    selectedBlock.attr('data', Zioncraft.newData);
    $('.box').unbind('click', Zioncraft.blockAdder);

};


Zioncraft.clickCactus = function () {
    if (Zioncraft.inventory.cactus > 0) {
        Zioncraft.inventory.cactus -= 1;
        Zioncraft.newData = null;
        Zioncraft.newClass = null;
        Zioncraft.newClass = "cactus box";
        Zioncraft.newData = "fire";
        $('.box').not('inventory').click(Zioncraft.blockAdder);
    }
    updateInventoryNo()
};

Zioncraft.clickDirt = function () {
    if (Zioncraft.inventory.dirt > 0) {
        Zioncraft.inventory.dirt -= 1;
        Zioncraft.newData = null;
        Zioncraft.newClass = null;
        Zioncraft.newClass = "dirt box";
        Zioncraft.newData = "shovel";
        $('.box').not('inventory').click(Zioncraft.blockAdder);
    }
    updateInventoryNo()
};

Zioncraft.clickGrass = function () {
    if (Zioncraft.inventory.grass > 0) {
        Zioncraft.inventory.grass -= 1;
        Zioncraft.newData = null;
        Zioncraft.newClass = null;
        Zioncraft.newClass = "grass box";
        Zioncraft.newData = "shovel";
        $('.box').not('inventory').click(Zioncraft.blockAdder);
    }
    updateInventoryNo()

};

Zioncraft.clickLeaf = function () {
    if (Zioncraft.inventory.leaf > 0) {
        Zioncraft.inventory.leaf -= 1;
        Zioncraft.newData = null;
        Zioncraft.newClass = null;
        Zioncraft.newClass = "leaf box";
        Zioncraft.newData = "axe";
        $('.box').not('inventory').click(Zioncraft.blockAdder);
    }
    updateInventoryNo()
};

Zioncraft.clickTree = function () {
    if (Zioncraft.inventory.tree > 0) {
        Zioncraft.inventory.tree -= 1;
        Zioncraft.newData = null;
        Zioncraft.newClass = null;
        Zioncraft.newClass = "tree box";
        Zioncraft.newData = "axe";
        $('.box').not('inventory').click(Zioncraft.blockAdder);
    }
    updateInventoryNo()
};

Zioncraft.clickRock = function () {
    if (Zioncraft.inventory.rock > 0) {
        Zioncraft.inventory.rock -= 1;
        Zioncraft.newData = null;
        Zioncraft.newClass = null;
        Zioncraft.newClass = "rock box";
        Zioncraft.newData = "pickaxe";
        $('.box').not('inventory').click(Zioncraft.blockAdder);
    }
    updateInventoryNo()
};

Zioncraft.clickCloud = function () {
    if (Zioncraft.inventory.cloud > 0) {
        Zioncraft.inventory.cloud -= 1;
        Zioncraft.newData = null;
        Zioncraft.newClass = null;
        Zioncraft.newClass = "cloud box";
        Zioncraft.newData = "";
        $('.box').not('inventory').click(Zioncraft.blockAdder);
    }
    updateInventoryNo()
};


//CREATE INVENTORY
Zioncraft.inventory = {
    cactus: 9,
    dirt: 9,
    grass: 9,
    leaf: 9,
    tree: 9,
    rock: 9,
    cloud: 9,
};


function updateInventoryNo() {
    var cactus = $('#cactusInventoryNo');
    var dirt = $('#dirtInventoryNo');
    var grass = $('#grassInventoryNo');
    var leaf = $('#leafInventoryNo');
    var tree = $('#treeInventoryNo');
    var rock = $('#rockInventoryNo');
    var cloud = $('#cloudInventoryNo');

    cactus.html(Zioncraft.inventory.cactus);
    dirt.html(Zioncraft.inventory.dirt);
    grass.html(Zioncraft.inventory.grass);
    leaf.html(Zioncraft.inventory.leaf);
    tree.html(Zioncraft.inventory.tree);
    rock.html(Zioncraft.inventory.rock);
    cloud.html(Zioncraft.inventory.bird);
};
