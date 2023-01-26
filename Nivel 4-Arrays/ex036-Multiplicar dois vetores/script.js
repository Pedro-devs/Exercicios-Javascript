function verificar() {
    let saida = document.getElementById("saida")
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)

    let n5 = Number(document.getElementById("n5").value)
    let n6 = Number(document.getElementById("n6").value)
    let n7 = Number(document.getElementById("n7").value)
    let n8 = Number(document.getElementById("n8").value)


    let vetor = [n1, n2, n3, n4]
    let vetor2 = [n5, n6, n7, n8]
    let multiplicar = [vetor.length];
    for (let i = 0; i < vetor.length; i++) {

        saida.innerHTML += `<p>${multiplicar[i] = vetor[i] * vetor2[i]} </p>`

    }


    
}