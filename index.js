
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

// Night mode function//
  let myFunction = false;
  let setButton = document.querySelector('.setBtn');

 function nightMode(){

    if(setButton.textContent === "Night Mode"){
        setButton.textContent = "Bright Mode";
        document.body.style.background = "#000000cf";
        document.body.style.opacity = .8;
        setButton.style.color = "black";
        setButton.style.background = "white";
        setButton.style.border = "1px solid white";

        let x = document.querySelectorAll('h3');
        for(var i=0;i < x.length;i++){
          x[i].style.color = "white";
        };
        
        let y = document.querySelectorAll('.nightmode');
        for(var j=0;j < y.length; j++){
          y[j].style.color = 'white';
        }
  }else{
    setButton.textContent = "Night Mode";
    setButton.style.color = "white";
    setButton.style.background = "rgb(53, 53, 53)";
    setButton.style.border = "1px solid rgb(53, 53, 53)";

    document.body.style.background = "rgb(238, 249, 252)";
        document.body.style.opacity = 1;
        
        let x = document.querySelectorAll('h3');
        for(var i=0;i < x.length;i++){
          x[i].style.color = "black";
        };
        
        let y = document.querySelectorAll('.nightmode');
        for(var j=0;j < y.length; j++){
          y[j].style.color = 'black';
        }
  }
  }