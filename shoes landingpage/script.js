var logo = document.querySelector('.wrapper-container');
var menu = document.querySelector('.menu');

logo.addEventListener('click' ,function (){
    menu.classList.toggle('showmenu')
});


// button hover 

(function() {
    const buttons = document.querySelectorAll(".btn-posnawr");
  
    buttons.forEach(button => {
      ["mouseenter", "mouseout"].forEach(evt => {
        button.addEventListener(evt, e => {
          let parentOffset = button.getBoundingClientRect(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
  
          const span = button.getElementsByTagName("span");
  
          span[0].style.top = relY + "px";
          span[0].style.left = relX + "px";
        });
      });
    });
  })();

