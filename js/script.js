/**************************WEB PAGE INITILIZATION***************************/
function init() {
    if (Modernizr.canvas) {                                                                                             //Check if Canvas is working and run if yes.
        initSciss();                                                                                                        //Setup Scissors animation.
        cutLogoAnim();                                                                                                      //Run cut logo animation.
        flowerVidCanvas();                                                                                                  //Run flower vid canvas.
        waterChartInit();                                                                                                   //Run water cart initialization.
        initImgGal();                                                                                                       //Run image gallery initialization.
        leafCanvas();                                                                                                       //Run leaf canvas.
    } else if (window.jQuery) {                                                                                         //If no canvas, check if jQuery is available.
        noCanvas();                                                                                                         //Run backup function if there is no canvas.
        initImgGal();                                                                                                       //Run  image gallery initialization.
        waterData();                                                                                                        //Run the water data function to insert average gallons saved.
    } else if (Modernizr.csstransitions) {                                                                              //If no jQuery, check for CSS transitions.
        nojQuery();                                                                                                         //Run backup function if there is no jQuery.
        waterData();                                                                                                        //Run the water data function to insert average gallons saved.
    } else {                                                                                                            //If no CSS Transitions
        noCSSTrans();                                                                                                       //Run backup function.
        waterData();                                                                                                        //Run the water data function to insert average gallons saved.
    }
}

/********ANIMATION FOR S GETTING CUT AT THE END OF LOGO********/
function cutLogoAnim() {                                                                                                //Cut logo 's' animation function.
    var logo = $('#logo'),                                                                                                  //Store logo element.
        logoCan = logo.children('canvas'),                                                                                  //Store the child canvas of the logo.
        logoS = logo.children('span');                                                                                      //Store the child span of the logo.

    setTimeout(function () {                                                                                            //1.2second timeout before running 'out' animations on s and scissors canvas.
        logoS.addClass('hingeBottomLeft animated');                                                                     //Add Ani.JS animations to 's' to make it drop.
        logoCan.addClass('zoomOutRight animated');                                                                      //Add Ani.JS animation to scissors canvas to zoom out right.
    }, 1200);

    setTimeout(function () {                                                                                            //1.2second timeout before running 'out' animations on s.
        logoS.addClass('hingeBottomLeft animated');                                                                     //Add Ani.JS animations to 's' to make it drop.

    }, 1200);
    
    setTimeout(function(){                                                                                              //1.6second timeout before running 'out' animations on scissors canvas.
        logoCan.addClass('zoomOutRight animated');                                                                      //Add Ani.JS animation to scissors canvas to zoom out right.
    }, 1600);


    setTimeout(function () {                                                                                            //3 second timeout before running prep for next animation.
        logoS.removeClass('hingeBottomLeft animated');                                                                  //Remove Ani.JS classes.
        logoS.attr('style', 'transform: scale(0); transform-origin:bottom left;');                                      //Setup 's' for 'growing' animation
    }, 3000);

    setTimeout(function () {                                                                                            //3.005 second timeout before running 'grow' animation on s.
        logoS.addClass('growS');                                                                                        //Add growS class which has animation for growing the 's'
        $('#logoTag').fadeIn(800).css({
            'display': 'inline-block'
        });                                                                                                             //Fade in the logo tag line.
    }, 3500);
}


