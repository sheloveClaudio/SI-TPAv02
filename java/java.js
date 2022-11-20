function convert_number() {
    var numero = parseInt(document.getElementById("inserted-number").value);
    var numero_convertido = document.getElementById("received-value");
    var conv_type = document.getElementById("number-type").value;
    var conv_type_result = document.getElementById("received-number-type").value;   


// Caixa vazia
if (numero == 0) {
    document.getElementById("form").reset();
    document.getElementById("conversion-msg").innerHTML = "<b>Nenhum número inserido!</b>";
    }

//    
// Cima decimal
//




    if(conv_type == "decimal"){
        // Mais de 8 bits
        if (numero > 255 || numero < -128) {
        document.getElementById("form").reset();
        document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }else{
            // Baixo decimal
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
                numero_convertido.value = calculodecimaloct(numero);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";    
            }
            // Baixo hexadecimal
            else if(conv_type_result == "hexa"){
                numero_convertido.value = calculodecimalhex(numero);
                document.getElementById("conversation-msg").innerHTML = "<b>Conversão feita!</b>"
            }      
        }
    }




//
// Cima binário
//




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
            // Baixo decimal
            if(conv_type_result == "decimal"){
                numero_convertido.value = calculobinariodec(numero);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo binário
            else if(conv_type_result == "binario"){
                numero_convertido.value = numero;
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";    
            }
            // Baixo octal
            else if(conv_type_result == "octal"){
                numero_convertido.value = calculobinariooct(numero);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";    
            }
            // Baixo hexadecimal
            else if(conv_type_result == "hexa"){
                numero_convertido.value = calculobinariohex(numero);
                document.getElementById("conversation-msg").innerHTML = "<b>Conversão feita!</b>"
            }
        }
    }




//
// Cima octal
//




    else if(conv_type == "octal"){
        if(numero > 377){
            document.getElementById("form").reset();
            document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }
        else{
            // Baixo decimal
            if(conv_type_result == "decimal"){
                numero_convertido.value = calculooctaldec(numero);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo binário
            else if(conv_type_result == "binario"){
                numero_convertido.value = calculooctalbin(numero);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";    
            }
            // Baixo octal
            else if(conv_type_result == "octal"){
                numero_convertido.value = numero;
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";    
            }
            // Baixo hexadecimal
            else if(conv_type_result == "hexa"){
                numero_convertido.value = calculooctalhex(numero);
                document.getElementById("conversation-msg").innerHTML = "<b>Conversão feita!</b>"
            }
        }
    }
}

// Verificação Binal

function verify(num){
    // Analisa cada alg 1 a 1 para ver se é maior que 1 ou não
    let c = 0;
    let v = 0;
    while(num != 0){      
        if(parseInt(num % 10) == 1 || parseInt(num % 10) == 0){
            c = c+1;
            v = v+1;  
    }
    num = num / 10;
    if(c==v){
        return true;
    }else return false;
}
}

// Calculo Decimal --> Outros

function calculodecimalbin(a){
    const fim = a.toString(2);
    return(fim);
}

function calculodecimaloct(a){
    const fim = a.toString(8);
    return(fim);
}

function calculodecimalhex(a){
    const fim = a.toString(16).toUpperCase();
    return(fim);
}

// Calculo Binario --> Outros

function calculobinariodec(a){
    const fim = parseInt(a, 2);
    return(fim);
}

function calculobinariooct(a){
    const fim = parseInt(a,2).toString(8);
    
    return(fim);
}

function calculobinariohex(a){
    const fim = parseInt(a,2).toString(16).toUpperCase();
    return(fim);
}

// Calculo Octal --> Outros

function calculooctaldec(a){
    const fim = parseInt(a,8);
    return(fim);
}

function calculooctalbin(a){
    const fim = parseInt(a,8).toString(2);
    return(fim);
}

function calculooctalhex(a){
    const fim = parseInt(a,8).toString(16).toUpperCase();
    return(fim);
}

// Limpar texto 

function limparp(){
    document.getElementById("conversion-msg").innerHTML = "";
}