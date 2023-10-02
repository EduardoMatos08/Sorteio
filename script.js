function randomizerNumber(){

    const numMax = Math.ceil(document.querySelector("#left-input").value)
    const numMin = Math.floor(document.querySelector("#right-input").value)

    if(numMin >= numMax) {
        alert('O valor mínimo tem de ser MENOR que o valor máximo...')
    }

    if(numMax <= numMin) {
        alert('O valor máximo tem de ser MAIOR que o valor mínimo...')
    }

    else {
        const randomizedNum = Math.floor(Math.random() * (numMax - numMin) + numMin)
        alert(`O número ${randomizedNum} foi sorteado!`)
    }

}