status = "";
function setup(){
canvas = createCanvas(480, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(480, 380);
video.hide();
}
function start(){
objectDetector = ml5.objectDetector('cocossd',modeloaded);
document.getElementById("status").innerHTML = "Status : object Detected";
}
function modeloaded(){
console.log("Model loaded");
status = true;
}
function draw(){
image(video,0,0,480,380);
 }