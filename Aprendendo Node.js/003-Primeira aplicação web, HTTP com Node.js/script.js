var http = require("http");//nao existe outro arquivo que se chama http pra importar 
                           //mas esse modulo http ele ja vem no proprio node.js 
http.createServer(function(requisicao,resposta){//requisição aonde o usuario pede ao servidor  e o servidor dá a resposta
    resposta.end("<h1>Bem vindo ao meu site !</h1>")
    
}).listen(3000);

console.log("Meu servidor está rodando!");//menssagem pra saber se o servidor está rodando