function validar() {
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    let confirmar = ipt_confirmar.value;
    let nome = ipt_nome.value;

    let finalCorreto = "@sptech.school";
    let valido = true;
    let senhaValida = true;
    let nomeValido = true;

    if (email.length <= finalCorreto.length) {
        valido = false;
    } else {
        for (let i = 0; i < finalCorreto.length; i++) {
            let emailCount = email.length - finalCorreto.length + i;

            if (email[emailCount] != finalCorreto[i]) {
                valido = false;
            }
        }
    }

    if (nome.length < 5) {
        nomeValido = false;
        erro_nome.innerHTML = "* nome deve ter mais que 5 caracteres";
        erro_nome.style.color = "red";
    }

    if (senha.length < 6) {
        erro_senha.innerHTML = "* senha deve ter mais que 6 caracteres";
        erro_senha.style.color = "red";
        senhaValida = false;
    }

    if (senha != confirmar) {
        erro_senhaC.innerHTML = "* senhas não coincidem";
        erro_senhaC.style.color = "red";
        senhaValida = false;
    }

    if (valido) {
        erro_email.innerHTML = "";
    } else {
        erro_email.innerHTML = "* email inválido";
        erro_email.style.color = "red";
    }

    if (valido && senhaValida && nomeValido) {
        cadastrar();
    }
}

function cadastrar() {
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    let nome = ipt_nome.value;

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nome,
            emailServer: email,
            senhaServer: senha,
            estiloServer: null
        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                alert("Cadastro realizado com sucesso!");
                window.location = "login.html";
            } else {
                alert("Erro ao cadastrar");
            }
        })
}

function login() {
    let email = ipt_email.value;
    let senha = ipt_senha.value;

    fetch("http://localhost:3333/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    })
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error("Email ou senha inválidos");
                return;
            }

            return resposta.json();
        })
        .then(function (json) {
            sessionStorage.ID_USUARIO = json.idusuario;
            sessionStorage.NOME_USUARIO = json.nome;

            window.location = "index.html";
        })
        .catch(function (erro) {
            alert("Erro ao fazer login");
            console.log(erro);
        });
}