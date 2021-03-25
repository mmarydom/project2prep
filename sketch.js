let bodyType = ['goat', 'bat', 'worm', 'frog', 'bird of prey', 'robot', 'weasel', 'ghost', 'gnome', 'shark', 'tiger', 'lumberjack', 'dolphin', 'spider', 'monster', 'fish', 'octopuss', 'mysterious stranger', 'war machine', 'farmer', 'rat', 'wolf', 'yeti', 'zombie', 'flower', 'tree', 'extraterrestrial'];
//let challenge = ['pen', 'pencil', 'crayon', 'oil pastel', 'marker', 'any material'];

let mr;
let gr;
let br;
let cr;

let rc = 20;
let gc = 100;
let bc = 250;

let wrds1;
let wrds2;
let wrds3;
let wrds4;

let button;

let myFont;
function preload() {
  myFont = loadFont('lib/Lato-Bold.ttf');
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  button = createButton('CLICK ME!');
  button.parent('button-holder');
  button.mousePressed(buttonPressed);

  background(0);
  frameRate(60);
  textFont(myFont);
  intText();
  //fortBall();
  console.log(bodyType[int(random(bodyType.length))]);
  console.log('bodyType array length ' + bodyType.length);
  //console.log('challenge array length ' + challenge.length)

}

function draw() {
}

function buttonPressed() {
  var myVar = setInterval(bgAni, 100);
  setTimeout(function(){ clearInterval(myVar); }, 1500);
  setTimeout(function(){textRender()}, 1501);

}

function textRender() {
  mr = int(random(bodyType.length));
  gr = int(random(bodyType.length));
  br = int(random(bodyType.length));
  while (gr === mr || gr === br) {
  	gr = int(random(bodyType.length));
  }
  while (br === mr) {
    br = int(random(bodyType.length));
  }
  wrds1 = 'The head of a ' + bodyType[mr] + '.';
  wrds2 = 'The body of a ' + bodyType[gr] + '.';
  wrds3 = 'The legs of a ' + bodyType[br] + '.';

  //cr = int(random(challenge.length));
  //wrds4 = challenge[cr];

  fortText();
}

function bgAni() {
  rc = random(10, 245);
  gc = random(10, 245);
  bc = random(10, 245);
  background(rc, gc, bc);
}

function fortBall() {
  fill(rc, gc, bc);
  ellipse(width*0.5,height*0.45, 100);
}

function intText() {
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text('Click the button for a drawing prompt!', width*0.5, height*0.5);
}

function fortText() {
  background(0);
  //intText();
  //fortBall();
  fill(255);
  textAlign(CENTER);
  textSize(14);
  //this is a lie, you can click anywhere
  text('Click the button for another prompt!', width*0.5, height*0.8);
  textSize(22);
  text('Draw a figure that has:', width*0.5, height*0.3);
  textSize(18);
  text(wrds1, width*0.5, height*0.45);
  text(wrds2, width*0.5, height*0.55);
  text(wrds3, width*0.5, height*0.65);

}
