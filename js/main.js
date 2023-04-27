// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella contiene un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
let wrapper = document.getElementById("wrapper");
let btn = document.getElementById("btn");
let oneClick = false;
console.log(oneClick);

btn.addEventListener("click", function () {
  if (oneClick == false) {
    for (let c = 1; c <= 100; c++) {
      let box = document.createElement("div");
      box.classList.add("box");
      wrapper.appendChild(box);
      box.textContent = c;
      box.addEventListener("click", function () {
        this.classList.toggle("selected");
        console.log(box);
      });
    }
  }
  oneClick = true;
});

// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
