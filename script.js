


function calcular(){
var a = parseFloat(document.getElementById("valora").value)
var b = parseFloat(document.getElementById("valorb").value)
var c = parseFloat(document.getElementById("valorc").value)
var resultado1 = document.getElementById("res1")
var resultado2 = document.getElementById("res2")

var delta = parseFloat((b*b) - 4 * a * c)

var baskara1 = parseFloat(((-b + Math.sqrt(delta))/(2*a)).toFixed(2))
var baskara2 = parseFloat(((-b - Math.sqrt(delta))/(2*a)).toFixed(2))

resultado2.innerHTML = `Valor de Delta é: ${delta}`

if(delta > 0){
    resultado1.innerHTML = `A equação possui duas raízes reais: ${baskara1} e ${baskara2}`
    return
}else if(delta === 0){
    resultado1.innerHTML = `A equação possui uma raiz real: ${baskara1}`
    return 
}else{
    resultado1.innerHTML = 'Inexiste raiz real'
}



}