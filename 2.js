var qtde_abacate = parseInt(prompt("Quantos abacates?"));

if(qtde_abacate >= 12){
    valor_total = qtde_abacate = 4;
}else{
    valor_total = qtde_abacate = 5;
}

alert("R$ "+valor_total.toFixed(2));
