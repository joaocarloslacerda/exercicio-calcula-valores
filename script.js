function somarValoresInputs(){
    const inputNumberUm = Number(document.getElementById("numberUm").value)
    const inputNumberDois = Number(document.getElementById("numberDois").value)
    const inputNumberTres = Number(document.getElementById("numberTres").value)

    document.getElementById("resultado").value = inputNumberUm + inputNumberDois + inputNumberTres
}