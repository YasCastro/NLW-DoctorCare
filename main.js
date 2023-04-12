function onScroll()
{
    if (scrollY > 0)
    {
        //console.log(menuzinho)
        nave.classList.add('scroll')
    } 
    else {
        //console.log(menuzinho)
        nave.classList.remove('scroll')
    }   
}

function openMenu()
{
    document.body.classList.add('menu-expanded')
}


function closeMenu()
{
    document.body.classList.remove('menu-expanded')
}
