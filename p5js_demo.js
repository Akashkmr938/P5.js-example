let capture;
let slider = 0;
let val = -180;
let mousePosition = 0;
let wcenter, hcenter;
let x1;
let y1;
let x2;
let y2;
let x3;
let y3;

function setup() {
    createCanvas(windowWidth, windowHeight);
    x1 = 0;
    y1 = 0;
    x2 = width / 6;
    y2 = 0;
    x3 = width / 6;
    y3 = 30;
    wcenter = width / 2;
    hcenter = height / 2;
    capture = createCapture(VIDEO);
    capture.hide();
    slider = createSlider(-180, -7, -180);
    slider.position(width / 2.3, height / 1.5);
    slider.style('width', '200px');
}


function draw() {
    background(240);
    let val = slider.value();
    image(capture, width / 4, 0, width / 2, (width / 3.3) * ((capture.height / 3.2) / (capture.width / 3.5)));
    translate(width / 2, height / 2);
    textSize(15);
    text(val+180 +' degree', 0, 30, 100 ,100);
    stroke('#4372C4');
    fill('#4372C4');
    rotate((val * PI) / 180);
    triangle(x1, y1, x2, y2, x3, y3);
}

function mouseDragged() {
    if (mousePosition <= mouseX) {
        slider.value(val += 3);
    } else {
        slider.value(val -= 3);
    }
    mousePosition = mouseX;
}