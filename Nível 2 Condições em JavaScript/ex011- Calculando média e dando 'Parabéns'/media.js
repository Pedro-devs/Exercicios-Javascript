function Media() {
    let nome = window.prompt("Qual o nome do aluno ?")
    let n1 = Number(window.prompt(`Qual a primeira nota ?`))
    let n2 = Number(window.prompt(`Qual a segunda nota ?`))
    let media = (n1 + n2) / 2

    let menssagem
    if (media >= 6) {
        menssagem = 'Aprovado'

    }
    else {
        menssagem = 'Reprovado'
    }

    let resultado=document.getElementById("resultado")
    resultado.innerHTML = `<p>Calculando a média final de ${nome}</p>`
    resultado.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}</p>` 
    resultado.innerHTML += `<p>A média final será ${media}</p>`
    resultado.innerHTML += `<p>A mensagem que temos é: ${menssagem}</p>`

}