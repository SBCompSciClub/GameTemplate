let mouseDown;
let canvasElement;
let canvasContext;
let rx = 700;
let ry = 300;
function main()
{
    canvasElement = document.getElementById("CanvasPainter");
    let canvasElementStyle = window.getComputedStyle(canvasElement);
    canvasElement.width = parseInt(canvasElementStyle.width);
    canvasElement.height = parseInt(canvasElementStyle.height);
    canvasContext = canvasElement.getContext("2d");
    if (!canvasContext)
    {
        alert("Error: Couldn't create canvasContext");
    }
    canvasContext.fillStyle = "red";
    canvasContext.beginPath();
    canvasContext.rect(rx,ry,50,50);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
  //  console.log("asdf");
//    canvasElement.addEventListener('keydown',check,true);
    //console.log("jkl;");
}
function Draw()
{
    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasContext.fillStyle = "white";
    canvasContext.strokeStyle = "black"
    canvasContext.rect(0, 0, canvasElement.width, canvasElement.height);
    
    canvasContext.fillStyle = "red";
    canvasContext.beginPath();
    canvasContext.rect(rx,ry,50,50);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
}

function check(event) {
    console.log("qwer");
    var code = event.keyCode;
    switch (code) {
        case 37: 
            console.log("Left");
            rx+=-5;
            break; //Left key
            
        case 38: 
            console.log("Up"); 
            ry+=-5;
            break; //Up key
            
        case 39: 
            console.log("Right"); 
            rx+=5;
            break; //Right key
            
        case 40: 
            console.log("Down"); 
            ry+=5;
            break; //Down key
            
        default: alert(code); //Everything else
    }
    Draw();
}

main();
window.addEventListener('keydown',check,true);
