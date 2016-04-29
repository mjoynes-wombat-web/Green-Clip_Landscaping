window.flowerVidCanvas = function(){
    
    var flwVidCan = document.getElementById('flowerVidCanvas');                                                         //Find the flower video canvas.
    var flwVidCtx = flwVidCan.getContext('2d');                                                                         //Get it's context.
    var flwVid = document.getElementById('flwVid');                                                                     //Get the flower video.
    
    flwVid.muted = true;                                                                                                //Mute the flower video.
    
    flwVid.play();                                                                                                      //Play the flower video.
    
    setInterval(function(){                                                                                             //Set the canvas to redraw from the video every 10 milliseconds.

                flwVidCtx.drawImage(flwVid, 0, 125, 852, 162, 0, 0, 1000, 190);                                         //Slicing starting at x=0, y=125 and ending x=852, y=162 from origin. Draw it from x=0, y=0 to x=1000, y=190.

            }, 10);
};