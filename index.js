var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".jumbotron",
})
  .setClassToggle(".jumbotron", "fade-up")
  .addTo(controller);
