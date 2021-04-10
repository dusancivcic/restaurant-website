const btnTop = document.querySelector('.btnTop')
window.onscroll = function(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        btnTop.classList.add('show')
    }else {
        btnTop.classList.remove('show')
    }
}
console.log('blablabla')