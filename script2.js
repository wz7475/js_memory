const change_class = (obj) =>{
    //obj.classList.toggle("hidden");
    alert(1);
}

const menu = document.querySelectorAll(".card");
for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function() { alert(this.id); });
}