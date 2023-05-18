var nav = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>
{
    if(window.scrollY>80)
    {
        nav.classList.add('navbar-bg');
    }
    else
    {
        nav.classList.remove('navbar-bg');
    }
})