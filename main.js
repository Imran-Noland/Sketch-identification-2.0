function preload(){
classifier= ml5.imageClassifier("DoodleNet");
}
function setup(){
canvas= createCanvas(800, 600);
canvas.center();
background("white");

}
function draw(){

}
function clearCanvas(){
background("white");
}