function maior() {
    let saida = document.getElementById("saida")
    let n1 = (Number(document.getElementById("n1").value))
    let n2 = (Number(document.getElementById("n2").value))
    let n3 = (Number(document.getElementById("n3").value))
    let n4 = (Number(document.getElementById("n4").value))

    let vetor = [n1, n2, n3, n4]
    let maior = [0]
    let menor = [9999]

    saida.innerHTML += `<h2>O maior Numero é  </h2>`
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]

        }
    }
    saida.innerHTML += `<p>${maior}</p>`
    saida.innerHTML += `<h2>O menor Numero é  </h2>`
    for (let j = 0; j < vetor.length; j++) {
        if (vetor[j] < menor) {
            menor = vetor[j]

        }

    }
    saida.innerHTML += `<p>${menor}</p>`


}