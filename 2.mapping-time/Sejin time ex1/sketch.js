

function setup() {
  createCanvas(750, 650)
}



function draw() {

var now = clock()

  background(255);
  stroke(255, 204, 0);
  strokeWeight(10);



var angle = map(now.sec, 0, 60, 0, TWO_PI)

arc(300, 300, 140, 140, -HALF_PI, angle-HALF_PI);
}
