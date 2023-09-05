narizx=0;
narizy=0

function preload(){
    bigodaodao= loadImage('Bigodaodao.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet foi inicializado');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        narizx=results[0].pose.nose.x;
        narizy=results[0].pose.nose.y;
        console.log("nariz x =" + results[0].pose.nose.x);
        console.log("nariz y =" + results[0].pose.nose.y);
    }
}
function draw(){
image(video,0,0,300,300);
image(bigodaodao,narizx-27.5,narizy-5,60,60);
}
function takeSnapshot(){
    save('myFilterImage.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

