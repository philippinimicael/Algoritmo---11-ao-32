//////////
////////// EXERCÍCIO 11 //////////
//////////

function exercicio11() {

let texto11 = "Aprendendo Algoritmo"
console.log(texto11)
document.getElementById("ex11").innerHTML = (texto11)

}

//////////
////////// EXERCÍCIO 12 //////////
//////////

function exercicio12() {

let texto12 = "Aprendendo Algoritmo \ne Fazendo muito Exercício \nPrimeiro fazendo exercício em 'Javascript'"
console.log(texto12)
document.getElementById("ex12").innerText = (texto12)

}

//////////
////////// EXERCÍCIO 13 //////////
//////////

function exercicio13 () {

let nomeex13 = prompt("Digite seu nome:")
let idadeex13 = prompt("Digite sua idade:")
console.log("Você se chama: " + nomeex13 + " e tem " + idadeex13 + " anos.")
document.getElementById("ex13").innerHTML = ("Você se chama: " + nomeex13 + " e tem " + idadeex13 + " anos.")

}

//////////
////////// EXERCÍCIO 14 //////////
//////////

function exercicio14() {

let numero1ex14 = parseFloat(+prompt("Digite o primeiro número inteiro: "));
let numero2ex14 = parseFloat(+prompt("Digite o segundo número inteiro: "));

console.log("Valores Digitados: ")
console.log("Número 1: " + numero1ex14)
console.log("Número 2: " + numero2ex14)

let numero1Incrementado = numero1ex14 + 1
let numero2Decrementado = numero2ex14 - 1

console.log("Resultados: ")
console.log("Número 1 Incrementado: " + numero1Incrementado);
console.log("Número 2 Decrementado: " + numero2Decrementado);

document.getElementById("ex14").innerHTML = (`Números inicias foram: ${numero1ex14} e ${numero2ex14} <br> Número 1 Incrementado: ${numero1Incrementado } <br> Número 2 Decrementado: ${numero2Decrementado}`)

}

//////////              
////////// EXERCÍCIO 15 //////////
//////////

function exercicio15() {

let num1ex15 = +prompt("Insira o Primeiro Número:")
let num2ex15 = +prompt("Insira o Segundo Número:")
let num3ex15 = +prompt("Insira o Terceiro Número:")
let num4ex15 = +prompt("Insira o Quarto Número:")
let num5ex15 = +prompt("Insira o Quinto Número:")

let somaex15 = (num1ex14 + num2ex14 + num3ex14 + num4ex14 + num5ex14)
// let totalex15 = ("Os números digitador foram: " + num1ex15 + ", " + num2ex15 + ", " + num3ex15 + ", " + num4ex15 + ", " + num5ex15 + " e sua soma é: " + somaex15)//
let totalex15 = `Os números digitados foram: ${num1ex15}, ${num2ex15}, ${num3ex15}, ${num4ex15}, ${num5ex15} e sua soma é: ${somaex15}`;
console.log(totalex15)
document.getElementById("ex15").innerHTML = (totalex15)

}

//////////
////////// EXERCÍCIO 16 //////////
//////////

function exercicio16() {

let num1ex16 = +prompt("Digite o Primeiro Número:");
let num2ex16 = +prompt("Digite o Segundo Número:");
let mensagem1ex16 = `Os números digitados foram ${num1ex16} e ${num2ex16}`
let mensagem2ex16 = `A soma dos números ${num1ex16} e ${num2ex16} é: ${num1ex16 + num2ex16}`
let mensagem3ex16 = `A subtração dos números ${num1ex16} e ${num2ex16} é: ${num1ex16 - num2ex16}`
let mensagem4ex16 = `A multiplicação dos números ${num1ex16} e ${num2ex16} é: ${num1ex16 * num2ex16}`
let mensagem5ex16 = `A divisão dos números ${num1ex16} e ${num2ex16} é: ${num1ex16 / num2ex16}`
let mensagem6ex16 = `A média dos números ${num1ex16} e ${num2ex16} é: ${ (num1ex16 + num2ex16) / 2 }`

let mensagem16 = `\n ${mensagem1ex16} \n ${mensagem2ex16} \n ${mensagem3ex16} \n ${mensagem4ex16} \n ${mensagem5ex16} \n ${mensagem6ex16}`;
console.log(mensagem16) 
document.getElementById("ex16").innerText = (mensagem16)

}

//////////
////////// EXERCÍCIO 17 //////////
//////////

function exercicio17() {

let numero1 = parseFloat(+prompt("Insira o Número Inteiro: "))
let antenum1 = numero1 - 1
let sucenum1 = numero1 + 1
let mensagem = (`O número digitado foi ${numero1}, seu antecessor é ${antenum1} e seu sucessor é ${sucenum1}.`)

console.log(mensagem)
document.getElementById("ex17").innerHTML = (mensagem)

}

//////////
////////// EXERCÍCIO 18 //////////
//////////

function exercicio18() {

let lado = +prompt("Insira o valor para o lado: ")

let calcularArea = lado * lado
let calcularPerimetro = lado * 4

let mensagem = (`Calculando com o lado: ${lado} \nA Área é: ${calcularArea}  \nO Perímetro é: ${calcularPerimetro}`)

console.log(mensagem)
document.getElementById("ex18").innerText = (mensagem)

}

