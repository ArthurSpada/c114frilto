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
        narizx=0;
        narizy=0;
        console.log("nariz x =" + results[0].pode.nose.x);
        console.log("nariz y =" + results[0].pode.nose.y);
    }
}
function draw(){
image(video,0,0,300,300);

}
function take_snapshot(){
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

