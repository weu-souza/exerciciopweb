function enviar() {
    //pega os valores do formulario
    let modelo = document.getElementById("modelo-veiculo").value
    let cor = document.getElementById("cor-veiculo").value
    let ano = document.getElementById("ano-veiculo").value
    let nomePropietario = document.getElementById("nome-proprietario").value
    let marca = document.getElementById('marcas-veiculo').value
    let jaBatido = document.getElementsByName("ja-batido")
    let escolha = []
    for (let i = 0; i < jaBatido.length; i++) {
        if (jaBatido[i].checked) {
            escolha.push(jaBatido[i].value)
        }
    }

    // guarda um array do formulario

    tabela(modelo, cor, ano, nomePropietario, marca, escolha)

}


function tabela(modelo, cor, ano, nomePropietario, marca, escolha) {
    // guarda o valor pego no formulario
    let guardarValor = [modelo, cor, marca, ano, escolha, nomePropietario]
    console.log(guardarValor)

    // cria uma tabela para modelo
    let modeloTr = document.querySelector('#modelo')
    let tdMod = document.createElement('td')
    tdMod.textContent = guardarValor[0]
    tdMod.className = "tabela-resposta"
    modeloTr.appendChild(tdMod)

    // cria uma tabela para cor
    let corTr = document.querySelector('#cor')
    let tdCor = document.createElement('td')
    tdCor.textContent = guardarValor[1]
    tdCor.className = "tabela-resposta"
   corTr.appendChild(tdCor)
    // cria uma tabela para marca
    let marcaTr = document.querySelector('#marca')
    let tdMarca = document.createElement('td')
    tdMarca.textContent = guardarValor[2]
    tdMarca.className = "tabela-resposta"
    marcaTr.appendChild(tdMarca)
    // cria uma tabela para ano
    let anoTr = document.querySelector('#ano')
    let tdAno = document.createElement('td')
    tdAno.textContent = guardarValor[3]
    tdAno.className = "tabela-resposta"
    anoTr.appendChild(tdAno)
    // cria uma tabela para batido
    let jaBatidoTr = document.querySelector('#batido')
    let tdBatido = document.createElement('td')
    tdBatido.textContent = guardarValor[4]
    tdBatido.className = "tabela-resposta"
    jaBatidoTr.appendChild(tdBatido)
    // cria uma tabela pra proprietario
    let proprietarioTr = document.querySelector('#proprietario')
    let tdProprietario = document.createElement('td')
    tdProprietario.textContent = guardarValor[5]
    tdProprietario.className = "tabela-resposta"
    proprietarioTr.appendChild(tdProprietario)
//     adiciona 1 no total de veiculos
    let count = document.getElementById('contar')
    count.colSpan++
    count.textContent++

    if (count.textContent>29){
        let btn = document.getElementById('btn-enviar').disabled=true;
    }

}
