function tabuada() {
    let resultado = document.getElementById("resultado")
    let n1 = Number(document.getElementById("n1").value)
    resultado.innerHTML = `<h2>Tabuada de ${n1}</h2>`

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `<p> ${n1} x ${i} = ${n1 * i} </p>`
    }

}