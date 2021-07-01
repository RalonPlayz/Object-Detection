img = "";
status = ""

function preload()
{
    img = loadImage('dog_cat.jpg')
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(340, 130);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        consolr.error(error);
    }else
    {
        console.log(results);
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("aqua");
    text("Dog", 45, 75);
    noFill();
    stroke("aqua");
    rect(30, 60, 450, 350);

    fill("red");
    text("Cat", 320, 120);
    noFill();
    stroke("red");
    rect(300, 90, 270, 320);

}