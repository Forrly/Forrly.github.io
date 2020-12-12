let burger = document.getElementsByClassName('burger')[0];
let topMenu = document.getElementsByClassName('top-menu')[0];
burger.addEventListener('click', ()=>{
	burger.classList.toggle('show-menu')
	topMenu.classList.toggle('show')
});
var str = "<h1 ><span style='color:#383838;'>История автогонок</h1>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
}());