function somarValoresInputs(){
    const inputNumberUm = Number(document.getElementById("numberUm").value)
    const inputNumberDois = Number(document.getElementById("numberDois").value)
    const inputNumberTres = Number(document.getElementById("numberTres").value)

    document.getElementById("resultado").value = inputNumberUm + inputNumberDois + inputNumberTres
}

function concatenacao(){

    let pessoa = {
        nome: document.getElementById("firstname").value,
        sobrenome: document.getElementById("surname").value,
        anoNascimento: document.getElementById("yearBirth").value,
        concatena: function() {
            concatenarNomes(pessoa.nome, pessoa.sobrenome, pessoa.anoNascimento)
        }
    }   
    pessoa.concatenaNomesPessoa()
}

function concatenarNomes(nome, sobrenome, anoNascimento){
    let dadosPessoa = nome + ' ' + sobrenome + ', ano nascimento ' + anoNascimento
    
    document.getElementById("resultado").value = dadosPessoa
}