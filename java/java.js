function convert_number(){
    var numero = document.getElementById("inserted-number").value;
    var conv_type = document.getElementById("number-type");
    var conv_type = e.conv_type
    if(conv_type=="decimal")
        if(numero > 255 || numero < -128)
            alert("O número tem mais que 8 bits!");
}