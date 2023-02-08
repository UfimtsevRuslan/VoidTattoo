const burgerMenu = document.querySelector('.burger-menu')

burgerMenu.onclick = function(){
    burgerMenu.classList.toggle('none')
    if (burgerMenu.classList.contains('none') == true){
        document.getElementsByClassName('contacts-wrapper')[0].style= "display: block";
        document.getElementsByClassName('nav-wrapper')[0].style= "display: block";
        document.getElementsByClassName('logo')[0].style= "display: none";
    }
    else{
        document.getElementsByClassName('contacts-wrapper')[0].style= "display: none";
        document.getElementsByClassName('nav-wrapper')[0].style= "display: none";
        document.getElementsByClassName('logo')[0].style= "display: block";
    }
}