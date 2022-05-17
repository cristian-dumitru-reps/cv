const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
const ctx2 = canvas.getContext("2d");

var general_index = 0;
var sources = [
  "assets/images/beta.png",
  "assets/images/beta2.png",
  "assets/images/beta3.png",
  "assets/images/beta4.png",
  "assets/images/beta5.png",
  "assets/images/beta6.png",
  "assets/images/beta7.png",
  "assets/images/beta8.png",
  "assets/images/beta9.png",
  "assets/images/beta10.png",
  "assets/images/beta5.png",
];

var sources_second = [
  "red",
  "maroon",
  "purple",
  "fuchsia",
  "green",
  "lime",
  "navy",
  "blue",
  "teal",
  "aqua	",
  "orange",
];

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = 400);

let isDragging = false;

/* Helper functions */
const clamp = (val, min, max) => Math.min(Math.max(min, val), max);

const dist = (obj1, obj2) =>
  Math.sqrt((obj1.y - obj2.y) ** 2 + (obj1.x - obj2.x) ** 2);

const angleTo = (obj1, obj2) => Math.atan2(obj1.y - obj2.y, obj1.x - obj2.x);

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/* Element classes */
class Circle {
  constructor(x, y, r, c, z) {
    this.r = r;
    this.image = z;
    this.color = c || "white";
    this.x = x;
    this.y = y;
    this.vx = this.vy = 0;
  }

  draw() {
    const { x, y, r, color, z } = this;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r * 10, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    var thumbImg = document.createElement("img");
    thumbImg.src = sources[general_index];
    // console.log(sources[general_index]);
    ctx.drawImage(thumbImg, x, y, r * 3, r * 3);
    // var colore = sources_second[general_index];
    // ctx.fillStyle = colore;
    // ctx.fill();
    // console.log("Ho disegnato: " + thumbImg.src);
    general_index++;
    if (general_index == 10) {
      general_index = 0;
    }
    ctx.beginPath();
    ctx.arc(x, y, r * 10, 0, Math.PI * 2, true);
    ctx.clip();
    ctx.closePath();
    ctx.restore();
  }

  _bounded() {
    const { x, y, r } = this;
    this.x = clamp(x, r, width - r);
    this.y = clamp(y, r, height - r);
  }

  update(fn, bound) {
    if (fn) fn.call(this, this);
    if (bound) this._bounded();
    this.draw();
  }
}

/* controllable params */
// ...constant variables that won't change on runtime

/* environmental vars */
// ...variables that change during runtime

/* canvas elements */
const circles = [];

/* Initial set-up */
function init() {
  console.log("Prima questss");
  let circle, intersect;
  while (circles.length < 10) {
    circle = new Circle(rand(60, width), rand(60, height), rand(30, 40));
    console.log("General index:", general_index);
    intersect = false;
    for (const circ of circles) {
      if (dist(circ, circle) <= circ.r * 3 + circle.r * 3) {
        intersect = true;
        break;
      }
    }

    if (intersect) continue;
    circle.vx = circle.vy = 1.3;
    circles.push(circle);
  }
}

/* Main animation routine */
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, width, height);

  // check collision
  for (const circle of circles) circle.color = "white";

  let obj1, obj2, mag;
  for (let i = 0; i < circles.length; i++) {
    obj1 = circles[i];

    for (let j = i + 1; j < circles.length; j++) {
      obj2 = circles[j];
      mag = dist(obj1, obj2);

      if (mag <= obj1.r + obj2.r) {
        obj1.color = obj2.color = "white";

        // calculate normal unit vector
        const nx = (obj1.x - obj2.x) / mag,
          ny = (obj1.y - obj2.y) / mag;

        // relative velocity
        const dvx = obj1.vx - obj2.vx,
          dvy = obj1.vy - obj2.vy;

        // dot product of rel velocity & normal
        const dp = nx * dvx + ny * dvy;

        obj1.vx -= dp * nx;
        obj1.vy -= dp * ny;
        obj2.vx += dp * nx;
        obj2.vy += dp * ny;
      }
    }
  }

  // draw elements
  for (const circ of circles) {
    circ.update(function () {
      this.x += this.vx;
      this.y += this.vy;

      // rebound on edge hit
      const { x, y, r } = this;
      if (x < r || x > width - r) this.vx *= -1;
      if (y < r || y > height - r) this.vy *= -1;
    }, true);

    // draw velocity vector
    ctx.beginPath();
    ctx.moveTo(circ.x, circ.y);
    ctx.strokeStyle = "#333";
    ctx.stroke();
    ctx.closePath();
  }
}

init();
animate();

/* Event Listeners */
window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
