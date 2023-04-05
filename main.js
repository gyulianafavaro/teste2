document.addEventListener("click" , showcolor );

document. getElementById("botao").addEventListener("click" , exibenome );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value = "";
}
function soma()
a = required(), b = required() { return a + b; } console. log(soma(1, 2));