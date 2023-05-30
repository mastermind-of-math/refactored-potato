function preload(){
    imgList = [loadImage("house_inside_2.jpg"), loadImage("house_inside.jpg"), loadImage("house.jpg"), loadImage("space.jpg"), loadImage("tree.jpg")];
}

img = ""

function setup(){
    canvas = createCanvas(810, 534);
    canvas.position(370, 140);
}

function modelLoaded(){
    console.log("modelLoaded");
}

function start(){
    img = imgList[localStorage.getItem("getId")]
}

function draw(){
    image(img, 0, 0, 600, 500);
    id = localStorage.getItem("getId");
    noFill()
    if(id == 0){
        stroke(255, 0, 0)
        strokeWeight(3);
        rect(270, 0, 200, 100);
        strokeWeight(1);
        text("Fan", 280, 20)
        stroke(0, 255, 0)
        strokeWeight(3);
        rect(450, 300, 140, 175);
        strokeWeight(1);
        text("Chair", 460, 320)
        stroke(0, 0, 255)
        strokeWeight(3);
        rect(80, 280, 350, 200);
        strokeWeight(1);
        text("Couch", 100, 300)
    } else if(id == 4){
        stroke(255, 0 , 255)
        strokeWeight(3);
        rect(50, 50, 500, 400);
        strokeWeight(1);
        text("Tree", 60, 70)
    } else if(id == 2){
        stroke(0, 255, 255)
        strokeWeight(3);
        rect(50, 50, 450, 350);
        strokeWeight(1);
        text("House", 60, 70)
    } else if(id == 3){
        stroke(255, 128, 0)
        strokeWeight(3);
        rect(110, 200, 170, 100);
        strokeWeight(1);
        text("Saturn", 120, 220)
        stroke(255, 255, 0)
        strokeWeight(3);
        rect(290, 200, 110, 100);
        strokeWeight(1);
        text("Planet", 300, 220)
    } else if(id == 1){
        stroke(255, 0, 0)
        strokeWeight(3);
        rect(350, 160, 250, 200);
        strokeWeight(1);
        text("TV", 370, 180)
        stroke(0, 255, 0)
        strokeWeight(3);
        rect(115, 135, 200, 325);
        strokeWeight(1);
        text("Staircase", 125, 155)
        stroke(0, 0, 255)
        strokeWeight(3);
        rect(220, 340, 350, 130);
        strokeWeight(1);
        text("Couch", 230, 360)
    }
}

function back(){
    window.location = "index.html"
}