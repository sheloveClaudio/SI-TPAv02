function convert_number() {
    const numero = document.getElementById("inserted-number").value;
    var conv_type = document.getElementById("number-type").value;
    
    if(conv_type=="decimal"){
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
    }
}

function calcular(a){
    const num = a;
    let x = a + 1;
    return(x);
}
function limparp(){
    document.getElementById("conversion-msg").innerHTML = "";
}