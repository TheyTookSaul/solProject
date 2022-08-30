
let x = 1;
let y = 2;
let z = y - x;

let s = "string omg crazy";

console.log("This is the value of s " + s);


function setup() {
    createCanvas(500, 500);
  }
  
  console.log("This is my first console log!! YIPPEEEEEEEE");

  function draw() {
    background(0, 0, 255);
    let c = color(255, 0, 0);
    fill(c);
    noStroke();
    rect(30, 20, 55, 55);

    stroke(255, 204, 0);
    strokeWeight(4);

    smooth();
    ellipse(150, 48, 36, 36);
    noSmooth();
    ellipse(100, 48, 36, 36);

    triangle(100, 400, 150, 200, 400, 400)

    line(30, 20, 85, 400);
  }

  