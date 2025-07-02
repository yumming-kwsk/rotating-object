let frames = [];
let totalFrames = 60;
let pointerX;

function preload() {
  for (let i = 0; i < totalFrames; i++) {
    let filename = "frames/frame_" + nf(i, 3) + ".png";
    frames[i] = loadImage(filename);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0);

  if (touches.length > 0) {
    pointerX = touches[0].x;
  } else {
    pointerX = mouseX;
  }

  let index = floor(map(pointerX, 0, width, 0, totalFrames));
  index = constrain(index, 0, totalFrames - 1);

  let imgSize = min(width, height);
  image(frames[index], width / 2, height / 2, imgSize, imgSize);
}

// 画面サイズ変更対応
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
