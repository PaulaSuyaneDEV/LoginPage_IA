const campoEmail = document.getElementById('campoEmail');
const campoSenha = document.getElementById('campoSenha');

function VerificandoCampos(){
    if(campoEmail.value == '' && campoSenha.value == ''){
        alert('Preencha os dados corretamente!')
    }
    else if(campoEmail.value == '' || campoSenha.value == ''){
        alert('Preencha os dados corretamente')
    }
    else {
        alert('Dados corretos...Aguarde um momento!')
    }
}