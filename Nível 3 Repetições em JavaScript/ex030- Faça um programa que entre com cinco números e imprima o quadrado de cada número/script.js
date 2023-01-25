function quadrado() {

    let saida = document.getElementById("resultado")
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n3").value)
    saida.innerHTML += `<h2>Quadrado de cada número digitado<h2>`


    saida.innerHTML += `<p>${n1} = ${n1 * n1}</p>`
    saida.innerHTML += `<p>${n2} = ${n2 * n2}</p>`
    saida.innerHTML += `<p>${n3} = ${n3 * n3}</p>`



}