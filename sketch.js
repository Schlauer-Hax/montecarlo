function setup() {
  createCanvas(600, 600);
}

document.getElementById('reset').addEventListener('click', () => {
  all = 0;
  inside = 0;
  points = []
});

let points = []
let all = 0;
let inside = 0;
function draw() {
  const punkte = document.getElementById('punkte').value;
  const malen = document.getElementById('malen').checked;

  function generatePoint() {
    const [x, y] = [random(0, 600), random(0, 600)]
    all++;
    if (dist(x, y, 300, 300) <= 300) {
      inside++;
    }
    if (malen) {
      points.push([x, y])
    }
  }

  background(220);
  stroke('')
  fill('white')
  circle(300, 300, 600)

  if (all < punkte) {
    // generate random point
    for (let i = 0; i < Math.min(punkte/100, punkte-all); i++) {
      generatePoint()
    }
  }

  points.forEach(([x, y]) => {
    if (dist(x, y, 300, 300) < 300) {
      fill('green')
    } else {
      fill('red')
    }
    circle(x, y, 5)

  });
  fill('white')
  rect(0, 0, 400, 100)
  fill('black')
  textSize(20)
  text('inside: ' + inside, 10, 30)
  text('all: ' + all, 10, 50)
  text('pi: ' + (inside / all) * 4, 10, 70)
}