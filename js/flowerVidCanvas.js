window.flowerVidCanvas = function(){
    
    var flwVidCan = document.getElementById('flowerVidCanvas');
    var flwVidCtx = flwVidCan.getContext('2d');
    var flwVid = document.getElementById('flwVid')
    
    flwVid.muted = true;
    
    flwVid.play();
    
    setInterval(function(){

                flwVidCtx.drawImage(flwVid, 0, 125, 852, 162, 0, 0, 1000, 190);

            }, 10);
};