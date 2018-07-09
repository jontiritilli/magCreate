$(document).ready(addHandlers);

function addHandlers(){
  let element = $('nav ul li');
  element.on('click',function(e){
      $(this).toggleClass('active').siblings().removeClass('active');
      e.stopPropagation();
    }
  );
  $(window).on('click',function(e) {
    if(element.hasClass('active')){
      element.removeClass('active');
    }
  });
}
