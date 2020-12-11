let burger = document.getElementsByClassName('burger')[0];
let topMenu = document.getElementsByClassName('top-menu')[0];
burger.addEventListener('click', ()=>{
	burger.classList.toggle('show-menu')
	topMenu.classList.toggle('show')
});
