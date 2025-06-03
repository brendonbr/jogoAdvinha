



const geradorNumerico = () => {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const getElement = (id) => document.getElementById(id);
const numerosPalpitados = [];

let jogadas = 0;
let totalChances = 10;
let numeroGerado = geradorNumerico();


function chutar() {
    getElement("nPalpite").value = geradorNumerico();
};






function jogar() {

    console.log(numeroGerado)

    if (jogadas >= totalChances) {
        placarFeedback.textContent = "Fim de jogo, o número gerado era " + valorNPalpitado;
        return;
    }

    jogadas++;
    let chancesRestantes = totalChances - jogadas;


    const contadorChances = getElement("nChance");
    const placarPalpites = getElement("nPalpitados");
    const placarFeedback = getElement("nFeedback");
    const nPalpitado = getElement("nPalpite");
    let valorNPalpitado = parseInt(nPalpitado.value)





    if (isNaN(valorNPalpitado) || valorNPalpitado < 1 || valorNPalpitado > 100) {
        alert("O valor deve ser entre 1 e 100");
        return;
    }





    numerosPalpitados.push(valorNPalpitado);

    placarFeedback.textContent = `O numero secreto é ${numeroGerado > valorNPalpitado ? "maior" : "menor"} que  ${valorNPalpitado}`


    contadorChances.textContent = chancesRestantes;

    placarPalpites.textContent = `[ ${numerosPalpitados.join(", ")} ]`;

    nPalpitado.value = "";

    if (numeroGerado == valorNPalpitado) {
        placarFeedback.textContent = ("Parabêns, você acertou").toUpperCase();
        return;
    };


    if (chancesRestantes === 0) {
        placarFeedback.textContent = "Fim de jogo, o número gerado era " + numeroGerado;
     
    }


}

