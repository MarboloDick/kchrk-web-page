let itter = 30;
let step = 2;
let noiseMax = 0.9;
let phase = 0;
let radiusMax = 8;
let woff = 100;
let hoff = 100;

function setup() {
  pixelDensity(2);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '0');
  canvas.style('position', 'fixed');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '0');
  canvas.style('position', 'fixed');
}

function draw() {
  background(24, 25, 26);
  stroke(252, 196, 87);
  noFill();
  if(windowWidth <= 480) {
    radiusMax = 5;
    woff = 55;
    hoff = 65;
  } else {
    radiusMax = 8;
    woff = 100;
    hoff = 100;
  }
  translate(woff, hoff);
  for (let i = 2; i < itter; i += step) {
    let decay = i * 5;
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.01) {
      strokeWeight(2);
      let xoff = map(cos(angle+phase), -1, 1, 0, noiseMax);
      let yoff = map(sin(angle+phase), -1, 1, 0, noiseMax);
      let radius = map(noise(xoff, yoff), 0, 1, radiusMax-1, radiusMax) * decay;
      let x = radius * cos(angle);
      let y = radius * sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  phase += 0.0125;
}
