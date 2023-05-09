// salvo l'elemento della tabella e del bottone
const tabella = document.querySelector (".grid");
const button = document.getElementById ("play");

// al click inserisco la classe active che fa visualizazre la grid
button.addEventListener ("click",
function () {

    tabella.classList.add ("active")

}

)





// funzione per creare 100 numeri casuali

for (let i=1 ; i<101 ; i++) {
    var newsquare = createGridSquare("div","square")
   
    tabella.append(newsquare)
    newsquare.append([i])

    newsquare.addEventListener("click",
    function(){
        this.classList.add ("blue")
    }
    )
    
}



// Funzioni
// funzione per creare i box all'interno della grid
function createGridSquare (tagtype,classToAdd) {
    const newElement = document.createElement (tagtype);
    newElement.classList.add (classToAdd);
    return newElement
}