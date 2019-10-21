function setup(){
  createCanvas(500,370)
  background('Black');
}

function draw() {
  background('Black');


noStroke()
  var now= clock()
  let from = color(255, 100, 132);
  let to = color(0, 0, 0);
  colorMode(HSB)
  var dayColor= lerpColor(from, to, now.progress.day)
  var nightColor= lerpColor(to, from, now.progress.day)
  fill(dayColor);
  rect(50, 30, 400, 140, 0, 60, 60, 0);


  fill(nightColor);
  rect(50, 200, 400, 140, 0, 50, 0, 0);

fill(0)
noStroke()
rect(130, 50, 240, 65, 0, 50, 50, 0);
rect(130, 240, 240, 100, 0, 85, 0, 0);


  fill(255)
  stroke(1)
var xlocation = map(now.progress.day, 0, 1, 65, 415)
var ylocation = map(now.progress.day, 0, 1, 45, 155)
var x2location = map(now.progress.day, 0, 1, 415, 65)
var y2location = map(now.progress.day, 0, 1, 155, 45)

var x3location = map(now.progress.day, 0, 1, 415, 65)
var y3location = map(now.progress.day, 0, 1, 230, 315)
var x4location = map(now.progress.day, 0, 1, 65, 415)
var y4location = map(now.progress.day, 0, 1, 315, 230)

  circle(xlocation,ylocation,30)
  circle(x2location,y2location,30)

  circle(x3location,y3location,30)
  circle(x4location,y4location,30)

}
