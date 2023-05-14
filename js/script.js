const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile')

bx.addEventListener('click', () => {
    console.log("test")
   bx.classList.toggle('active');
   menu_mobile.classList.toggle('showmenu');

})

link_mobile.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menu_mobile.classList.remove('showmenu');
        bx.classList.toggle('active');
    })
})