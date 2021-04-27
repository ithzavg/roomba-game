const Robot = (canvas, obj) =>{
  const trashImg = new Image();
  const cleanImg = new Image();

  trashImg.src = ('/src/img/trash.svg');
  cleanImg.src = ('/src/img/clean.svg');

   if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0, 1355, 150);

    ctx.drawImage(trashImg, 150, 50, 50,50);
    ctx.drawImage(trashImg, 300, 50, 50, 50);
    ctx.drawImage(trashImg, 450, 50, 50,50);
    ctx.drawImage(trashImg, 600, 50, 50,50);
    ctx.drawImage(trashImg, 750, 50, 50,50);

    ctx.beginPath();
    ctx.fillStyle='#4398D1';
    ctx.arc(obj.x, obj.y, 50, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = '#126099';
    ctx.arc(obj.x, obj.y, 40, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();

   
    ctx.beginPath();
    ctx.fillStyle = '#87CED9';
    ctx.fillRect(obj.xElement,obj.yElement,25,38);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle='#E3584B';
    ctx.arc(obj.xA, obj.yA, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#FDB62F';
    ctx.fillRect(obj.xElement,obj.yB,7,5);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#FDB62F';
    ctx.fillRect(obj.xC,obj.yC,7,5);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(obj.xElement,obj.yD,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(obj.xElement,obj.yE,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(obj.xElement,obj.yF,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#126099';
    ctx.fillRect(obj.xElement,obj.yG,25,15);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(obj.xElement,obj.yH,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#126099';
    ctx.fillRect(obj.xI,obj.yI,8,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#126099';
    ctx.fillRect(obj.xJ,obj.yJ,8,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.font = "11px Fredoka One";
    ctx.lineWidth = 3;
    ctx.fillText("roomba", obj.xK, obj.yK);
    ctx.closePath();

    
    
  }
}

export default Robot;