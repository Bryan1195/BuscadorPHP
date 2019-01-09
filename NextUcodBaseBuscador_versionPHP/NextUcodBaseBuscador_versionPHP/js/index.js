/*
  Creación de una función personalizada para jQuery que detecta cuando se detiene el scroll en la página
*/
$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};
/*
  Función que inicializa el elemento Slider
*/

function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}
/*
  Comentad ya que no se cuenta con el archivo
*/
// function playVideoOnScroll(){
  // var ultimoScroll = 0,
      // intervalRewind;
  // var video = document.getElementById('vidFondo');
  // $(window)
    // .scroll((event)=>{
      // var scrollActual = $(window).scrollTop();
      // if (scrollActual > ultimoScroll){
       // video.play();
     // } else {
        // //this.rewind(1.0, video, intervalRewind);
        // video.play();
     // }
     // ultimoScroll = scrollActual;
    // })
    // .scrollEnd(()=>{
      // video.pause();
    // }, 10)
// }

inicializarSlider();
// playVideoOnScroll();

$(document).ready(function() {
    $('select').material_select();
  });
