
let modelo = [];
let ano = [];
let valor = [];
contadorArray = 0;
condition = true;
while(condition === true){
    let modeloDoCarro = prompt('Digite o modelo do carro:')
    let anoDoCarro = prompt('Digite o ano do carro:')
    let valorDoCarro = parseFloat(prompt('Digite o valor carro:'))
    modelo[contadorArray] = modeloDoCarro
    ano[contadorArray] = anoDoCarro
    valor[contadorArray] = valorDoCarro
    contadorArray++
    
    let continuar = prompt('Deseja cadastrar mais algum veículo?')
    if(continuar != 's'){
        condition = false;
    }
}
//Mostrando informações 
for (let i = 0; i < modelo.length; i++) {
    console.log(`Modelo:${modelo[i]} > Ano: ${ano[i]} > Valor: ${valor[i]}`)
    
}

//COMO ORDENAR POR PREÇO
for (let i = 0; i < valor.length - 1; i++) {
    for (let j = 0; j < valor.length - i - 1; j++) {
        if(valor[j] > valor[j + 1]) {

            let modeloMaiorValor = modelo[j]
            modelo[j] = modelo[j + 1]
            modelo[j + 1] =  modeloMaiorValor

            let anoMaiorValor = ano[j]
            ano[j] = ano[j + 1]
            ano[j + 1] = anoMaiorValor

            let maiorValor = valor[j]
            valor[j] = valor[j + 1]
            valor[j + 1] = maiorValor

        }
        
    }
    
} 

console.log("Carros ordenados pelo preço")
for (let i = 0; i < modelo.length; i++) {
    console.log(modelo[i] + '-' + ano[i] + '-' + valor[i])
    
}

