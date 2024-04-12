
let opcoes = Number(prompt('Olá, seja muito bem vindo! Escolha a opção para o abastecimento: 1 > Gasolina, 2 > Álcool, 3 > Calibragem de pneus.'))
switch(opcoes){
    case 1:
        let valorGasolina = Number(prompt('Digite o valor que deseja abastecer:R$'))
        gasolina = valorGasolina / 5
        total = gasolina.toFixed(2);
        console.log(`Você solicitou R$${valorGasolina} de gasolina comum totalizando ${total} litros!`)
        break;
    case 2:
        let valorAlcool = Number(prompt('Digite o valor que deseja abastecer:R$'))
        alcool = valorAlcool / 3
        total = alcool.toFixed(2);
        console.log(`Você solicitou R$${valorAlcool} de álcool totalizando ${total} litros!`)
        break;
    case 3:
        console.log('Penus calibrados com sucesso!')
        break;
}