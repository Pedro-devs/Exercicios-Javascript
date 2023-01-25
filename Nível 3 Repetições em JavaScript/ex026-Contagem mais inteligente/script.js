function contar() {
    let resultado = document.getElementById("resultado")
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    resultado.innerHTML += `<h2>Contando de ${n1} até ${n2} </h2>`
    if (n1 < n2) {
        cont = n1
        while (cont <= n2) {
            resultado.innerHTML += ` ${cont} &#x1F449;`
            cont++
        }
    } else if (n2 < n1) {
        cont = n1
        while (cont >= n2) {
            resultado.innerHTML += ` ${cont} &#x1F449;`
            cont--
        }
    } else {
        resultado.innerHTML += `Não é possível contar, pois os números são iguais`
    }








}