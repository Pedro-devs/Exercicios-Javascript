function soma(a,b){
    return (a+b)
}

function div (a,b){
    return (a/b)
}

function multi (a,b){
    return (a*b)
}

function sub (a,b){
    return (a-b)
}

const texto="Calculadora de Pedro"
//pra eu conseguir usar essas funçoes no Main, preciso exporta-las usando o metodo de baixo
module.exports = {soma,div,multi,sub,texto}