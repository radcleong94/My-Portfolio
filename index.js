
// magic scroll effect //
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".jumbotron",
})
  .setClassToggle(".jumbotron", "fade-up")
  .addTo(controller);


  // add class //
  $(document).ready(function(){

    $("#drop-icon").click(function(){
      $("#drop-icon").toggleClass("active");
    });

  });