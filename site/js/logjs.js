function verificarSenha(event){
    event.preventDefault(); 

    let senhaDigitada = document.getElementById("senha").value;
    let senhaCorreta = "15032025";

    if(senhaDigitada == senhaCorreta){
        document.getElementById("captcha").style.display = "block";
        document.getElementById("login").style.display = "none";
        document.getElementById("login2").style.display = "none";

        embaralhar();
        renderizar();
    }
    else{
        alert("Senha incorreta, errando nossa data de namoro ????? kkkkk");
    }
}




let ordem = [0,1,2,3,4,5,6,7,8];
let selecionado = null;

function embaralhar() {
    ordem.sort(() => Math.random() - 0.5);
}

function renderizar() {
    let grid = document.getElementById("grid");
    grid.innerHTML = "";

    // 👇 tamanho fixo baseado na tela
    let tamanho = window.innerWidth <= 768 ? 80 : 100;

    ordem.forEach((pos, index) => {
        let div = document.createElement("div");
        div.className = "bloco";

        if (index === selecionado) {
            div.classList.add("selecionado");
        }

        let x = (pos % 3) * tamanho;
        let y = Math.floor(pos / 3) * tamanho;

        div.style.backgroundPosition = `-${x}px -${y}px`;

        div.onclick = () => selecionar(index);

        grid.appendChild(div);
    });
}

function selecionar(index) {
    if (selecionado === null) {
        selecionado = index;
    } else {
        [ordem[selecionado], ordem[index]] = [ordem[index], ordem[selecionado]];
        selecionado = null;
    }

    renderizar(); // 👉 sempre atualiza
}
function verificarCaptcha() {
    let correto = JSON.stringify(ordem) === JSON.stringify([0,1,2,3,4,5,6,7,8]);

    if (correto) {
        window.location.href = "inicio.html"; // 👉 redireciona aqui agora
    } else {
        alert("Ainda está errado!");
    }
}

