let senha1, senha2;




senha.addEventListener("keypress", () => {senha1 = senha.value});

// function salvarSenha(){
//     senha1 = senha.value
// }
//  A funçao foi jogada dentro do evento, foi rettirado function e salvarSenha e no lugar pra saber que é uma função foi colocado =>


confirmeSenha.addEventListener("keypress", validaSenha);

function validaSenha(){
    senha2 = confirmeSenha.value;

    if (senha2 != senha1){

     mensagem.innerText = "Senhas divergentes";
     senha.style.border = " 3px solid red";
     confirmeSenha.style.border = "3px solid red"

    } else{
        senha.style.border = "3px solid red";
        confirmeSenha.style.border = "3px solid #ddd";
        mensagem.style.display = "none"

        btnEnviar.classList.remove("intervalo");
        btnEnviar.classList.add("ativo");


    }
}

