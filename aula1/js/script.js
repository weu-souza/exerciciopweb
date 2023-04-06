function enviar() {
    const guardarValor = {modelo : document.getElementById("modelo-veiculo").value,
        cor : document.getElementById("cor-veiculo").value,
        ano : document.getElementById("ano-veiculo").value,
        nomePropietario : document.getElementById("nome-proprietario").value,
        marca : document.getElementById('marcas-veiculo').value,
        jaBatido : document.querySelector("[name = 'batido']:checked").value
    }
    if (validar()) {
        alert("algum campo ficou vazio ou incorreto,preencha o formulario!!")
    } else {
        tabela(guardarValor)
    }
}

function tabela(guardarValor) {
    criarTabela(guardarValor)
// cria uma variavel de acordo com o id do html
    const count = document.getElementById('contar')
// soma 1 e altera o valor que inicialmente e zero
    count.textContent++
//     cria o a variavel para o botão de excluir
    const btnApagar = document.getElementById('excluir-tabela')
    // cria uma variavel pra mudar o display que inicialmente e none para inline
    // isso faz o botão que inicialmente e none aparecer na tela
    btnApagar.style.display = 'inline'
}

function criarTabela(guardarValor) {
    const tBoddy = document.getElementById('table-boddy')
    // pega a tudo do documento que estiver com a classe tabela-tr
    const tabelaTr = document.createElement('tr')
    tabelaTr.className = 'tabela-tr'
    // cria um elemento td na tabela
    const tabelaTd = {
        tdMod : document.createElement('td'),
         tdCor : document.createElement('td'),
         tdMarca : document.createElement('td'),
         tdAno : document.createElement('td'),
         tdJaBatido : document.createElement('td'),
         tdPropietario : document.createElement('td'),
    }



    // guarda o valor inserido no array pelo input dentro do elemento td


    tabelaTd.tdMod.textContent = guardarValor.modelo
    tabelaTd.tdCor.textContent = guardarValor.cor
    tabelaTd.tdMarca.textContent = guardarValor.marca
    tabelaTd.tdAno.textContent = guardarValor.ano
    tabelaTd.tdJaBatido.textContent = guardarValor.jaBatido
    tabelaTd.tdPropietario.textContent = guardarValor.nomePropietario

    // cria uma classe tabela-resposta no td

    tabelaTd.tdMod.className = "tabela-resposta"
    tabelaTd.tdCor.className = "tabela-resposta"
    tabelaTd.tdMarca.className = "tabela-resposta"
    tabelaTd.tdAno.className = "tabela-resposta"
    tabelaTd.tdJaBatido.className = "tabela-resposta"
    tabelaTd.tdPropietario.className = "tabela-resposta"
    // insere o td criado dentro do tr
    tabelaTr.append(tabelaTd.tdMod,tabelaTd.tdCor,tabelaTd.tdMarca,tabelaTd.tdAno,tabelaTd.tdJaBatido,tabelaTd.tdPropietario)
    tBoddy.appendChild(tabelaTr)
}

function validar() {
    return !(document.formulario.modelo.value
        && document.formulario.cor.value
        && document.formulario.marcas.value
        && document.formulario.ano.value
        && document.formulario.batido.value
        && document.formulario.proprietario.value);
}

// excluir tabela
function excluir() {
    // cria o elemento com o id table-boddy
    const tBoddy = document.getElementById('table-boddy')
    // pega a classe de nome table-tr
    const tr = document.querySelector('.tabela-tr')
    // pega a classe com o nome tabela-resposta
    const td = document.querySelector('.tabela-resposta')
   // remove o filho de tr
    tr.removeChild(td)
   // remove o filho do tboddy
    tBoddy.removeChild(tr)
    // cria a variavel pra subtrair o total
    const count = document.getElementById('contar')
// subtrai 1 e altera o valor de conunt
    count.textContent--
    // verifica se o total esta igual a zero e esconde o botão de excluir
    if (count.textContent === '0'){
        const btnApagar = document.getElementById('excluir-tabela')
        // muda o botão que inicialmente e inline para none
        // isso faz o boão sumir novamente
        btnApagar.style.display = 'none'
    }
}

