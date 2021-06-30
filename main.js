img = "";

function preload()
{
    img = loadImage('dog_cat.jpg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(340, 130)
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("aqua");
    text("Dog", 45, 75);
    noFill();
    stroke("aqua");
    rect(30, 60, 450, 350);
}