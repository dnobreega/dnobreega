window.addEventListener("scroll",()=>{
let header = document.querySelector('#header');

/* função - clasLasit - vamos usar o toggle - cria a rolagem se ela não existir, caso exista ele remove*/

header.classList.toggle('rolagem', window.scrollY > 0);

});
