let contador = 0
let resultado = document.getElementById("resultado")

// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro
function Contar() {
    contador++
    resultado.innerHTML = `<p>O contador está com ${contador} cliques</p>`
}

function Zerar() {
    contador = 0;
    resultado.innerHTML = null

}