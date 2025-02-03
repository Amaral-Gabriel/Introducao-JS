alert("Bem vindo ao jogo da advinhação!");
let maximo = prompt(`Escolha o número máximo.`);
let numeroSecreto = parseInt(Math.random() * maximo + 1);
console.log(numeroSecreto);
let chute = prompt(`Agora chute um número entre 0 e ${maximo}.`);
let cont = 1;

while (numeroSecreto != chute) {
    cont ++;
    if (chute < numeroSecreto) {
        chute = prompt(`Errou!! O número secreto é maior que ${chute}.`);
    } else {
        chute = prompt(`Errou!! O número secreto é menor que ${chute}.`);
    }
}
let tentativa = cont == 1 ? "tentativa" : "tentativas";
alert(`Parabéns!! Você acertou em ${cont} ${tentativa}.`);
