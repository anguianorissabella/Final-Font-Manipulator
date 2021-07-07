noseX = 0;
noseY = 0;
diffrence = 0;
leftWristX = 0;
rightWristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(550, 500)
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97')

    fill('purple');
    stroke('purple');
    textSize(diffrence)
    text("Rissabella", noseX, noseY);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
}

function gotPoses(results) {

    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);
    }
}