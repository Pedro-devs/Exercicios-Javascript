function fatorial() {
    let resultado = document.getElementById("resultado")
    let n1 = Number(document.getElementById("n1").value)

    resultado.innerHTML += `<h2>Calculando ${n1}!</h2>`

    let fat = 1
    for (let i = 1; i <= n1; i++) {
        fat = fat * i
    }
    resultado.innerHTML += ` ${n1}=${fat}`



}