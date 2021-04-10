const btnTop = document.querySelector('.btnTop')
window.onscroll = function(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        btnTop.classList.add('show')
    }else {
        btnTop.classList.remove('show')
    }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 