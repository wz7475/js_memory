const generade_cards = () =>{
    const main = document.querySelector("main");
    for (let i = 0; i < 12; i++) {
        let card = document.createElement("div");
        card.id = i;
        card.className = "card";
        main.appendChild(card);
    } 
}   

window.addEventListener("load", generade_cards);