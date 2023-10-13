function setup() 
{
    canvas = createCanvs(400,300)
    canvas.create()

    video = createCapture(VIDEO)
    video.size(400,300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function preload() 
{
    
}
function draw() 
{
    image(video, 0, 0, 400, 300)
    image(clown_nose, noseX, noseY, 30, 30)
}
function take_snapshot() 
{
    save("myjokerimg.png")
}
function modelLoaded()
{
    console.log("Model is intialized")
}
function gotPoses(results) 
{
    console.log(results);
    if (results.length > 0) 
    {
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
}