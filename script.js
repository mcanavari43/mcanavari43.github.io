console.log('Hola')

// varibales que almacenaran los dos numeros de la suma;

var num1, num2;
// variable para guardar el resultado de la suma;

var respuesta;

// variable donde estara la opcion correcta

var indiceOpCorrecta;

// Los elementos que voy a manipular de la pagina

txt_suma = document.getElementById("suma");
op1 = document.getElementById("op1");
op2 = document.getElementById("op2");
op3 = document.getElementById("op3");
txt_msj = document.getElementById("msj");
txt_resultado = document.getElementById("resultado");

function comenzar(){
    // cada vez que inicie se limpian los campos
    txt_resultado.innerHTML = "?";
    txt_msj.innerHTML = "";

    //genero la suma aleatorios entre 0 y 9
    num1 = Math.round(Math.random()*9);
    num2 = Math.round(Math.random()*9);
    respuesta = num1 + num2;

    
    
    //asignamos la suma para que se visualize
    txt_suma.innerHTML= num1 + '+' + num2 + '=';
     
    // genero un numero entre 0 y dos para colocar la opcion correcta
    indiceOpCorrecta = Math.round(Math.random()*2)
    if(indiceOpCorrecta==0){
        op1.innerHTML = respuesta;
        op2.innerHTML = respuesta+1;
        op3.innerHTML = respuesta-1;
    }if(indiceOpCorrecta==1){
        //ponemos la opcion correcta en la primer posicion
        op2.innerHTML = respuesta;
        // al resto le doy numeros cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 2;
        op3.innerHTML = respuesta - 1;
    }
    if(indiceOpCorrecta==2){
        //ponemos la opcion correcta en la primer posicion
        op3.innerHTML = respuesta;
        // al resto le doy numeros cercanos a la respuesta correcta
        op1.innerHTML = respuesta + 2;
        op2.innerHTML = respuesta - 1;
    }
}

// funcion para chequear respuesta elegida por usuario

function controlarRespuesta(opcionElegida){
    // cargamos la respuesta elegida en la operacion
    txt_resultado.innerHTML = opcionElegida.innerHTML;

    // controlamos que este bien
    if(respuesta == opcionElegida.innerHTML){
        txt_msj.innerHTML = "EXCELENTE!!!"
        txt_msj.style.color = 'green';

        // esperamos dos segundos y volvemnos a llamar a la funcion comenzar
        setTimeout(comenzar,2000);
    } else {
        txt_msj.innerHTML = "INTENTA DE NUEVO!!!"
        txt_msj.style.color = "red"
        // esperamos dos segundos y limpiamos los campos
        setTimeout(limpiar,2000);
    }

}
comenzar();

function limpiar(){
    txt_resultado.innerHTML = '?';
    txt_msj.innerHTML = '';
}