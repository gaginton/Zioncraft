var zionCraft = {};
zionCraft.toolSelected = '';
zionCraft.replace = false;

zionraft.blocks = {
    'sky': {class: 'sky', data: 'nothing'},
    'cloud':{class: 'cloud',data: 'nothing'},
    'dirt':{class: 'dirt',data: 'shovel'},
    'grass': {class: 'grass',data: 'shovel'},
    'leaf': {class: 'leaf',data: 'axe'},
    'tree': {class: 'tree',data: 'axe'},
    'rock': {class: 'rock',data: 'pickaxe'}
 };
zionCraft.tools = [
    {tool: 'axe', src: 'images/axe.png'},
    {tool: 'pickaxe', src: 'images/pickaxe.png'},
    {tool: 'shovel', src: 'images/shovel.png'}

];
zionCraft.matrix = [
    ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'cloud', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky'],
    ['sky', 'sky', 'sky', 'sky', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky'],
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

$(document). read(function(){
    init();

});

zionCraft.init = function(){
    $('#container-fluid').css('display', 'none');
    $('#default-board').css('display', 'block');
    zionCraft.grid();
    zionCraft.Toolbar();
};

zionCraft.checkMatch = function(selected){
   if (zionCraft.replace === false) {
       if (selected.hasClass('sky box')|| block.hasClass('cloud box')) {/////for images////
          zionCraft.incompatibility();///look over function///
       }
       else if (block.attr('data') === $('.toolSelected').attr('tool')) {
           zionCraft.blockMover(selected);
       }
       else {
           zionCraft.incompatibility();
       }
};

zionCraft.Toolbar = function(){
    var toolArray = $(".toolItem");
    for(var t=0;t<toolArray.length; t++ ){
      toolArray.eq(t).append("<img src=" + zionCraft.tools[t].src+">") ;//see eq//
       toolArray.eq(t).attr('data', zionCraft.tools[t].data);///see eq//
        toolArray.eq(t).click(zionCraft.clickTool);
    }
    $('#itemSelected').click(zionCraft.replaceBlock);
};
zionCraft.grid = function(){
    var main= $('#main');
  for (var i=0;i<zionCraft.matrix.length;i++){
      for(var j=0; j<zionCraft.matrix[i].length; j++){
          var tile = $('<div/>');
          tile.addClass(zionCraft.blocks[zionCraft.matrix[i][j]].class)
              .addClass('box')
              .attr('data',zionCraft.blocks[zionCraft.matrix[i][j]].data)
              .click(zionCraft.clickBlock);
          main.append(tile);

      }
  }
};
zionCraft.clickBlock = function () {
        var selected = $(this);
        zionCraft.checkMatch(selected);
    };
zionCraft.clickTool = function (){
    zionCraft.replace = false;
        $('.toolItem').removeClass('toolSelected');
        $(this).toggleClass('toolSelected');
};

zionCraft.incompatibility = function(){
    $('.toolSelected').addClass('incorrectSelection');
    setTimeout(function(){
        $('.toolSelected').removeClass('incorrectSelection');
    },200);
};

zionCraft.blockMover = function(selected){
    if (blockSelected.not('sky box')) {
        var itemSelectedBox = $("#itemSelected");
        itemSelectedBox.attr('class', selected.attr('class'));
        itemSelectedBox.attr('data', selected.attr('data'));
        selected.attr('class', 'sky box');
    }
};
zionCraft.blockAdder = function(){
    var selected = $(this);
    selected.attr('class', zionCraft.newClass);
    selected.attr('data', zionCraft.newData);
    $('#itemSelected').removeClass();
    $('.box').not('#itemSelected').unbind('click', zionCraft.blockAdder);
};
zionCraft.replaceBlock = function() {
    zioneCraft.newData = null;
    zionCraft.newClass = null;
    var itemSelected = $('#itemSelected');
    $('.toolItem').removeClass('toolSelected');
    zionCraft.replace = true;
    zionCraft.newClass = itemSelected.attr('class');
    zionCraft.newData = itemSelected.attr('data');
    $('.box').not('#itemSelected').click(zionCraft.blockAdder);
};


