function calcular() {

    let n1 = Number(window.prompt("digite um numero"))
    let n2 = Number(window.prompt("digite outro numero"))
    let calculo = Number(window.prompt(`Valores informados: ${n1} e ${n2}.\nQual calculo deseja ? \n[1] Somar \n[2] Subtrair\n[3] Multiplicar \n[4] Dividir`))

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Calculando</p>`

    switch (calculo) {//A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings

        case 1:
            resultado.innerHTML += `<p>${n1} + ${n2} = ${n1 + n2}  </p>`
            break; // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases

        case 2:
            resultado.innerHTML += `<p>${n1} - ${n2} = ${n1 - n2}  </p>`
            break;

        case 3:
            resultado.innerHTML += `<p>${n1} * ${n2} = ${n1 * n2}  </p>`
            break;

        case 4:
            resultado.innerHTML += `<p>${n1} / ${n2} = ${n1 / n2}  </p>`
            break;



    }


}