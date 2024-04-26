let mic;

function setup(){
  let cnv = createCanvas(100, 100);
  textAlign(CENTER);
  mic = new SinOsc();
  mic.start();
}

function draw(){
  background(0);
  fill(255);
  text('tap to start', width/2, 20);

  //micLevel = mic.getLevel();
  let y = height - micLevel * height;
  ellipse(width/2, y, 10, 10);
}