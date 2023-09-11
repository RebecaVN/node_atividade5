//Importando o módulo 
const readline = require('readline-sync')

const numero = parseInt(readline.question("Digite um número: \n"))
if(numero > 0){
    console.log("O número é positivo.");
}else{
    console.log("O número é negativo.");
}