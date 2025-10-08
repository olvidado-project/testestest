var dread=1;
var damn=0

//The setup function only happens once
function setup() {
	createCanvas(1500, 600); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(57, 49, 107); //an RGB color for the canvas' background
  //circle

  stroke(72, 89, 97); // an RGB color for the circle's border
  fill(96, 142, 163); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  rect(290,390,500,250); // center of canvas, 20px dia

 stroke(151, 161, 166);
  fill(151, 161, 166); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(400,520,100,100); // center of canvas, 20px dia 

  line(560,450,750,450);

  line(560,550,750,550);
  stroke(72, 89, 97); 
  line(mouseX,mouseY,290,390); // center of canvas, 20px dia  
   strokeWeight(25);
     stroke(72, 89, 97); // an RGB color for the circle's border
  fill(74,245,199,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,100,100); // center of canvas, 20px dia


}

function mousePressed(){

if (dread>=255) {
	dread=0;
} else {
	dread= dread+5;
}
}