/******************WHAT TO DO IF THERE IS NO CANVAS***********************************/
function noCanvas() {                                                                                                   //No Canvas backup function.
    var logo = $('#logo'),                                                                                                  //Store the logo element
        logoS = logo.children('span');                                                                                      //Store the logo span, i.e. the s.


    $('#flowerVidCanvas').children('img').fadeIn(1000);                                                                     //Fade in the daisy image.

    logoS.attr('style', 'transform: scale(0); transform-origin:bottom left;');                                              //Setup 's' for 'growing' animation.

    setTimeout(function () {
        logoS.addClass('growS');                                                                                            //Add growS class which has animation for growing the 's'
        $('#logoTag').fadeIn(800).css({
            'display': 'inline-block'
        });                                                                                                                 //Fade in the logo tag line.
    }, 500);

    var leafCan = $('#leaf'),                                                                                               //Store the leaf element.
        leafImg = leafCan.children('img');                                                                                  //Store the child img of the leaf.

    leafImg.mouseover(function(){                                                                                           //When the image is moused over.
        leafImg.addClass('fadeOut');                                                                                        //Add CSS animation class to fade out.

        setTimeout(function(){                                                                                              //After a second hide the leaf img.
            leafImg.hide();
        }, 1000);
    });
}


/************************FUNCTIONS IF JQUERY ISN"T SUPPORTED***************************/
function nojQuery() {                                                                                                   //No jQuery backup function.
    document.getElementById('logo').children[0].classList.add('growS');                                                     //Add growS class to the 's' of the logo.
    document.getElementById('logoTag').classList.add('nojQuery');                                                           //Add nojQuery class to fade in logo tag line.

    document.getElementById('flowerVidCanvas').children[0].setAttribute('style', 'display:inline');                         //Display the daisy image since the jQuery fade in won't work.

    var leafCan = document.getElementById('leaf');                                                                          //Store the leaf canvas.

    leafCan.children[0].onmouseover = function(){                                                                           //When the leaf canvas image is moused over.
        this.classList.add('fadeOut');                                                                                      //Add the fadeOut CSS class.

        setTimeout(function(){                                                                                              //After 1 second.
            leafCan.style.display = "none";                                                                                     //Hide the leaf canvas.
        }, 1000);

    };

    setTimeout(function () {                                                                                                //After .6 seconds
        document.getElementById('logoTag').classList.add('fadeIn');                                                             //Fade in the logo tag.
    }, 600)
}


/**************************FUNCTION IF CSS TRANSITIONS ARE NOT SUPPORTED*****************************/
function noCSSTrans(){                                                                                                  //No CSS Transitions backup function.
    document.getElementById('logo').children[0].classList.add('green');                                                     //Add make the 's' at the end of the logo green.
    document.getElementById('logoTag').classList.add('noCSSTrans');                                                         //Add class to show logo tagline.

    document.getElementById('flowerVidCanvas').children[0].setAttribute('style', 'display:inline');                         //Show the flower image since jQuery fade in won't work.

    var leafCan = document.getElementById('leaf');                                                                          //Store the leaf canvas.
    leafCan.style.zIndex = -100;                                                                                            //Push it behind the other footer elements.
    leafCan.style.opacity = .4;                                                                                             //Set the opacity to 40%.
}


/************************IMAGE GALLERY INITIALIZATION*************************************************/
function initImgGal(){
    $('#imageGallery').lightGallery({                                                                                   //Find the image gallery and run the lightGallery on it.
        mode: 'lg-scale-up',                                                                                                //Image transition animation style.
        speed: 800,                                                                                                         //Image transition speed.
        download: false,                                                                                                    //Disable download button.
        fullScreen: false,                                                                                                  //Disable fullscreen button.
        zoom: false,                                                                                                        //Disable zoom.
        thumbnail:true,                                                                                                     //Enable thumbnails.
        animatedThumb: true,                                                                                                //Enable animated  thumbnails.
        closable: false                                                                                                     //Disable click on background to close.
    });

    $('#imageGallery').children('a').hover(                                                                             //When the image gallery a tags are hovered over.
        function () {
            $(this).addClass('pulse animated');                                                                             //Add the 'pulse animated' classes from Ani.JS to animate them.
        }, function(){
        $(this).removeClass('pulse animated');                                                                              //Once mouse is no longer hovering remove the classes.
        }
    );
}



/*********************INITIALIZE SITE AFTER WINDOW LOAD************************************/
window.onload = init;                                                                                                   //Run initialization function once window loads.