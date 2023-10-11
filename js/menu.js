let open_hamburguer = document.querySelector(".menu-container")
let open_menu = document.querySelector(".open-menu")
open_menu.addEventListener('click',()=>{
    open_hamburguer.classList.toggle("show-menu")
})