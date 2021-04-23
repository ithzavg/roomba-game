window.addEventListener('load', mira);

const Robot = () => {
    console.log("carga 2")
    const  template = `<button id="button" onclick="mira()">Hola</button>`
    return template;
}

const agrega = null || document.getElementById('testing');
agrega.innerHTML = Robot();

function mira(){
    console.log('evento detectado 1');
}



/*const mira = () => {
    console.log('evento detectado 1');
}*/


//const boton = document.getElementById('button');
//boton.addEventListener("click", mira);











