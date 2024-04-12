/* esse qui é meu escopo goblal 
let idade = Number(prompt("Digite a sua idade por favor "))

// esse é meu escopo do primeiro if 
if(idade >= 18){
    console.log(`Você tem ${idade} anos e é maior de idade!`)
    let nome = "Thalyson Lima"
    console.log(nome)
// esse e meu terceiro escopo dentro do meu outro if 
    if(true){
        console.log("Estou no terceiro escopo")
        console.log(nome)
    }
}else{
    console.log(`Você tem ${idade} anos e é menor de idade!`)
}

console.log("Sai do escopo do IF e e estou tentando utilizar a variável de dentro!!")
console.log(nome) */


let idade = Number(prompt("Digite a sua idade:"))
let nome = prompt("Digite o seu nome:")
if(idade === 24 && nome === "Thalyson"){
    console.log("Seu nome é Thalyson e você tem 24 anos!")
}else if(idade === 24 || nome === "Thalyson"){
     console.log("Você tem 24 anos ou seu nome é Thalyson!")
}else(
    console.log("Seu nome não é Thalyson e você não tem 24 anos")
)