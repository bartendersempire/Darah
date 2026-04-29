let ordem = [0,1,2,3,4,5,6,7,8];
let selecionado = null;

function embaralhar() {
    for (let i = ordem.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ordem[i], ordem[j]] = [ordem[j], ordem[i]];
    }
}

function renderizar() {
    let grid = document.getElementById("grid");
    grid.innerHTML = "";

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

    renderizar();
}

function verificarCaptcha() {
    let correto = JSON.stringify(ordem) === JSON.stringify([0,1,2,3,4,5,6,7,8]);

    if (correto) {
        window.location.href = "inicio.html";
    } else {
        alert("Ainda está errado!");
    }
}
