function init() {
    if (Modernizr.canvas) {
        initSciss();
        cutLogoAnim();
        flowerVidCanvas();
    } else if (window.jQuery) {
        noCanvasLogo();
    } else if (Modernizr.csstransitions) {
        nojQuery();
    } else {
       noCSSTrans(); 
    }
}

/******SCIRSSORS ANIMATION FROM ADOBE ANIMATE CC******/
//Initilization function for Scissors Animation
function initSciss() {
    //Variables for Scissors Animation
    var scissCan, scissStage, scissRoot;

    scissCan = document.getElementById("scissorsCanvas"); //Get scissors canvas.
    scissRoot = new lib.scissors(); //Get scissors graphic elements from scissors.js

    scissStage = new createjs.Stage(scissCan); //Initilize the createjs stage for the scissors animation
    scissStage.addChild(scissRoot); //Add the scissors graphic elements to stage.
    scissStage.update(); //Update the stage.

    setTimeout(function () { //.6 second timeout before running the scissors animation.
        createjs.Ticker.setFPS(lib.properties.fps); //Get the FPS from the scissors.js file.
        createjs.Ticker.addEventListener("tick", scissStage); //Setup the FPS ticker listner.
    }, 600)
};

/********ANIMATION FOR S GETTING CUT AT THE END OF LOGO********/
function cutLogoAnim() {
    setTimeout(function () { //1.2second timeout before running 'out' animations on s.
        $('#logo span').addClass('hinge animated'); //Add Ani.JS animations to 's' to make it drop.
        
    }, 1200)
    
    setTimeout(function(){ //1.6second timeout before running 'out' animations on scissors canvas.
        $('#logo canvas').addClass('zoomOutRight animated'); //Add Ani.JS animation to scissors canvas to zoom out right.
    }, 1600)

    setTimeout(function () { //3 second timeout before running prep for next animation.
        $('#logo span').removeClass('hinge animated'); //Remove Ani.JS classes.
        $('#logo span').attr('style', 'transform: scale(0); transform-origin:bottom left;') //Setup 's' for 'growing' animation
    }, 3000)

    setTimeout(function () { //3.005 second timeout before running 'grow' animation on s.
        $('#logo span').addClass('growS'); //Add growS class which has animation for growing the 's' 
        $('#logoTag').fadeIn(800).css({
            'display': 'inline-block'
        }); //Fade in the logo tag line.
    }, 3500)
};

function noCanvasLogo() {
    console.log('test');
    $('#headerVid').html('<img style="opacity: .1;" src="img/flower.jpg" alt="daisy"/>');
    $('#logo canvas').addClass('hide'); //Hide the logo canvas.
    $('#leftLeaf').addClass('hide');
    $('#rightLeaf').addClass('hide');
    $('#logo span').attr('style', 'transform: scale(0); transform-origin:bottom left;') //Setup 's' for 'growing' animation.

    setTimeout(function () {
        $('#logo span').addClass('growS'); //Add growS class which has animation for growing the 's' 
        $('#logoTag').fadeIn(800).css({
            'display': 'inline-block'
        }); //Fade in the logo tag line.
    }, 500)
};

function nojQuery() {
    document.getElementById('headerVid').innerHTML = '<img style="opacity: .1;" src="img/flower.jpg" alt="daisy"/>';
    document.getElementById('logo').children[0].classList.add('growS');
    document.getElementById('logoTag').classList.add('nojQuery');

    setTimeout(function () {
        document.getElementById('logoTag').classList.add('fadeIn');
    }, 600)
};

function noCSSTrans(){
    document.getElementById('headerVid').innerHTML = '<img style="opacity: .1;" src="img/flower.jpg" alt="daisy"/>';
    document.getElementById('logo').children[0].classList.add('green');
    document.getElementById('logoTag').classList.add('noCSSTrans');
}


/********INITILIZATION FUNCTION FOR PROJECT*********/
/*function init(){
    initSciss();                                                        //Run the scissors animation initilization function.
    cutLogoAnim();                                                      //Run the cut logo animation function.
}*/

window.onload = init; //Run initilization function once window loads.