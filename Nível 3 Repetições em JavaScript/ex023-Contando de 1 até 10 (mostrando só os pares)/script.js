function contar() {
    let resultado = document.getElementById("resultado")
    resultado.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            resultado.innerHTML += `<mark> ${i}</mark>&#x1F449;`
        }
      

    }



}