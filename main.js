mx=0;
my=0

function preload() {
img=loadImage('mumbustache.png');
}
function setup(){
    Canvas=createCanvas(375,300);
    Canvas.center();
    cam=createCapture(VIDEO);
    cam.size(375,300);
    cam.hide();
    net=ml5.poseNet(cam,modelloaded);
    net.on('pose',gotposes);
    img.resize(100,75)
}
function draw(){
    image(cam,0,0,375,300);
   image(img,mx,my,30,30);
}
function ohsnap(){
    save("mustache.png");
}
function modelloaded(){
    console.log("woohoo !!! your model is loaded.");
}
function gotposes(results){
    
    if(results.length>0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        mx=results[0].pose.nose.x-25;
        my=results[0].pose.nose.y+10; 

    }

}
