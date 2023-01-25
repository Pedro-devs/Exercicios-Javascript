function media(){
let saida=document.getElementById("resultado")
let n1=Number(document.getElementById("n1").value)
let n2=Number(document.getElementById("n2").value)

let media=(n1+n2)/2
if(media>=6){
    saida.innerHTML=`Aluno aprovado`
}
else{
    saida.innerHTML =`Aluno reprovado`
}





}