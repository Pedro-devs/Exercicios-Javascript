function Clicar() {

    let n1 = window.prompt('Digite um numero')
    let resultado = document.getElementById("resultado")

    if (n1 % 2 === 0) {
        resultado.innerHTML = `O número ${n1} que foi digitado é par`
    }
    else {
        resultado.innerHTML = `O número ${n1} que foi digitado é impar`
    }

}