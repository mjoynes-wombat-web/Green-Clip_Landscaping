window.leafCanvas = function () {
    var leafCan = document.getElementById('leaf');                                                                      //Find the canvas for the leaf.

    var leafStage = new createjs.Stage(leafCan);                                                                        //Make the createJS stage.


    var leaf = new createjs.Shape();                                                                                    //Make the leaf shape object.

    leaf.graphics.setStrokeStyle(4, 'round', 'round');                                                                  //Set the stoke style for the lef.
    leaf.graphics.beginStroke('#153A1D');                                                                               //Begin the stroke, assigning the color.
    leaf.graphics.beginFill('#246A36');                                                                                 //Begin the fill, assigning the color.
    leaf.regX = 290;                                                                                                    //Set the registration x coordinate.
    leaf.regY = 140;                                                                                                    //Set the registration y coordinate.
    leaf.x = 290;                                                                                                       //Set the beginning x location.
    leaf.y = 140;                                                                                                       //Set the beginning y location.
    leaf.graphics.moveTo(290, 140);                                                                                     //Move the "pen" to x=290 y=140.
    leaf.graphics.bezierCurveTo(260, 0, 160, 0, 160, 10);                                                               //Create a bezier curve.
    leaf.graphics.bezierCurveTo(150, 10, 150, 110, 290, 140);                                                           //Create another beizer curve.
    leaf.graphics.closePath();                                                                                          //Close off the path.


    var veins = new createjs.Shape();                                                                                   //Make the veins shape object.
    
    veins.graphics.setStrokeStyle(2);                                                                                   //Set the stroke style for the veins.
    veins.graphics.beginStroke('#153A1D');                                                                              //Begin the stroke, assigning the color.
    veins.regX = 290;                                                                                                   //Set the registration x.
    veins.regY = 140;                                                                                                   //Set the registration y.
    veins.x = 290;                                                                                                      //Set the beginning x location.
    veins.y = 140;                                                                                                      //Set the beginning y location.
    veins.graphics.moveTo(290, 140);                                                                                    //Move "pen" to..
    veins.graphics.lineTo(160, 10);                                                                                     //Draw line to..
    veins.graphics.moveTo(180, 30);                                                                                     //Repeat to create the veins....
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
    veins.graphics.endStroke();                                                                                         //End the stroke.


    var stem = new createjs.Shape();                                                                                    //Make the stem shape object.

    stem.graphics.setStrokeStyle(8, 'round');                                                                           //Set the stroke style for the veins.
    stem.graphics.beginStroke('#917042');                                                                               //Begin the stroke, assigning the color.
    stem.graphics.moveTo(290, 140);                                                                                     //Move "pen" to.
    stem.graphics.lineTo(310, 160);                                                                                     //Draw line to.
    stem.graphics.endStroke();                                                                                          //End the stroke.


    var leaf2 = leaf.clone(true);                                                                                       //Make a second leaf from the first leaf.
    leaf2.rotation = 15;                                                                                                //Rotate 15 degrees.
    leaf2.scaleX = .85;                                                                                                 //Scale x to 85%.
    leaf2.scaleY = .85;                                                                                                 //Scale y to 85%.

    var veins2 = veins.clone(true);                                                                                     //Do the same as above for a second set of veins.
    veins2.rotation = 15;
    veins2.scaleX = .85;
    veins2.scaleY = .85;


    var leaf3 = leaf2.clone(true);                                                                                      //Make a third leaf from the second leaf.
    leaf3.rotation = -20;                                                                                               //Rotate it counter clockwise 20 degrees.

    var veins3 = veins2.clone(true);                                                                                    //Do the same as above for a third set  of veins.
    veins3.rotation = -20;



    leafStage.addChild(leaf3, veins3, leaf2, veins2, leaf, veins, stem);                                                //Add graphics to the stage.
    leafStage.update();                                                                                                 //Update the stage.



    $('#leaf').mouseover(function(){                                                                                    //Setup fade out on leaf mouseover.
        $('#leaf').fadeOut("slow", "swing");
    })
};