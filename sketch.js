// Camera capture
let cam;

// HandPose
let handpose;
let keypoints = [];

function drawCam() {
  push();
  translate(600, 0);
  scale(-1, 1);
  image(cam, 0, 0, 600, 450);
  pop();
}

function drawKeypoints() {
  push();
  translate(600, 0);
  scale(-1, 1);
  for (const keypoint of keypoints) {
    fill(0, 255, 0);
    noStroke();
    ellipse(keypoint.x, keypoint.y, 10, 10);
  }
  pop();
}

function gotHand(results) {
  if (results.length == 0) {
    keypoints = [];
    return;
  }
  const { landmarks } = results[0];
  keypoints = landmarks.map(landmark => ({ x: landmark[0], y: landmark[1] }));
}

function setup() {
  createCanvas(600, 600);
  cam = createCapture(VIDEO);
  cam.hide();

  handpose = ml5.handpose(cam, () => {
    console.log('Handpose model loaded.')
  });
  handpose.on('predict', gotHand);
}

function draw() {
  background(220);
  drawCam();
  drawKeypoints();
}
