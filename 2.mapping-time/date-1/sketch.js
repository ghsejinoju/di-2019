function setup(){
  createCanvas(600,200)
}

function draw(){

var now = clock()

background(51);
colorMode(HSB, 1.0)

let from = color(218, 165, 32);
let to = color(72, 61, 139);

var rect = map(now.season, 0, 4, lerpColor(from, to));

rect(50, 30, 110, 110, 35, 30, 25, 0);
}
