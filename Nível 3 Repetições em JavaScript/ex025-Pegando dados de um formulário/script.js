function contagem() {
    let saida = document.getElementById('saida')
    let n1 = Number(document.getElementById('n1').value)
    resultado.innerHTML += `<h2>Contando de 0 até ${n1}</h2>`

    for (let i = 0; i <= n1; i++) {
        resultado.innerHTML += ` ${i} &#x1F449;`

    }
}