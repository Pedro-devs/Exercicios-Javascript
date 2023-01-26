function juntar() {
    let saida = document.getElementById("saida")
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)

    let vetor = [n1, n2]
    let vetor2 = [n3, n4]
    let juntar = [vetor.length]


    saida.innerHTML += `<h2>Resultado </h2>`
    for (let i = 0; i < vetor.length; i++) {
        saida.innerHTML += `|${juntar[i] = vetor[i]}|`
    }

    for (let i = 0; i < vetor2.length; i++) {
        saida.innerHTML += `|${juntar[i] = vetor2[i]}|`
    }


}