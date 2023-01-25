function descobrir() {
   let mes = window.prompt("Digite o nome ou numero do mês aqui")
   let resultado = document.getElementById("resultado")
   let estacao
   switch (mes.toUpperCase()) {// O método toUpperCase() transforma todas as letras de uma string para maiúsculas

      case 'JANEIRO': case '1':
      case 'FEVEREIRO': case '2':
      case 'MARÇO': case '3':  // Podemos testar múltiplos casos em uma mesma linha, desse jeito
         estacao = 'INVERNO'
         break;

      case 'ABRIL': case '4':
      case 'MAIO': case '5':
      case 'JUNHO': case '6':
         estacao = 'PRIMAVERA'
         break;

      case 'JULHO': case '7':
      case 'AGOSTO': case '8':
      case 'SETEMBRO': case '9':
         estacao = 'VERÃO'
         break;

      case 'OUTUBRO': case '10':
      case 'NOVEMBRO': case '11':
      case 'DEZEMBRO': case '12':
         estacao = 'OUTONO'
         break;

      default:
         estacao = 'INDEFINIDA'
         break;

   }
   resultado.innerHTML = `<p>No mês  ${mes}, estamos na estação ${estacao}  </p>`


}