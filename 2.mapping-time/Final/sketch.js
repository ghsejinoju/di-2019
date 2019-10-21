function setup(){
createCanvas(410, 410)
background(0)
}

function coordsAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return [cx+cos(theta) * dist,
          cy+sin(theta) * dist]
}

function pointAt(cx, cy, angle, dist){
  var theta = angle/360 * TWO_PI
  return {x:cx+cos(theta) * dist,
          y:cy+sin(theta) * dist}
}

function draw(){
background(0)

function draw() {

noStroke()
}
  var now= clock()
  let from = color('yellow');
  let to = color(0, 0, 0);
  var dayColor= lerpColor(from, to, now.progress.day)
  var nightColor= lerpColor(to, from, now.progress.day)
  var alldayColor= lerpColor(dayColor, nightColor, now.progress.day)
  colorMode(HSB)
  var sizeSec = map(now.progress.sec, 0, 1, 0, 20)
  var sizeMin = map(now.progress.min, 0, 1, 20, 20)

  var minAngle= map(now.progress.min,0,1,0,360)
  var hourAngle= map(now.progress.hour,0,1,0,360)


  noStroke()
  fill('blue')
  var ptmin = pointAt(width/2, height/2, minAngle, 13)
  circle(ptmin.x, ptmin.y, 47)


fill('red')
circle(width/2,height/2,sizeMin)

fill(255)
circle(width/2,height/2,sizeSec)

noFill()
stroke(alldayColor);
strokeWeight(2)
var pthour = pointAt(width/2, height/2, hourAngle, 84)
arc(pthour.x, pthour.y, 190, 190, 0, TWO_PI)

}
