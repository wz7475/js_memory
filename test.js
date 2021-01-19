const generate_array = () =>{
    const get_random = () => {
        let min = 1;
        let max = 8;
        return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    }
    
    const get_random_tab = () => {
        let min = 0;
        let max = 8;
        return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
    }
    
    const tab1 = [];
    while (tab1.length < 8) {
        let r = get_random();
        if (!tab1.includes(r))
            tab1.push(r);
    }
    
    const tab2 = [];
    while (tab2.length < 8) {
        let r = get_random();
        if (!tab2.includes(r))
            tab2.push(r);
    }
    
    const tab = [];
    while (tab.length < 16) {
        if (get_random_tab()==0) {
            if(tab1.length != 0)
                tab.push(tab1.pop())
        }else{
            if(tab2.length != 0)
                tab.push(tab2.pop())
        }
    }
    return tab;
}

const translator = {
    1 : "bishop.svg",
    2 : "board.svg",
    3 : "king.svg",
    4 : "knight.svg",
    5 : "pawn.svg",
    6 : "pieces.svg",
    7 : "queensvg",
    8 : "rook.svg"
}

tab = generate_array();
for (let i = 0; i<tab.length; i++){
    console.log(translator[tab[i]]);
}