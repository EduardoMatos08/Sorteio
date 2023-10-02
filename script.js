function randomizerNumber(){

    const numMax = Math.ceil(document.querySelector("#left-input").value)
    const numMin = Math.floor(document.querySelector("#right-input").value)

    if(numMin >= numMax) {
        alert('O valor mínimo tem de ser MENOR que o valor máximo...')
    }

    else {
        const randomizedNum = Math.floor(Math.random() * (numMax - numMin) + numMin)
        alert(`O número ${randomizedNum} foi sorteado!`)
    }

}