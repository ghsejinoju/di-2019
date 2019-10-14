
function setup() {
  createCanvas(500, 500)
}



function draw() {

var now = clock()

  background(255);
  fill(255, 230, 0);
  noStroke()


var angle = map(now.hour, 0, 24, 0, TWO_PI)
arc(250, 250, 420, 420, -HALF_PI, angle-HALF_PI);

fill(50, 204, 220);
var angle2 = map(now.day, 0, 30, 0, TWO_PI)
arc(250, 250, 400, 400, -HALF_PI, angle2-HALF_PI);

fill(80, 14, 70);
var angle2 = map(now.month, 0, 12, 0, TWO_PI)
arc(250, 250, 300, 300, -HALF_PI, angle2-HALF_PI);


}
