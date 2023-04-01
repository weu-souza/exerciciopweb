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
    let jaBatido = document.getElementsByName("batido")
    //pega os valores do input com o id ja batido e pega o valor do elemento selecionado
    let escolha = []

    for (let i = 0; i < jaBatido.length; i++) {
        if (jaBatido[i].checked) {
            escolha = jaBatido[i].value
        }
    }

    if (validar()){
        alert("algum campo ficou vazio ou incorreto,preencha o formulario!!")
    }
    else {
        tabela(modelo, cor, ano, nomePropietario, marca, escolha)
    }


}

function tabela(modelo, cor, ano, nomePropietario, marca, escolha) {
    // guarda o valor pego no formulario em um array
    let guardarValor = [modelo, cor, marca, ano, escolha, nomePropietario]
    criarTabela(guardarValor)



// cria uma variavel de acordo com o id do html
let count = document.getElementById('contar')
// soma +1 e altera o valor que inicialmente e zero
count.textContent++

}
function criarTabela(guardarValor){
    let tBoddy = document.getElementById('table-boddy')
    // pega a tudo do documento que estiver com a classe tabela-tr
    let tabelaTr = document.createElement('tr')
    // cria um elemento td na tabela
    let tdMod = document.createElement('td')
    let tdCor = document.createElement('td')
    let tdMarca = document.createElement('td')
    let tdAno = document.createElement('td')
    let tdJaBatido = document.createElement('td')
    let tdPropietario = document.createElement('td')


    // guarda o valor inserido no array pelo input dentro do elemento td
    tdMod.textContent = guardarValor[0]
    tdCor.textContent = guardarValor[1]
    tdMarca.textContent = guardarValor[2]
    tdAno.textContent = guardarValor[3]
    tdJaBatido.textContent = guardarValor[4]
    tdPropietario.textContent = guardarValor[5]

    // cria uma classe tabela-resposta no td(para poder inserir o css que criei com esse mesmo nome)
    tdMod.className = "tabela-resposta"
    tdCor.className = "tabela-resposta"
    tdMarca.className = "tabela-resposta"
    tdAno.className = "tabela-resposta"
    tdJaBatido.className = "tabela-resposta"
    tdPropietario.className = "tabela-resposta"
    // insere o td criado dentro do tr (basicamente fala que o td e o filho do tr e o td e pra ser inserido dentro do tr)
    tabelaTr.append(tdMod,tdCor,tdMarca,tdAno,tdJaBatido,tdPropietario)
    tBoddy.appendChild(tabelaTr)
}
function validar(){
   return !(document.formulario.modelo.value
       && document.formulario.cor.value
       && document.formulario.marcas.value
       && document.formulario.ano.value
       && document.formulario.batido.value
       && document.formulario.proprietario.value);
}
