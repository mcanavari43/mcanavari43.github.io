var valor = document.getElementById('valor');
// detecto el evento cuando se escribe el numero
// y llamo a la funcion convertir
valor.addEventListener('keyup', convertir)
txtResultado = document.getElementById('resultado');

unidad1 = document.getElementById('unidad1');
unidad2 = document.getElementById('unidad2');
// detecto el evento cuando se selecciona una unidad
// detecto el evento cuando se selecciona una unidad
unidad1.addEventListener('change', convertir);
unidad2.addEventListener('change', convertir);

//variable donde se calculara el resultado
var resultado;

function convertir(){
    // caso que no haya nada el input
    if(valor.value==''){
        return;
    }
    // tomo el numero del input y lo convierto a numerico
    numero = valor.value;
    numero = parseFloat(numero)

    if(unidad1.value == 'kilometro' && unidad2.value == 'kilometro'){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + "  Kilometro/s equivalen a "+ '' + resultado + ' Kilometro/s';
    }

    if(unidad1.value == 'kilometro' && unidad2.value == 'metro'){
        resultado = numero * 1000;
        txtResultado.innerHTML = numero + "  Kilometro/s equivalen a "+ '' + resultado + ' Metro/s';
    }

    if(unidad1.value == 'kilometro' && unidad2.value == 'centimetro'){
        resultado = numero * 10000;
        txtResultado.innerHTML = numero + "  Kilometro/s equivalen a "+ '' + resultado + ' Centimetro/s';
    }
    if(unidad1.value == 'metro' && unidad2.value == 'kilometro'){
        resultado = numero / 1;
        txtResultado.innerHTML = numero + "  Metro/s equivalen a "+ '' + resultado + ' Kilometro/s';
    }

    if(unidad1.value == 'metro' && unidad2.value == 'metro'){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + "  Metro/s equivalen a "+ '' + resultado + ' Metro/s';
    }

    if(unidad1.value == 'metro' && unidad2.value == 'centimetro'){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + "  Metro/s equivalen a "+ '' + resultado + ' Centimetro/s';
    }
    if(unidad1.value == 'centimetro' && unidad2.value == 'kilometro'){
        resultado = numero / 10000;
        txtResultado.innerHTML = numero + "  Centimetro/s equivalen a "+ '' + resultado + ' Kilometro/s';
    }

    if(unidad1.value == 'centimetro' && unidad2.value == 'metro'){
        resultado = numero / 100;
        txtResultado.innerHTML = numero + "  Centimetro/s equivalen a "+ '' + resultado + ' Metro/s';
    }

    if(unidad1.value == 'centimetro' && unidad2.value == 'centimetro'){
        resultado = numero * 100;
        txtResultado.innerHTML = numero + "  Centimetro/s equivalen a "+ '' + resultado + ' Centimetro/s';
    }
}