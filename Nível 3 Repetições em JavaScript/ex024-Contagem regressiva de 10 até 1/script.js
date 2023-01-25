function contar() {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`
    for (let i = 10; i >0; i--) {
        
        resultado.innerHTML += ` ${i} &#x1F449;`

    }



}