function convert_number() {
    var numero = parseInt(document.getElementById("inserted-number").value);
    var numero_convertido = document.getElementById("received-value");
    var conv_type = document.getElementById("number-type").value;
    var conv_type_result = document.getElementById("received-number-type").value;

    if(document.getElementById("inserted-number").value.length == 0){
        document.getElementById("conversion-msg").innerHTML = "<b>Nenhum valor introduzido";
        document.getElementsById("form").reset();
    }

    //    
    // Cima decimal
    //

    if (conv_type == "decimal") {
        // Mais de 8 bits
        if (numero > 255 || numero < -128) {
            document.getElementById("inserted-number").value = "";
            document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";

        }
        else {
            // Baixo decimal
            if (conv_type_result == "decimal") {
                numero_convertido.value = numero;
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo binário
            else if (conv_type_result == "binario") {
                if(document.getElementById("negativo").checked == true){
                    if(numero > 0){
                        document.getElementById("conversion-msg").innerHTML = "<b>Não é decimal negativo!</b>";
                        document.getElementById("inserted-number").value = "";
                    }
                    else{
                        numero = 256 - Math.abs(numero);
                        numero_convertido.value = convertingfunc(numero,10,2);
                        document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
                    }
                } 
                else{
                    if(numero < 0){
                        document.getElementById("conversion-msg").innerHTML = "<b>Não é decimal positivo!</b>";
                        document.getElementById("inserted-number").value = "";
                    }else{
                        numero_convertido.value = convertingfunc(numero,10,2);
                        document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
                    }
                         
                }
            }
            // Baixo octal
            else if (conv_type_result == "octal") {
                numero_convertido.value = convertingfunc(numero,10,8);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo hexadecimal
            else if (conv_type_result == "hexa") {
                numero_convertido.value = convertingfunc(numero,10,16);
                document.getElementById("conversation-msg").innerHTML = "<b>Conversão feita!</b>"
            }
        }
    }




    //
    // Cima binário
    //




    else if (conv_type == "binario") {
        if (/[^01-]/.test(numero)) {
            document.getElementById("inserted-number").value = "";
            document.getElementById("received-value").value = "";
            document.getElementById("conversion-msg").innerHTML = "<b>O número não é valido!</b>";
        }
        
        else if (numero > 11111111) {
            document.getElementById("inserted-number").value = "";
            document.getElementById("received-value").value = "";
            document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }
        
        else {
            // Baixo decimal
            if (conv_type_result == "decimal") {
                if(document.getElementById("negativo").checked == true){
                    if(numero > 0){
                        document.getElementById("conversion-msg").innerHTML = "<b>Não é binomial positivo!</b>";
                        document.getElementById("inserted-number").value = "";
                    }
                    else{
                        
                        numero_convertido.value = parseInt(convertingfunc(numero,2,10)) + 256;
                        document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
                    }
                } 
                else{
                    if(numero < 0){
                        document.getElementById("conversion-msg").innerHTML = "<b>Não é binomial negativo!</b>";
                        document.getElementById("inserted-number").value = "";
                    }else{
                        numero_convertido.value = convertingfunc(numero,2,10);
                        document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
                    }
                         
                }
            }
            // Baixo binário
            else if (conv_type_result == "binario") {
                numero_convertido.value = numero;
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo octal
            else if (conv_type_result == "octal") {
                numero_convertido.value = convertingfunc(numero,2,8);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo hexadecimal
            else if (conv_type_result == "hexa") {
                numero_convertido.value = convertingfunc(numero,2,16);
                document.getElementById("conversation-msg").innerHTML = "<b>Conversão feita!</b>"
            }
        }
    }




    //
    // Cima octal
    //




    else if (conv_type == "octal") {
        if (numero > 377) {
            document.getElementById("inserted-number").value = "";
            document.getElementById("received-value").value = "";
            document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }
        else {
            // Baixo decimal
            if (conv_type_result == "decimal") {
                numero_convertido.value = convertingfunc(numero,8,10);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo binário
            else if (conv_type_result == "binario") {
                numero_convertido.value = convertingfunc(numero,8,2);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo octal
            else if (conv_type_result == "octal") {
                numero_convertido.value = numero;
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo hexadecimal
            else if (conv_type_result == "hexa") {
                numero_convertido.value = convertingfunc(numero,8,16);
                document.getElementById("conversation-msg").innerHTML = "<b>Conversão feita!</b>"
            }
        }
    }




    //
    // Cima Hexadecimal
    //




    else if (conv_type == "hexa") {
        if (convertingfunc(document.getElementById("inserted-number").value,16,10) > 255 ) {
            document.getElementById("inserted-number").value = "";
            document.getElementById("received-value").value = "";
            document.getElementById("conversion-msg").innerHTML = "<b>O número contém mais de 8 bits!</b>";
        }
        else {
            // Baixo decimal
            if (conv_type_result == "decimal") {
                numero_convertido.value = convertingfunc(document.getElementById("inserted-number").value,16,10);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo binário
            else if (conv_type_result == "binario") {
                numero_convertido.value = convertingfunc(document.getElementById("inserted-number").value,16,2);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo octal
            else if (conv_type_result == "octal") {
                numero_convertido.value = convertingfunc(document.getElementById("inserted-number").value,16,8);
                document.getElementById("conversion-msg").innerHTML = "<b>Conversão feita!</b>";
            }
            // Baixo hexadecimal
            else if (conv_type_result == "hexa") {
                numero_convertido.value = document.getElementById("inserted-number").value;
                document.getElementById("conversation-msg").innerHTML = "<b>Conversão feita!</b>"
            }
        }

    }
}

// Calculo Valores

function convertingfunc(n, fromBase, toBase) {
    return (parseInt(n.toString(), fromBase).toString(toBase));
  }

// Limpar texto 

function limparp() {
    document.getElementById("conversion-msg").innerHTML = "";
    document.getElementById("inserted-number").type = "number";
}

function clean(){
    document.getElementById("negativo").style.display = "none"
    document.getElementById("labelnegativo").style.display = "none"
}

// Mudar tipo de palavra

function funcaodinamica() {
    var conv_type = document.getElementById("number-type").value;
    var conv_type_result = document.getElementById("received-number-type").value;

    if (conv_type == "hexa") {
        document.getElementById("inserted-number").type = "text";
    } else document.getElementById("inserted-number").type = "number";
}

// Button negative

function checkbox(){
    var conv_type = document.getElementById("number-type").value;
    var conv_type_result = document.getElementById("received-number-type").value;

    if(conv_type == "decimal"){
        if(conv_type_result == "binario"){
            document.getElementById("labelnegativo").innerHTML = "Decimal negativo?"
            document.getElementById("negativo").style.display = "inline-block"
            document.getElementById("labelnegativo").style.display = "inline-block"
        }else{
            document.getElementById("negativo").style.display = "none"
            document.getElementById("labelnegativo").style.display = "none"
        }
    }
    else if(conv_type == "binario"){
            if(conv_type_result == "decimal"){
                document.getElementById("labelnegativo").innerHTML = "Binário negativo?"
                document.getElementById("negativo").style.display = "inline-block"
                document.getElementById("labelnegativo").style.display = "inline-block"
            }else{
                document.getElementById("negativo").style.display = "none"
                document.getElementById("labelnegativo").style.display = "none"
            }
    }
    else{
        document.getElementById("negativo").style.display = "none"
        document.getElementById("labelnegativo").style.display = "none"
    }  
}

