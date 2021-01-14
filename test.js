const get_random = () => {
    let min = 1;
    let max = 6;
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}

const get_random_tab = () => {
    let min = 0;
    let max = 1;
    return Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}

const tab1 = [];
while (tab1.length < 6) {
    let r = get_random();
    if (!tab1.includes(r))
        tab1.push(r);
}

const tab2 = [];
while (tab2.length < 6) {
    let r = get_random();
    if (!tab2.includes(r))
        tab2.push(r);
}

console.log(tab1);
console.log(tab2);
const tab = [];
while (tab.length < 12) {
    if (get_random_tab()==0) {
        if(tab1.length != 0)
            tab.push(tab1.pop())
    }else{
        if(tab2.length != 0)
            tab.push(tab2.pop())
    }
}
console.log(tab);
console.log(tab.length);
