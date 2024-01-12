let listaAmigo = [];
let sorteio = document.getElementById("lista-sorteio");
function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value != ""){
        if (listaAmigo.includes(amigo.value)){
            alert("Participante ja incluido")
        } else {
            listaAmigo.push(amigo.value);
            let lista = document.getElementById("lista-amigos");
            if (lista.textContent == '') {
                lista.textContent = amigo.value;
            } else {
                lista.textContent = lista.textContent + ', ' + amigo.value;
            }
            amigo.value = "";
        }
    }
}
function sortear() {
    if (listaAmigo.length > 1){
        //arrays para os dois lados da lista
        let sorteamento = []
        let sorteamento2 = []
        for (y = 0; y < listaAmigo.length;) {
        //aleatoriedade das listas
            let aleatorio = parseInt(Math.random() * listaAmigo.length);
            let aleatorio2 = parseInt(Math.random() * listaAmigo.length);
        //condicoes para garantir que a lista nao se repita
            if (sorteamento.includes(aleatorio)){
                aleatorio = parseInt(Math.random() * listaAmigo.length);
            } else if (sorteamento2.includes(aleatorio2)) {
                aleatorio2 = parseInt(Math.random() * listaAmigo.length);
            } else if (aleatorio == aleatorio2) {
                sorteamento = [];
                sorteamento2 = [];
            }else {
                sorteamento.push(aleatorio);
                sorteamento2.push(aleatorio2);
                y++
            }
        }
        for (m = 0; m < listaAmigo.length; m++){
        sorteio.innerHTML = sorteio.innerHTML + "<br>" + `${listaAmigo[sorteamento[m]]} -> ${listaAmigo[sorteamento2[m]]}`;
    }
    }else {
        alert("Adicione mais um participante")
    }
}

function reiniciar() {
    document.getElementById("lista-amigos").innerHTML = "";
    sorteio.innerHTML = ""
    listaAmigo = [];
    sorteamento = [];
    sorteamento2 = [];
}