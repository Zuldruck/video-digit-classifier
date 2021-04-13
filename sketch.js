let cam;
let handpose;

function drawCam() {
  translate(600, 0);
  scale(-1, 1);
  image(cam, 0, 0, 600, 450);
}

function setup() {
  createCanvas(600, 600);
  cam = createCapture(VIDEO);
  cam.hide();

  handpose = ml5.handpose(cam, () => {
    console.log('Handpose model loaded.')
  });
}

function draw() {
  background(220);
  drawCam();
}
