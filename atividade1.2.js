/*2. Crie um algoritmo que pergunte 5 números ao usuário, coloque em um array, depois exiba tal array. Modifique os 
elementos do array de modo que a sequência de números fique ao contrário. 
Ex.: se digitou 1, 2, 3,4, 5 tem que ficar 5, 4, 3, 2 , 1*/

var array = []
var arraySuporte = []
var contador = 4

for(var index = 0; index < 5; index++){
 array[index] = parseInt(prompt("insira um numero"))
}console.log(array)

for(var index = 0; index < 5; index++){
 arraySuporte[contador] = array[index]
 contador--
}console.log(arraySuporte)
