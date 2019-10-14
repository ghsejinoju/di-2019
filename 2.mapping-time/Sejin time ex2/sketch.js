function setup() {
  createCanvas(700, 700);
}

// define global variables to hold the current rotation of each polygon across draw() calls
var hRot = 0
var mRot = 0
var sRot = 0

function draw() {
  var now = clock()

  // set rotational speed limits for each polygon independently
  var hMax = PI/40;
  var mMax = PI/40;
  var sMax = PI/40;

  // divide each time component by its range (to turn it into a 0-1.0 value) then
  // rotate the polygon by that percent of its max speed
  hRot += now.hours/24 * hMax;
  mRot += now.min/60 * mMax;
  sRot += now.sec/60 * sMax;

  background('rgba(0,255,0, 0.1)');
  noStroke()

  /*hour*/
  push();
  translate(width*0.25, height*0.25);
  rotate(hRot);
  fill(255);
  polygon(0, 0, 180, 3);
  pop();

  /*time colons*/

  /*minute*/
  push();
  translate(width*0.55, height*0.55);
  rotate(mRot);
  fill(210);
  polygon(0, 0, 90, 4);
  pop();

  /*second*/
  push();
  translate(width*0.85, height*0.73);
  rotate(sRot);
  fill(180);
  polygon(0, 0, 30, 5);
  pop();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
