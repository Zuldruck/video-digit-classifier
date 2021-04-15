// Camera capture
let cam;

// HandPose
let handpose;
let keypoints = [];

// Own Neural Network
const neuralNetworkOptions = {
  task: 'classification',
  inputs: 42,
  outputs: 5,
};
const modelDetails = {
  model: 'model/model.json',
  metadata: 'model/model_meta.json',
  weights: 'model/model.weights.bin'
};
const trainingOptions = {
  epochs: 10,
  batchSize: 12,
};
let neuralNetwork;
let modelLoaded = false;

// Classified label
let label = '';

function onHandCapture(results) {
  if (results.length == 0) {
    keypoints = [];
    return;
  }
  const { landmarks } = results[0];
  keypoints = landmarks.map(landmark => ({ x: landmark[0], y: landmark[1] }));
  const inputs = [];
  for (const { x, y } of keypoints) {
    inputs.push(x);
    inputs.push(y);
  }
  if (modelLoaded)
    neuralNetwork.classify(inputs, (_, results) => label = results[0].label);
}

function onModelLoad() {
  console.log('Neural network model loaded.');
  modelLoaded = true;
}

function setup() {
  createCanvas(600, 450);
  cam = createCapture(VIDEO);
  cam.hide();

  handpose = ml5.handpose(cam, () => console.log('Handpose model loaded.'));
  handpose.on('predict', onHandCapture);

  neuralNetwork = ml5.neuralNetwork(neuralNetworkOptions);
  neuralNetwork.load(modelDetails, onModelLoad);
}

function drawCam() {
  push();
  translate(600, 0);
  scale(-1, 1);
  image(cam, 0, 0, 600, 450);
  filter(INVERT);
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

function draw() {
  background(220);
  drawCam();
  drawKeypoints();
  textSize(46);
  fill(0, 0, 0);
  text(label, 30, 50);
}
