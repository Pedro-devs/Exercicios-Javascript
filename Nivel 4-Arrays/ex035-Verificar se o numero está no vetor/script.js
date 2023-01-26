function verificar() {
    let saida = document.getElementById("saida")
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    let n4 = Number(document.getElementById("n4").value)
    let num = Number(document.getElementById("num").value)

    let vetor = [n1, n2, n3, n4]
    for (let i = 0; i < vetor.length; i++) {
        if (num == vetor[i]) {

            saida.innerHTML = `O valor inserido está no vetor`
        }
        else {
            saida.innerHTML = `O valor inserido não está no vetor`
        }

    }



}