//LIBRARY USED THROUGHOUT GAME. CONTAINS TOOLS AND BLOCKS
var Zioncraft = {};
Zioncraft.toolSelected = '';
//REPLACE BECOMES TRUE WHEN.....
Zioncraft.replace = false;

//BLOCKS CLASS REPRESENT WHAT THEY ARE. DATA IS USED TO 
//IDENTIFY TOOLS THAT REMOVE BLOCKS
Zioncraft.blocks = {
    'cactus': { class: 'cactus', data: 'fire' },
    'dirt': { class: 'dirt', data: 'shovel' },
    'grass': { class: 'grass', data: 'shovel' },
    'leaf': { class: 'leaf', data: 'axe' },
    'tree': { class: 'tree', data: 'axe' },
    'rock': { class: 'rock', data: 'pickaxe' },
    'sky': { class: 'sky', data: 'nothing' },
    'cloud': { class: 'cloud', data: 'clouds' },
};


Zioncraft.tools = [
    { data: 'axe', src: 'images/axe.png' },
    { data: 'fire', src: 'images/fire.png' },
    { data: 'pickaxe', src: 'images/pickaxe.png' },
    { data: 'shovel', src: 'images/shovel.png' },
];


Zioncraft.matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
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


$(document).ready(function () {
    document.getElementById('playGame').addEventListener('click', Zioncraft.init);
});


Zioncraft.init = function () {
    $('.container-fluid').css('display', 'none');
    $('#default-board').css('display', 'block');
    $('#toolsContain').css('display', 'block');
    $('#blocksContain').css('display', 'block');
    Zioncraft.grid();
    Zioncraft.Toolbar();
    updateInventoryNo();
};


Zioncraft.Toolbar = function () {
    var toolArray = $(".toolItem");
    for (var i = 0; i < toolArray.length; i++) {
        toolArray.eq(i).append("<img src=" + Zioncraft.tools[i].src + ">");     //see eq//
        toolArray.eq(i).attr('data', Zioncraft.tools[i].data);      ///see eq//
        toolArray.eq(i).click(Zioncraft.clickTool);
    }
    $('.inventory.cactus').click(Zioncraft.clickCactus);
    $('.inventory.dirt').click(Zioncraft.clickDirt);
    $('.inventory.grass').click(Zioncraft.clickGrass);
    $('.inventory.leaf').click(Zioncraft.clickLeaf);
    $('.inventory.tree').click(Zioncraft.clickTree);
    $('.inventory.rock').click(Zioncraft.clickRock);
    $('.inventory.cloud').click(Zioncraft.clickCloud);
};


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


Zioncraft.checkMatch = function (selectedBlock) {
    if (Zioncraft.replace === false) {
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


Zioncraft.clickTool = function () {
    Zioncraft.replace = false;
    $('.toolItem').removeClass('toolSelected');
    $(this).toggleClass('toolSelected');
};


Zioncraft.incompatibility = function () {
    $('.toolSelected').addClass('incorrectSelection');
    setTimeout(function () {
        $('.toolSelected').removeClass('incorrectSelection');
    }, 200);
};


Zioncraft.blockMover = function (selectedBlock) {
    if (selectedBlock.not('sky box')) {
        var selectedBox = $("#itemSelected");
        selectedBox.attr('class', selectedBlock.attr('class'));
        selectedBox.attr('data', selectedBlock.attr('data'));
        selectedBlock.attr('class', 'sky box');
    }
};


Zioncraft.blockAdder = function () {
    var selectedBlock = $(this);
    selectedBlock.attr('class', Zioncraft.newClass);
    selectedBlock.attr('data', Zioncraft.newData);
    $('#itemSelected').removeClass();
    $('.box').not('#itemSelected').unbind('click', Zioncraft.blockAdder);
};


// Zioncraft.replaceBlock = function () {
//     Zioncraft.newData = null;
//     Zioncraft.newClass = null;
//     var itemSelected = $('#itemSelected');
//     $('.toolItem').removeClass('toolSelected');
//     Zioncraft.replace = true;
//     Zioncraft.newClass = itemSelected.attr('class');
//     Zioncraft.newData = itemSelected.attr('data');
//     $('.box').not('#itemSelected').click(Zioncraft.blockAdder);
//     console.log(Zioncraft);
// };


Zioncraft.clickCactus = function () {
    Zioncraft.newData = null;
    Zioncraft.newClass = null;
    Zioncraft.newClass = "cactus box";
    Zioncraft.newData = "fire";
    $('.box').not('inventory').click(Zioncraft.blockAdder);
};

Zioncraft.clickDirt = function () {
    Zioncraft.newData = null;
    Zioncraft.newClass = null;
    Zioncraft.newClass = "dirt box";
    Zioncraft.newData = "shovel";
    $('.box').not('inventory').click(Zioncraft.blockAdder);
};

Zioncraft.clickGrass = function () {
    Zioncraft.newData = null;
    Zioncraft.newClass = null;
    Zioncraft.newClass = "grass box";
    Zioncraft.newData = "shovel";
    $('.box').not('inventory').click(Zioncraft.blockAdder);
};

Zioncraft.clickLeaf = function () {
    Zioncraft.newData = null;
    Zioncraft.newClass = null;
    Zioncraft.newClass = "leaf box";
    Zioncraft.newData = "axe";
    $('.box').not('inventory').click(Zioncraft.blockAdder);
};

<<<<<<< HEAD

=======
Zioncraft.clickTree = function () {
    Zioncraft.newData = null;
    Zioncraft.newClass = null;
    Zioncraft.newClass = "tree box";
    Zioncraft.newData = "axe";
    $('.box').not('inventory').click(Zioncraft.blockAdder);
};

Zioncraft.clickRock = function () {
    Zioncraft.newData = null;
    Zioncraft.newClass = null;
    Zioncraft.newClass = "rock box";
    Zioncraft.newData = "pickaxe";
    $('.box').not('inventory').click(Zioncraft.blockAdder);
};

Zioncraft.clickCloud = function () {
    Zioncraft.newData = null;
    Zioncraft.newClass = null;
    Zioncraft.newClass = "box";
    Zioncraft.newData = "";
    $('.box').not('inventory').click(Zioncraft.blockAdder);
};

var counter = 0;
>>>>>>> c758dbd5eb67f682152bc75b0dd801324626d986
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
