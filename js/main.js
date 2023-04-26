// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella contiene un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
let wrapper = document.getElementById("wrapper");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  for (let c = 1; c <= 100; c++) {
    let box = document.createElement("div");
    box.classList.add("box");
    wrapper.appendChild(box);
    box.innerHTML = c;
    console.log(box);
  }
});

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
