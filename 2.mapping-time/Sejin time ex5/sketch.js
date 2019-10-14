function setup(){
createCanvas(500, 350)
background(255)
}



function draw(){
background(130,40,255)
fill(255, 170, 0, 40)
circle(width/2, height/2, 300)

var now = clock()
var sizeSec = map(now.progress.sec, 0, 1, 0, 200)
var sizeMin = map(now.progress.min, 0, 1, 200, 300)
var sizeHour = map(now.progress.hour, 0, 1, 300, 400)


noStroke()
fill(255, 170, 0, 255)
circle(width/2,height/2,sizeMin)

fill(255)
circle(width/2,height/2,sizeSec)

}
