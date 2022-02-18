song = "";
leftWristX =0;
leftWristY =0;
rightWristX=0;
rightWristY=0;

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas= createCanvas(500,600);
    canvas.center();

    video = createCapture(VIDEO);
    

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on(video,gotPoses);
}

function modelLoaded() {
    console.log("poseet is initalized");
}

function gotPoses(results){

if (gotPoses.length > 0)
console.log(results);

leftWristX=results[0].pose.leftWrist.X;
leftWristY=results[0].pose.leftWrist.Y;
console.log("Left wrist x ="+leftWristX+"Left wrist y ="+leftWristY);

rightWristX=results[0].pose.rightWrist.X;
rightWristY=results[0].pose.rightWrist.Y;
console.log("Right wrist x ="+rightWristX+"Right wrist y ="+rightWristY);
}

function draw() {
    image(video,0,0,600,500);
}


function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}