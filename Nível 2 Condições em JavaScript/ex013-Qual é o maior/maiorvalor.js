function Maior() {
    let n1 = Number(window.prompt('digite o primeiro numero'))
    let n2 = Number(window.prompt('digite o segundo numero'))
    let resultado = document.getElementById("resultado")

    if (n1 > n2) {
        resultado.innerHTML = `Analisando os dois valores ${n1} e ${n2}, ${n1} é maior que ${n2}`
    }
    else {
        resultado.innerHTML = `Analisando os dois valores ${n1} e ${n2}, ${n2} é maior que ${n1}`
    }




}