const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slides = document.querySelectorAll(".slider div ")
const menu   = document.querySelector('.icono')


// menu para movil
menu.addEventListener('click',abrirMenu)
function abrirMenu(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('mostrar')

    
}

// primer slider

setInterval(() => {
    if(!slide2.className.includes('hide')){
        slide2.classList.toggle('hide')
    }else{
        slide2.classList.toggle('hide')
    }
    
}, 3000);

//carousel de imagenes
const res = document.querySelector("#re");
const sc = document.querySelector('.comentarios');


    
sc.addEventListener('click',()=>{

    if(sc.scrollLeft == 340){
        
        let fcdiv = sc.firstElementChild;
        sc.removeChild(sc.firstElementChild)
        sc.append(fcdiv);
        sc.scrollLeft = 0
       }
       sc.scrollLeft+=34
 
})
  



$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});
