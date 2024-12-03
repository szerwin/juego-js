//el juego selecciona un numero al azar
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")
let intento = document.getElementById("intento")
let intentos = 0


function revisarResultados(){
    intentos ++
    intento.textContent = intentos

    let numeroIngresado = parseInt(numeroEntrada.value)
    

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = " por favor ingresa un numero válido entre 1 y 100"
        return
    }

    if(numeroIngresado === numeroAzar){
        mensaje.textContent= "has adivinado el número, FELICITACIONES!!!!!"
        mensaje.style.color = "blue";
        numeroEntrada.disabled = true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent= "el número es mayor al ingresado!!!!!"
        mensaje.style.color = "red"; 
    }else {
        mensaje.textContent= "el número es menor al ingresado!!!!!"
        mensaje.style.color = "red";
    }

}