//Code created by Adobe Animate CC to create the scissors animation.

/******SCISSORS ANIMATION FROM ADOBE ANIMATE CC******/
//Initialization function for Scissors Animation
window.initSciss = function(){
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

(function (lib, img, cjs, ss) {

    var p; // shortcut to reference prototypes
    lib.webFontTxtFilters = {};

// library properties:
    lib.properties = {
        width: 75,
        height: 95,
        fps: 30,
        color: "#FFFFFF",
        webfonts: {},
        manifest: []
    };


    lib.webfontAvailable = function (family) {
        lib.properties.webfonts[family] = true;
        var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
        for (var f = 0; f < txtFilters.length; ++f) {
            txtFilters[f].updateCache();
        }
    };
// symbols:


    (lib.Symbol3 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#555555").s().p("AEqUDQhegOhWg3QhxhIglhzQgrh/A9h8QAVgtAogtQAdghAygsQAGgEACgFQACgEAAgIQAAgygFhMIgKh/Iog5SIBZBlQBsB/BgB7QEyGKBKDaQAwCOgPCzQgFBDgOBHIgXBoIgLAkQgGAWgBAPQgCAZAGA5QAFAtAFBZQAGBOAOA2QAFAUANAhIATA0IB8FyQAPArgUApQgHANgHAIQgTAWgaALQgUAHgUAAIgQgBgAE6SWIiXnBIgdAbQggAjgTAmQgpBTAcBTQAgBhBuA0QA2AbAwAHg");
        this.shape.setTransform(42.5, 128.5);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 85, 256.9);


    (lib.Symbol2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        // Layer 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#333333").s().p("AMcOEIkUkUQgzg4gbgYQgqgkhDgoQhNgsgngYQgwgfgXgJQgPgGgWgEIglgHIgjgIIhCgRQhJgUg8gZQiohEhphpQijigjYnEQhEiNhBiZIg0h9IS3S4IBuBAQBBAnAtAWQAGADAFABQAFAAAHgDQA/gaApgLQA6gQAzAAQBEAAA7AYQA7AYAuAuQBWBWAPCGQALBlgeBbQgIAbgVAUQgWATgcAHQgMADgNAAQguAAgggggAI/HZIgkAOIFPFPQAPguAAg9QACh5hIhIQg+g+hdAAQgrAAguANg");
        this.shape.setTransform(100, 93.2);

        this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 200.1, 186.5);


// stage content:
    (lib.scissors = function (mode, startPosition, loop) {
        if (loop == null) {
            loop = false;
        }
        this.initialize(mode, startPosition, loop, {});

        // Layer 4
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AgNADQgHgDgBgIIArAAQgBAIgHADQgGAGgIAAQgHAAgGgGg");
        this.shape.setTransform(43.1, 59.2, 0.375, 0.37);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#FFFFFF").s().p("AgVAJQABgIAHgEQAGgEAHAAQAIAAAGAEQAGAEACAIg");
        this.shape_1.setTransform(43.1, 58.2, 0.375, 0.37);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#444444").s().p("AMcOEIkUkUQgzg4gbgYQgqgkhDgoQhNgsgngYQgwgfgXgJQgPgGgWgEIglgHIgjgIIhCgRQhJgUg8gZQiohEhphpQijigjYnEQhEiNhBiZIg0h9IS3S4IBuBAQBBAnAtAWQAGADAFABQAFAAAHgDQA/gaApgLQA6gQAzAAQBEAAA7AYQA7AYAuAuQBWBWAPCGQALBlgeBbQgIAbgVAUQgWATgcAHQgMADgNAAQguAAgggggAI/HZIgkAOIFPFPQAPguAAg9QACh5hIhIQg+g+hdAAQgrAAguANg");
        this.shape_2.setTransform(37.5, 47.6, 0.375, 0.37);

        this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(19));

        // Layer 3
        this.instance = new lib.Symbol3("synched", 0);
        this.instance.setTransform(36.9, 47.5, 0.375, 0.37, 0, 0, 0, 42.6, 128.4);

        this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
            regX: 42.5,
            regY: 128.5,
            rotation: -1,
            x: 36.6,
            y: 47.7
        }, 0).wait(1).to({rotation: -2, x: 36.5, y: 47.8}, 0).wait(1).to({
            rotation: -3,
            x: 36.3,
            y: 47.9
        }, 0).wait(1).to({rotation: -4, x: 36.1, y: 48.1}, 0).wait(1).to({
            rotation: -5,
            x: 35.8,
            y: 48.2
        }, 0).wait(1).to({rotation: -6.1, x: 35.7, y: 48.3}, 0).wait(1).to({
            rotation: -7.2,
            x: 35.4,
            y: 48.5
        }, 0).wait(1).to({rotation: -8.3, x: 35.2, y: 48.6}, 0).wait(1).to({
            rotation: -9.5,
            x: 34.9,
            y: 48.8
        }, 0).wait(1).to({rotation: -10.7, x: 34.7, y: 49}, 0).wait(1).to({
            rotation: -11.9,
            x: 34.5,
            y: 49.1
        }, 0).wait(1).to({rotation: -13.2, x: 34.2, y: 49.3}, 0).wait(1).to({
            rotation: -14.5,
            x: 33.9,
            y: 49.5
        }, 0).wait(1).to({rotation: -15.9, x: 33.6, y: 49.7}, 0).wait(1).to({
            rotation: -17.4,
            x: 33.3,
            y: 49.9
        }, 0).wait(1).to({rotation: -19, x: 33.1, y: 50.1}, 0).wait(1).to({
            rotation: -20.6,
            x: 32.7,
            y: 50.3
        }, 0).wait(1).to({rotation: -22.3, x: 32.4, y: 50.5}, 0).wait(1));

        // Layer 1
        this.instance_1 = new lib.Symbol2("synched", 0);
        this.instance_1.setTransform(37.5, 47.7, 0.375, 0.37, 0, 0, 0, 100, 93.2);

        this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off: true}, 1).wait(18));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(37.5, 47.5, 75, 95);

})(lib = lib || {}, images = images || {}, createjs = createjs || {}, ss = ss || {});
var lib, images, createjs, ss;