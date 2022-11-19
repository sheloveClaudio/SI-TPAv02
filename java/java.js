function convert_number() {
    var numero = parseInt(document.getElementById("inserted-number").value);
    var numero_convertido = document.getElementById("received-value");
    var conv_type = document.getElementById("number-type").value;
    var conv_type_result = document.getElementById("received-number-type").value;   
    
    // Cima decimal
    if(conv_type == "decimal"){
        // Mais de 8 bits
        if (numero > 255 || numero < -128) {
        document.getElementById("form").reset();
        document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }else{
            // Baixo decinal
            if(conv_type_result == "decimal"){
                numero_convertido.value = numero;
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo binário
            else if(conv_type_result == "binario"){
                numero_convertido.value = calculodecimalbin(numero);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";    
            }
            // Baixo octal
            else if(conv_type_result == "octal"){
                numero_convertido.value = calcular(numero);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";    
            }      
        }
        // Caixa vazia
        if (numero == 0) {
            document.getElementById("form").reset();
            document.getElementById("conversion-msg").innerHTML = "<b>Nenhum número inserido!</b>";
            }
    }
// Cima binário
    else if(conv_type == "binario"){
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
    }
// Cima octal
    else if(conv_type == "octal"){

    }
}

// Verificação Binal

function verify(num){
    // Analisa cada alg 1 a 1 para ver se é maior que 1 ou não
    while (num != 0) {
        if (num % 10 > 1) {
            return false;
        }
        num = num / 10;
    }
    return true;
}

// Calculo

function calculodecimalbin(a){
    const fim = a.toString(3);
    return(fim);
}

// Limpar texto 

function limparp(){
    document.getElementById("conversion-msg").innerHTML = "";
}