//change these values to the desired xy position of the embedded animation
//eg, if the you want the animation to be at (100,200) change to 
// xPosition = 100;
// xPosition = 200;
var xPosition = 0;
var yPosition = 0;

//creating/positioning all elements
function setup() {
  noCanvas();

  //base boxes with title
  box1 = createImg("assets/1title.png");
  box1.size(150, 170);
  positionElement(box1, 577, 449);
  box2 = createImg("assets/2title.png");
  box2.size(150, 170);
  positionElement(box2, 661,321);
  box3 = createImg("assets/3title.png");
  box3.size(150, 170);
  positionElement(box3, 512,319);
  box4 = createImg("assets/4title.png");
  box4.size(150, 170);
  positionElement(box4, 596,191);
  box5 = createImg("assets/5title.png");
  box5.size(150, 170);
  positionElement(box5, 447,189);
  box6 = createImg("assets/6title.png");
  box6.size(150, 170);
  positionElement(box6, 531,60);


  //overlays to give the effect of glowing text (appear on hover)
  glow1 = createImg("assets/1glo.png");
  positionElement(glow1, 577,448);
  glow2 = createImg("assets/2glo.png");
  positionElement(glow2, 661,320);
  glow3 = createImg("assets/3glo.png");
  positionElement(glow3, 512,318);
  glow4 = createImg("assets/4glo.png");
  positionElement(glow4, 596,191);
  glow5 = createImg("assets/5glo.png");
  positionElement(glow5, 447,189);
  glow6 = createImg("assets/6glo.png");
  positionElement(glow6, 531,59);

  //vocabulary words (appear on click)
  text1 = createImg("assets/1txt.png");
  text1.size(420, 109);
  positionElement(text1, 180,500);
  text2 = createImg("assets/2txt.png");
  text2.size(379, 92);
  positionElement(text2, 810,363);
  text3 = createImg("assets/3txt.png");
  text3.size(408, 98);
  positionElement(text3, 130,365);
  text4 = createImg("assets/4txt.png");
  text4.size(429, 105);
  positionElement(text4, 745,219);
  text5 = createImg("assets/5txt.png");
  text5.size(469, 129);
  positionElement(text5, 0,230);
  text6 = createImg("assets/6txt.png");
  text6.size(474, 130);
  positionElement(text6, 80,80);
}

//push effects to screen
function draw() {
  box1Change();
  box2Change();
  box3Change();
  box4Change();
  box5Change();
  box6Change();
}


//places element based on given location
function positionElement(thisElement, thisX, thisY){
  thisElement.position((thisX + xPosition),(thisY + yPosition));
}

//determines if mouse is within box's range
function mouseLocation(minX, maxX, minY, maxY){
  if (winMouseX > (minX+ xPosition) && winMouseX < (maxX + xPosition) && winMouseY > (minY + yPosition) && winMouseY < (maxY + yPosition)){
    return true;
  }
  else{
    return false;
  }
}


//induvidual functions for showing/hiding boxes
//kept separate to impliment induvidual actions??
function box1Change() {
  if (mouseLocation(590,710,465,600)){
  	glow1.show();
  	showText(text1);
  }
  else{
  	text1.hide();
  	glow1.hide();
  }
}

function box2Change() {
  if (mouseLocation(680,800,340,460)){
  	glow2.show();
  	showText(text2);
  }
   else{
  	text2.hide();
  	glow2.hide();
  }
}

function box3Change() {
  if (mouseLocation(530,650,340,460)){
  	glow3.show();
  	showText(text3);
  }
   else{
  	text3.hide();
  	glow3.hide();
  }
}

function box4Change() {
  if (mouseLocation(605,725,200,320)){
  	glow4.show();
   	showText(text4);
  }
  else{
  	text4.hide();
  	glow4.hide();
  }
}

function box5Change() {
  if (mouseLocation(460,580,200,320)){
  	glow5.show();
  	showText(text5);
  }
   else{
  	text5.hide();
  	glow5.hide();
  }
}

function box6Change() {
  if (mouseLocation(550,670,75,195)){
  	glow6.show();
  	showText(text6);
  }
   else{
  	text6.hide();
  	glow6.hide();
  }
}



//keeps track of number of clicks- click on or click off
var count = 0;
function mouseClicked(){
	count++;
}


function showText(thisText){
  //if mouse has been clicked once, show text 
	if (count%2==1){
  	thisText.show();
  }
  //if mouse has been clicked twice, hide text
  else if(count>0 && count%2==0) {
  	thisText.hide();
  }
}