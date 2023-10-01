class hero {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    attack() {
        let atacar;
        if (this.tipo === 'mago') {
            atacar = 'magia';
        } else if (this.tipo === 'guerreiro') {
            atacar = 'espada';
        } else if (this.tipo === 'monge') {
            atacar = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            atacar = 'shuriken';
        }
        
        
        
        console.log (`O ${this.tipo} atacou usando ${atacar}`)
    }
  
}
                         //nome - idade - tipo
const heroi = new hero (                       )
heroi.attack();