const generade_cards = () =>{
    const main = document.querySelector("main");
    for (let i = 0; i < 16; i++) {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.src = "img/pawn.svg";
        card.id = i;
        card.className = "card";
        card.appendChild(img);
        main.appendChild(card);
    } 
}   

window.addEventListener("load", generade_cards);