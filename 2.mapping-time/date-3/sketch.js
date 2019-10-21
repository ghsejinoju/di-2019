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


function setup() {
  createCanvas(600, 600);
}
function draw() {

noStroke()
  var now= clock()
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  colorMode(HSB)



  // get pair of coordinates for smaller circle
  var secondAngle= map(now.progress.sec,0,1,0,360)
  var minAngle= map(now.progress.min,0,1,0,360)
  var hourAngle= map(now.progress.hour,0,1,0,360)
  var hoursAngle= map(now.progress.day,0,1,0,360)


  // get coords as single-variable for smallest circle
  fill('yellow')
    var pthours = pointAt(300, 300, hoursAngle, 100)
    circle(pthours.x, pthours.y, 200)

    fill('red')
    stroke(255)
    strokeWeight(1)
      var pthour = pointAt(300, 300, hourAngle, 150)
      circle(pthour.x, pthour.y, 100)

noFill();
stroke(255)
strokeWeight(1)
arc(50,50,50,50,0, TWO_PI);

    fill('blue')
    stroke(255)
    var ptmin = pointAt(300, 300, minAngle, 200)
    circle(ptmin.x, ptmin.y, 50)


 fill('green')
  var ptsec = pointAt(300, 300, secondAngle, 250)
  circle(ptsec.x, ptsec.y, 15)
}
