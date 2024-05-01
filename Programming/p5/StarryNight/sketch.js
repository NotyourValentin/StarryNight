var str1 = 0;
var m = 50;
var m1 = 50;
var m2 = 50;
var textfollowing = true;//text following mouse
var t = 0;
var t1 = 0;
var t2 = 0;

function setup() {
createCanvas(500, 500);
}

function draw() {
  // put drawing code here
background(48, 23, 64); //darkpurple
fill(255); //white
stroke(247, 241, 136); //lightyellow
strokeWeight(3);
ellipse(50, 50, str1, str1);
ellipse(450, 450, str1, str1);
ellipse(width / 2, height / 2, str1, str1);
ellipse(100, 100, str1, str1);
ellipse(225, 200, str1, str1);
ellipse(325, 300, str1, str1);
ellipse(475, 25, str1, str1);
ellipse(425, 75, str1, str1);
ellipse(460, 150, str1, str1);
ellipse(25, 475, str1, str1);//bottomleft
ellipse(25, 250, str1, str1);//centerleft
ellipse(250, 25, str1, str1);//topcenter
ellipse(50, 200, str1, str1);
ellipse(475, 250, str1, str1);
ellipse(250, 475, str1, str1)//bottomcenter
ellipse(270, 50, str1, str1);
ellipse(400, 25, str1, str1);
ellipse(50, 270, str1, str1);
ellipse(50, 400, str1, str1);
ellipse(75, 450, str1, str1);
ellipse(100, 325, str1, str1);
ellipse(275, 400, str1, str1);
ellipse(325, 425, str1, str1);
ellipse(175, 375, str1, str1);
ellipse(450, 300, str1, str1);
fill(m, m1, m2);
noStroke();
ellipse(375, 160, 90, 90);//moon
fill(t, t1, t2)
noStroke();
textFont("Brush Script MT");
textSize(20);
if (textfollowing){
text("Seeking the stars", mouseX, mouseY);
}
}

function mousePressed(){
if (str1 >= 5){
		str1 = 0;
}else{
str1 = str1+5;
}

m = random (0, 255);
m1 = random (0, 255);
m2 = random (0, 255);

t = random (0, 255);
t1 = random (0, 255);
t2 = random (0, 255);

textfollowing = !textfollowing;

}

