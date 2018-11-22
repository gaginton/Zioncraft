var Zioncraft = {};
Zioncraft.toolSelected = '';
Zioncraft.replace = false;


Zioncraft.blocks = {
    'sky': {class: 'sky', data: 'nothing'},
    'cloud': {class: 'cloud', data: 'nothing'},
    'dirt': {class: 'dirt', data: 'shovel'},
    'grass': {class: 'grass', data: 'shovel'},
    'leaf': {class: 'leaf', data: 'axe'},
    'tree': {class: 'tree', data: 'axe'},
    'cactus': {class: 'cactus', data: 'pickaxe'},
    'rock': {class: 'rock', data: 'pickaxe'}
 };


Zioncraft.tools = [
    { data: 'axe', src: 'images/axe.png' },
    { data: 'pickaxe', src: 'images/pickaxe.png' },
    { data: 'shovel', src: 'images/shovel.png' },
    { data: 'clouds', src: 'images/cloud_image.png' }
];

Zioncraft.matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'leaf', 'leaf', 'leaf', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'rock', 'rock', 'sky', 'tree', 'sky', 'sky', 'rock'],
    ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt'],
    ['dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt', 'dirt']
];


$(document). ready(function(){
    Zioncraft.init();
    console.log("check");
});


$(document).ready(function () {
    document.getElementById('playGame').addEventListener('click', Zioncraft.init);
});


Zioncraft.init = function () {
    $('.container-fluid').css('display', 'none');
    $('#default-board').css('display', 'block');
    $('#toolsContain').css('display', 'block');
    Zioncraft.grid();
    Zioncraft.Toolbar();
};


Zioncraft.checkMatch = function (selected) {
    if (Zioncraft.replace === false) {
        if (selected.hasClass('sky box') || selected.hasClass('cloud box')) {       /////for images////
            Zioncraft.incompatibility();        ///look over function///
        }
        else if (selected.attr('data') === $('.toolSelected').attr('data')) {
            Zioncraft.blockMover(selected);
        }
        else {
            Zioncraft.incompatibility();
        }
    }
};


Zioncraft.Toolbar = function () {
    console.log('adfsjksdjdfpaf00');
    var toolArray = $(".toolItem");
    for (var t = 0; t < toolArray.length; t++) {
        toolArray.eq(t).append("<img src=" + Zioncraft.tools[t].src + ">");     //see eq//
        toolArray.eq(t).attr('data', Zioncraft.tools[t].data);      ///see eq//
        toolArray.eq(t).click(Zioncraft.clickTool);
    }
    $('#itemSelected').click(Zioncraft.replaceBlock);
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

Zioncraft.clickBlock = function () {
    var selected = $(this);
    Zioncraft.checkMatch(selected);
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


Zioncraft.blockMover = function (selected) {
    if (selected.not('sky box')) {
        var itemSelectedBox = $("#itemSelected");
        itemSelectedBox.attr('class', selected.attr('class'));
        itemSelectedBox.attr('data', selected.attr('data'));
        selected.attr('class', 'sky box');
    }
};


Zioncraft.blockAdder = function () {
    var selected = $(this);
    selected.attr('class', Zioncraft.newClass);
    selected.attr('data', Zioncraft.newData);
    $('#itemSelected').removeClass();
    $('.box').not('#itemSelected').unbind('click', Zioncraft.blockAdder);
};


Zioncraft.replaceBlock = function () {
    console.log("adjapofjapdsf")
    zioneCraft.newData = null;
    Zioncraft.newClass = null;
    var itemSelected = $('#itemSelected');
    $('.toolItem').removeClass('toolSelected');
    Zioncraft.replace = true;
    Zioncraft.newClass = itemSelected.attr('class');
    Zioncraft.newData = itemSelected.attr('data');
    $('.box').not('#itemSelected').click(Zioncraft.blockAdder);
};