//////////
////////// EXERCÍCIO 19 //////////
//////////

function exercicio19() {

let b = +prompt("Insira o valor de B do retângulo: ") 
let h = +prompt("Insira o valor de H do retângulo: ")

let calcularArea = b * h
let calcularPerimetro = (b * 2) * (h * 2)

let mensagem = (`Calculando com os valores : ${b} e ${h} 
    \n A Área é: ${calcularArea}
    \n O Perímetro é ${calcularPerimetro}`)

document.getElementById('ex19').innerText = (mensagem)
}

//////////
////////// EXERCÍCIO 20 //////////
//////////

function exercicio20 () {

let passosNorte = 10
let passosLeste = 5

let mensagem = (`Somando com os ${passosNorte} passos para o norte com os ${passosLeste}    passos para o leste 
    <br> Você deu ${passosNorte + passosLeste} passos no total`) 

document.getElementById('ex20').innerHTML = (mensagem)

}

//////////
////////// EXERCÍCIO 21 //////////
//////////

function exercicio21 () {
let msg = document.getElementById('ex21')
let amigos = 20

msg.innerHTML = (`Irei receber ${amigos * 2} presentes dos meus ${amigos} amigos.`)

}

//////////
////////// EXERCÍCIO 22 //////////
//////////

function exercicio22 () {
let msg = document.getElementById('ex22')
let sorveteBaunilha = 50
let sorveteChocolate = 30
let ganhos = (sorveteBaunilha * 3.50) + (sorveteChocolate * 3.50)

msg.innerHTML = `Somando a venda dos dois tipos de sorvetes, eu ganhei o total de: ${ganhos}`

}

//////////
////////// EXERCÍCIO 23 //////////
//////////

function exercicio23 (){
let msg = document.getElementById('ex23')
let idadeDog = 3
let idadeEquivale = 7

msg.innerHTML = `O cachorro tem ${idadeDog * idadeEquivale} em anos humanos`

}

//////////
////////// EXERCÍCIO 24 //////////
//////////

function exercicio24 (){
let msg = document.getElementById('ex24')
let appleColhidas = 15
let appleDesejadas = 10

msg.innerHTML = `Somando as ${appleColhidas} maças que eu já possuo, com as ${appleDesejadas} eu terei no total: ${appleColhidas + appleDesejadas} maças.`

}

//////////
////////// EXERCÍCIO 25 //////////
//////////

function exercicio25() {
let msg = document.getElementById('ex25')
let mesada = 50
let economizar = 15

msg.innerHTML = `Se eu retirar R$${economizar} da minha mesada de R$${mesada}, eu terei sobrando o total de R$${mesada - economizar}`
} 

//////////
////////// EXERCÍCIO 26 //////////
//////////

function exercicio26() {

let msg = document.getElementById('ex26')
let starsVista = 8
let maisStars = 5

msg.innerHTML = `Se eu vi ${starsVista} estrelas, e depois vi mais ${maisStars}, eu vi ${starsVista + maisStars} estrelas no total.`

}

//////////
////////// EXERCÍCIO 27 //////////
//////////

function exercicio27() {

let msg = document.getElementById('ex27')
let valorLanche = 7.50
let valorAtual = 3.20

msg.innerHTML = `Se eu quero comprar um lanche que custa R$${valorLanche} e no momento eutenho R$${valorAtual}, eu preciso economizar R$${valorLanche - valorAtual}.`

}

//////////
////////// EXERCÍCIO 28 //////////
//////////

function exercicio28() {

let msg = document.getElementById('ex28')
let balas = 24
let amigos = 6

msg.innerHTML = `Se eu dividir minhas ${balas} balas entre meus ${amigos} amigos, cada um terá ${balas / amigos} balas.`
}


//////////
////////// EXERCÍCIO 29 //////////
//////////

function exercicio29() {

let msg = document.getElementById('ex29')
let flowers = 9
let moreFlores = 12

msg.innerHTML = `Se eu plantei ${flowers} flores e depois mais ${moreFlores}, eu terei plantado ${flowers + moreFlores} flores no total.`

}

//////////
////////// EXERCÍCIO 30 //////////
//////////

function exercicio30() {

let msg = document.getElementById('ex30')
let totalConta = parseFloat(prompt("Insira o valor total da conta: "))
let percentualGorjeta = parseFloat(prompt("Insira o percentual da gorjeta: "))

let valorGorjeta = (totalConta * percentualGorjeta) / 2

let totalPagar = valorGorjeta + percentualGorjeta

msg.innerHTML = `Esse é o valor total a ser pago: ${totalPagar}`

}

//////////
////////// EXERCÍCIO 31 //////////
//////////

let btn = document.getElementById('btn')
let div = document.getElementById('resultado')

function calcularDesconto() {

    let valorLivro = parseFloat(document.getElementById('preco').value)
    let desconto = valorLivro * 0.10
    let valorComDesconto = valorLivro - desconto

    div.innerHTML = `O valor do livro é R$ ${valorLivro} e o valor do livro com o desconto é R$ ${valorComDesconto} `

}

btn.addEventListener('click', calcularDesconto)

//////////
////////// EXERCÍCIO 32 //////////
//////////