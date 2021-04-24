const Robot =() =>{
   var canvas =  document.getElementById('roomba');
   if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

  //ctx.translate(150, 20);

    ctx.beginPath();
    ctx.fillStyle='#4398D1';
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = '#126099';
    ctx.arc(100, 75, 40, 0, 2 * Math.PI);
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#87CED9';
    ctx.fillRect(88,38,25,38);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle='#E3584B';
    ctx.arc(101, 54, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#FDB62F';
    ctx.fillRect(88,51,7,5);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#FDB62F';
    ctx.fillRect(106,51,7,5);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(88,41,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(88,65,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(88,70,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#126099';
    ctx.fillRect(88,105,25,15);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#69B6C2';
    ctx.fillRect(88,111,25,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#126099';
    ctx.fillRect(51,78,8,3);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#126099';
    ctx.fillRect(141,78,8,3);
    ctx.closePath();

    ctx.beginPath();
    
    ctx.fillStyle = '#fff';
    ctx.font = "11px Fredoka One";
    ctx.lineWidth = 3;
    ctx.fillText("roomba", 81, 93);
    ctx.closePath();

    
  }
}

export default Robot;