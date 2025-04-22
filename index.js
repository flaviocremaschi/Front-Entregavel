function validarBotao(){
    let usuario = document.getElementById("email").value;
    let password = document.getElementById("senha").value;
    if(usuario.length == 0 || password.length < 8){
        document.getElementById("botaoLogin").disabled = true;
    }
    else{
        document.getElementById("botaoLogin").disabled = false;
    }
    
}

function mensagemConsole(){
    console.log("Email:" + document.getElementById("email").value);
    console.log("Senha:" + document.getElementById("senha").value); 

    window.location.href = "catalogo.html";

}