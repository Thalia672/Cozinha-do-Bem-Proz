let btnMenuMob = document.querySelector('#btn-menu-mob');
let Line1 = document.querySelector('.line-menumob1');
let Line2 = document.querySelector('.line-menumob2');

btnMenuMob.addEventListener('click', () => {
    Line1.classList.toggle('ativo1');
    Line2.classList.toggle('ativo2');
    
});