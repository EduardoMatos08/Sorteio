function randomizerNumber(){

    const numMax = Math.ceil(document.querySelector("#right-input").value)
    const numMin = Math.floor(document.querySelector("#left-input").value)

    if(numMax == "" || numMin == ""){
        alert("Para sortear é preciso digitar um número...")
    }

    else if(numMax < numMin) {
        alert("O valor máximo tem de ser MAIOR que o valor mínimo...")
    }

    else if(numMax == numMin){
        alert("Os números precisam ser diferentes...")
    }

    else {
        const randomizedNum = Math.floor(Math.random() * (numMax - numMin) + numMin)
        alert(`O número ${randomizedNum} foi sorteado!`)
    }

}

const button = document.querySelector("button")
button.addEventListener("click", randomizerNumber)
