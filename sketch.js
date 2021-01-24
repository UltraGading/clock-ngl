var hr, min, sec, end, end2, end3

function setup() {
createCanvas(800,400);
angleMode(DEGREES);
}

function draw() {
background(130,121,32);
fill(31,113,182);
textSize(24);
textStyle("bold");
text("a clock lol", 100,400); 
text("sliced up rings with a stick in the middle",50,450);
translate(200,200)
rotate (-90);
hr = hour();
min = minute();
sec = second();
strokeWeight(8);
stroke(166,139,75);
noFill();
end = map(sec,0,60,0,360);
arc(0,0,300,300,0,end);
stroke(90,48,230);
end2 = map(min,0,60,0,360);
arc(0,0,280,280,0,end2);
stroke(159,68,107);
end3 = map(hr%12,0,12,-0,360);
arc(0,0,260,260,0,end3);
rotate(end);
stroke(211,110,67);
line(0,0,100,0);
pop();
push();
rotate(end2);
stroke(226,236,84);
line(0,0,75,0);
pop();
push();
rotate(end3);
stroke(163,55,170);
line(0,0,50,0);
pop();
stroke(98,165,40);
point (0,0);
drawSprites();
}