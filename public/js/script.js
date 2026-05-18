function validar() {
    let email = ipt_email.value;
    let senha = ipt_senha.value;
    let confirmar = ipt_confirmar.value;
    let nome = ipt_nome.value;

    let senhaValida = true;
    let nomeValido = true;

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

    if (senhaValida && nomeValido) {
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
            estiloServer: null,
            gmServer: null

        })
    })
        .then(function (resposta) {
            if (resposta.ok) {
                window.location = "login.html";
            } else {
                alert("Erro ao cadastrar");
            }
        })
}

function login() {
    let email = ipt_email.value;
    let senha = ipt_senha.value;

    fetch("/usuarios/autenticar", {
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
            sessionStorage.ID_USUARIO = json.id;
            sessionStorage.NOME_USUARIO = json.nome;
            
            window.location = "index.html";
        })
        .catch(function (erro) {
            alert("Erro ao fazer login");
            console.log(erro);
        });
}