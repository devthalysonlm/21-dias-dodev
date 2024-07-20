
//SOLUÇÃO 01
/*
class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }
    apresentar(){
        console.log(`No meu setup utilizo um ${this.tipo} com 10 fans RGB, meu processador é um ${this.processador}, tenho uma GPU ${this.video} armazenamento de ${this.armazenamento}, dois pentes de memória totalizando ${this.memoriaRam} GB,  ${this.ssd}`)
    }
}

let computador = new Computador('Desktop','Ryzen7 5700X3D','Dedicada > RTX  4060', 1000, 32, true)
computador.apresentar();


*/



//SOLUÇÃO 02 UTILIZANDO UMA INTERAÇÃO COM O USUÁRIO:
class Computador{
    tipo
    processador
    video
    armazenamento
    memoriaRam
    ssd
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd

    }
    apresentar(){
        console.log(`Tipo: ${this.tipo}\nProcessador: ${this.processador}\nVídeo: ${this.video}\nArmazenamento: ${this.armazenamento}\nMemoria: ${this.memoriaRam}\nSSD: ${this.ssd}`)
    }
}
let setup = [];
let indexSetup = 0;
let continuar = true
while(continuar){
    let tipo = prompt('Desktop ou Notebook?')
    let processador = prompt('Informe o processador:')
    let video = prompt('Possui vídeo Integrado ou Dedicado?')
    let armazenamento = Number(prompt('Informe a capacidade de armazenamento GB: '))
    let memoriaRam = Number(prompt('Informe a quantidade de Memória Ram: '))
    let ssd = prompt('Possui SSD ?(S/N)')
    if(ssd == 's'){
        ssd = true
    } else {
        ssd = false
    }
    
    let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)
    
    setup[indexSetup] = computador

    let desejaContinuar = prompt('Digite 1 caso queria corrigir alguma informação:')
    if(desejaContinuar != '1'){
        continuar = false
        continue;
    } else {
        indexSetup ++
    }

    
}


