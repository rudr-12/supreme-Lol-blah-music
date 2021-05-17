song = "";

function preload() {
sound = loadSound("https://www.youtube.com/watch?v=OLTvV4cj5rw");
}
scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

LeftWristX = 0;
LeftWristY = 0;

function setup() {
canvas = createCanvas(600, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");
}
function draw(){
    image(video,0,0,600,500);
}
function play() {
song.play();
song.setVolume(1);
song.rate(1);    
}song = "";

function preload()
{
	song = loadSound("music.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;
