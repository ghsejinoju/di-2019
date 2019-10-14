createCanvas(500, 300)
function draw()
background(‘white’)
rectMode(CENTER)


var now = clock()

fill(0)
circle(width/2, height/2, 10)

// var secAngle = map(now.sec, 0, 60, 0, 360)
var secAngle = map(now.progress.min, 0, 1, 0, 360)
var secLocation = pointAt(width/2, height/2, secAngle, 120)

var otherLocation = pointAt(secLocation.x, secLocation.y, 90, 30)


fill(‘red’)
line(secLocation.x, secLocation.y, otherLocation.x, otherLocation.y)
circle(secLocation.x, secLocation.y, 10)
rect(otherLocation.x, otherLocation.y, 10, 10)


//  let, var the same
//  var x = map(now.progress.min, 0, 1, 100, width-100)
//  lerpColor()

//  var stepwise = map(now.sec,  0, 60, 0, width)
//  var smooth   = map(now.min,  0, 1, 0, width)

//  차이:
//  now.sec/60 끊김
//  now.progress.sec 부드러움
