let playing = false;

// Video
let video;
let flippedVideo;
var vid;
var bg;

var currentScene = 1;

function preload() {
  bg = loadImage("blkbg.jpg");
  vid = createVideo("videoprova.mp4");

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  
}

function draw() {
  background(220);
  if (currentScene == 1) drawScene1();
  if (currentScene == 2) drawScene2();
  if (currentScene == 3) drawScene3();
}

function keyPressed() {
  if (key == "k") {
    currentScene == 2;
    drawScene2();
  }
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}

function drawScene1() {
  image(bg, 0, 0);
  print("scena prima");
}

function drawScene3() {
  image(bg, 0, 0);
  print("scena terza");
}

function drawScene2() {
  createCanvas(0, 0);
  vid.size(displayWidth, displayHeight);
  vid.play();
  print("scena seconda");
  
  vid.onended(sayDone);
   clear();
}

function sayDone() {
  drawScene3();
}


