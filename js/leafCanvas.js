window.leafCanvas = function () {
    var leafCan = document.getElementById('leaf');

    console.log(leafCan);

    var leafStage = new createjs.Stage(leafCan);

    var leaf = new createjs.Shape();

    leaf.graphics.setStrokeStyle(4, 'round', 'round');
    leaf.graphics.beginStroke('#153A1D');
    leaf.graphics.beginFill('#246A36');
    leaf.regX = 290;
    leaf.regY = 140;
    leaf.x = 290;
    leaf.y = 140;
    leaf.graphics.moveTo(290, 140);
    leaf.graphics.bezierCurveTo(260, 0, 160, 0, 160, 10);
    leaf.graphics.bezierCurveTo(150, 10, 150, 110, 290, 140);
    leaf.graphics.closePath();

    var veins = new createjs.Shape();
    
    veins.graphics.setStrokeStyle(2);
    veins.graphics.beginStroke('#153A1D');
    veins.regX = 290;
    veins.regY = 140;
    veins.x = 290;
    veins.y = 140;
    veins.graphics.moveTo(290, 140);
    veins.graphics.lineTo(160, 10);
    veins.graphics.moveTo(180, 30);
    veins.graphics.lineTo(158, 30);
    veins.graphics.moveTo(180, 30);
    veins.graphics.lineTo(180, 8);
    veins.graphics.moveTo(200, 50);
    veins.graphics.lineTo(164, 50);
    veins.graphics.moveTo(200, 50);
    veins.graphics.lineTo(200, 14);
    veins.graphics.moveTo(225, 75);
    veins.graphics.lineTo(174, 75);
    veins.graphics.moveTo(225, 75);
    veins.graphics.lineTo(225, 24);
    veins.graphics.moveTo(250, 100);
    veins.graphics.lineTo(198, 100);
    veins.graphics.moveTo(250, 100);
    veins.graphics.lineTo(250, 48);
    veins.graphics.moveTo(270, 120);
    veins.graphics.lineTo(230, 120);
    veins.graphics.moveTo(270, 120);
    veins.graphics.lineTo(270, 80);
    veins.graphics.endStroke();

    var stem = new createjs.Shape();

    stem.graphics.setStrokeStyle(8, 'round');
    stem.graphics.beginStroke('#917042');
    stem.graphics.moveTo(290, 140);
    stem.graphics.lineTo(310, 160);
    stem.graphics.endStroke();

    var leaf2 = leaf.clone(true);
    leaf2.rotation = 15;
    leaf2.scaleX = .85;
    leaf2.scaleY = .85;

    var veins2 = veins.clone(true);
    veins2.rotation = 15;
    veins2.scaleX = .85;
    veins2.scaleY = .85;

    var leaf3 = leaf2.clone(true);
    leaf3.rotation = -20;

    var veins3 = veins2.clone(true);
    veins3.rotation = -20;



    leafStage.addChild(leaf3, veins3, leaf2, veins2, leaf, veins, stem);
    leafStage.update();
};