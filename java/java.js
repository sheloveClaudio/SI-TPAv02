function convert_number() {
    var numero = document.getElementById("inserted-number").value;
    var conv_type = document.getElementById("number-type").value;
    
    if(conv_type == "decimal"){
        if (numero > 255 || numero < -128) {
        document.getElementById("form").reset();
        document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }else{
            document.getElementById("recived-value").value = calcular(numero);
            document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
        }
        if (numero == 0) {
            document.getElementById("form").reset();
            document.getElementById("conversion-msg").innerHTML = "<b>Nenhum número inserido!</b>";
            }
    }else if(conv_type == "binario"){
        if(numero > 11111111){
            document.getElementById("form").reset();
        document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }
        else if(verify(numero) == false){
            document.getElementById("form").reset();
            document.getElementById("conversion-msg").innerHTML = "<b>O número não é valido!</b>";
        }
        else{

        }
    }else if(conv_type == "octal"){

    }
}


function verify(num){
    while (num != 0) {

        // If the digit is greater
        // than 1 return false
        if (num % 10 > 1) {
            return false;
        }
        num = num / 10;
    }
    return true;
}

function calcular(a){
    const num = a;
    let x = a + 1;
    return(x);
}
function limparp(){
    document.getElementById("conversion-msg").innerHTML = "";
}