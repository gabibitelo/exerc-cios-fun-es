//25/04
//EXERCÍCIOS

//1) OBSERVE O CÓDIGO A BAIXO:

//function minhafuncao(variavel){
  //  return variavel * 5
//}


//console.log(minhafuncao(2))
//console.log(minhafuncao(10))


//A)o que vai ser impreso no console?


//vai ser impresso:
//10 
//50


//B)o que aconteceria c tirasemos os dois console.log e simplesmente 
//invocase a funcao (minha funcao 2) e (minha funcao 10)? 
//o que apareceria no console

//daria erro pq o console.log é o que imprime para o console



//2)leia o codigo a baixo:

//let textoDoUsario = prompt("insira um texto");
//const outraFuncao = function(texto){
  //  return texto.toLowerCase().includes("cenoura")
//}

//const resposta = outraFuncao(textoDoUsario)
//console.log(resposta)


//A)explique o que essa função faz e qual sua utilidade?

//procura a palavra dentro do texto e retorna true ou false


//EXERCICIOS DE ESCRITA DE CÓDIGO


//1)escreva as funções explicadas a baixo;

//A)a função não deve receber nenhum parametro e deve imprimir uma mensagem falado informaçõe-
//s sobre voce troque o nome e a cidade idade e se é estudante ou não por informações sobre 
//voce.lembrando que a funcao ano possui entradas, apenas imprime as mensagens


//function imprimir(){
  //return "eu sou emily, tenho 15 anos, moro em sl e sou estudante"

//}
//console.log(imprimir())


//B)faça uma funcao que recebe 2 numeros e retorne um boleano que informase o primeiro numero
//é maior ou igual ao segundo.


//function retornaMaior(num1, num2){
  //return num1 >=  num2

//}
//alert(retornaMaior(Number(23),Number(2)))


//C)escreva uma funcao que receba um numero e devolva um booleano indicando se ele é par ou nao

//function ePar(num){

  //return num % 2 === 0;

//}
//alert(ePar(1)); 


//D)faça uma função  que recebe uma mensagem(string)como parametro e imprima o tamanho dessa 
//mensagem juntamente com a versao delas em letras maiusculas


//function exibirMensagem(texto){
  // return texto.toUpperCase() + ' - ' + texto.lenghth;

//}


//console.log(exibirMensagem('vamos gremio'));


//3)agora escreva uma função que receba 4 parametros que correspondem ás informações de uma pessoa;
//o nome(string) a idade(number) a cidade(string) e uma profisão (string).Ela deve retornar uam string
//que unifique todas as informações de pessoas em uma só mensagem com o template.


//nao cei(:


//DESAFIOS

//A)

let desfioA = (meuTime) => {
  return meuTime;
} 
alert(desfioA('brasil'))



//2)
//function hipo(cat1, cat2) {
  //  return Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2))

//}
//console.log(hipo(3,4).toFixed(2));


//aula 26/04

//teste

//function executa(variavel){
  //return variavel = 356;

//}
//executa(5);
//console.log (executa(5));

//retornou só com o console.log
