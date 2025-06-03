



const geradorNumerico = () => {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    return Math.floor(Math.random() * (max - min + 1) + min);
 } ;

const getElement = (id) => document.getElementById(id) ;
const numerosPalpitados = [];

let jogadas = 0;
let totalChances = 10;
let numeroGerado = geradorNumerico();


function chutar(){
    getElement("nPalpite").value = geradorNumerico();
};



function getFeedback(nGerado, nPalpitado){

    if (nGerado === nPalpitado){
        return "Parabens, você acertou";
    }

    else{
        return `O numero secreto é ${nGerado>nPalpitado?"maior":"menor"} que  ${nPalpitado}`
    }
}

function jogar(){

    jogadas++;

    let chancesRestantes = totalChances - jogadas;


    const contadorChances = getElement("nChance");
    const placarPalpites = getElement("nPalpitados");
    const placarFeedback = getElement("nFeedback");
    const nPalpitado = getElement("nPalpite");
    let valorNPalpitado = parseInt(nPalpitado.value)

    
    if (chancesRestantes >= 0){


        if (valorNPalpitado >= 1 && valorNPalpitado <= 100){
            
            numerosPalpitados.push(valorNPalpitado);
        
            placarFeedback.textContent = getFeedback(numeroGerado,valorNPalpitado);

            contadorChances.textContent = chancesRestantes;

            placarPalpites.textContent = numerosPalpitados.join(", ");
            
            nPalpitado.value = "";
        } 

        else{
            alert("valor deve ser entre 1 e 100");
        }


    }

    if (chancesRestantes === 0){
        placarFeedback.textContent = "Fim de jogo, o número gerado era " + valorNPalpitado;
        return;
    }

}
 
