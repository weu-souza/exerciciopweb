function enviar() {
    //pega os valores do input com o id modelo-veiculo
    let modelo = document.getElementById("modelo-veiculo").value
    //pega os valores do input com o id modelo-cor
    let cor = document.getElementById("cor-veiculo").value
    //pega os valores do input com o id modelo-ano
    let ano = document.getElementById("ano-veiculo").value
    //pega os valores do input com o id nome-proprietario
    let nomePropietario = document.getElementById("nome-proprietario").value
    //pega os valores do select com o id modelo-veiculo
    let marca = document.getElementById('marcas-veiculo').value
    //cria a variavel do input com o atributo "nome = ja-batido"
    let jaBatido = document.getElementsByName("ja-batido")
    //pega os valores do input com o id ja batido e pega o valor do elemento selecionado
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
    // guarda o valor pego no formulario em um array
    let guardarValor = [modelo, cor, marca, ano, escolha, nomePropietario]

    // insere os valores do array na tabela
    for (let i = 0; i < guardarValor.length; i++) {
        // pega a tudo do documento que estiver com a classe tabela-tr
        let tabelaTr = document.getElementsByClassName('tabela-tr')[i]
        // cria um elemento td na tabela
        let tdMod = document.createElement('td')
        // guarda o valor inserido no array pelo input dentro do elemento td
        tdMod.textContent = guardarValor[i]
        // cria uma classe tabela-resposta no td(para poder inserir o css que criei com esse mesmo nome)
        tdMod.className = "tabela-resposta"
        // insere o td criado dentro do tr (basicamente fala que o td e o filho do tr e o td e pra ser inserido dentro do tr)
        tabelaTr.appendChild(tdMod)
    }
    // cria uma variavel de acordo com o id do html
    let count = document.getElementById('contar')
    // soma o valor da coluna que inicialmente não existe (colspan e um atributo de td para ele ocupar o
    // tanto de espaço que for inserido no colspan se for inserido 3, o td ira ocupar 3 espaços na tabela e assim por diante)
    // como o total de veiculos cadastrados teria que estar no rodape, e ocupar a tabela inteira eu coloquei pra alterar o colspan junto no js
    count.colSpan++
    // soma +1 e altera o valor que inicialmente e zero
    count.textContent++
    // desativa o botão quando chegar em 20 veiculos cadastrados para a tabela não ficar feia
    if (count.textContent>19){
        let btn = document.getElementById('btn-enviar').disabled=true;
    }

}
