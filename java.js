const ctx = canvas.getContext('2d');

const maxY = 100;
const rangeY = 100;
let p=0;


animate();

function animate(){
p=p+0.02;
if (p>1){
p=0
}

const y=maxY-Math.abs(Math.sin(p*Math.PI))*rangeY;
ctx.clearRect(0,0,canvas.width,canvas.height);
requestAnimationFrame(animate);

const heartImage= new Image();
heartImage.src = "images/heart.png";

    ctx.drawImage(heartImage, 50,y,400,400);

ctx.font = "40px Arial";
ctx.textBasline = "middle";
ctx.textAlign = "center";
ctx.fillStyle = "white"
ctx.fillText("hello there", 260,450);
}


