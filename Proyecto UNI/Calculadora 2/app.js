function sumar(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let casillaResultado = document.getElementById("resultado");

    let resultado = parseInt(num1) + parseInt(num2);
    casillaResultado.value = resultado;
}

function restar(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let casillaResultado = document.getElementById("resultado");

    let resultado = parseInt(num1) - parseInt(num2);
    casillaResultado.value = resultado;
}

function multiplicar(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let casillaResultado = document.getElementById("resultado");

    let resultado = parseInt(num1) * parseInt(num2);
    casillaResultado.value = resultado;
}

function dividir(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    let casillaResultado = document.getElementById("resultado");

    let resultado = parseInt(num1) / parseInt(num2);
    casillaResultado.value = resultado;
}

function potencia(base, exponente){
    base = document.getElementById("numero1").value;
    exponente = document.getElementById("numero2").value;
    let casillaResultado = document.getElementById("resultado");

    let resultado = Math.pow(base, exponente);
    casillaResultado.value = resultado;
}

function raiz(){
    let num = document.getElementById("numero1").value;
    let casillaResultado = document.getElementById("resultado");

    let resultado = Math.sqrt(num);
    casillaResultado.value = resultado;
}

function absoluto(){
    let num = document.getElementById("numero1").value;
    let casillaResultado = document.getElementById("resultado");

    let resultado = Math.abs(num);
    casillaResultado.value = resultado;
}

function random(){
    let casillaResultado = document.getElementById("resultado");

    let resultado = Math.random()*1001;
    casillaResultado.value = resultado;
}

function round(){
    let casillaResultado = document.getElementById("resultado");
    let resultado = Math.round(casillaResultado.value); 

    casillaResultado.value = resultado;
}

function floor(){
    let casillaResultado = document.getElementById("resultado");
    let resultado = Math.floor(casillaResultado.value); 

    casillaResultado.value = resultado;
}

function ceil(){
    let casillaResultado = document.getElementById("resultado");
    let resultado = Math.ceil(casillaResultado.value); 

    casillaResultado.value = resultado;
}

function limpiar(){
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").value = "";
}
