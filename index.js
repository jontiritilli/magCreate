$(document).ready(addHandlers);

function addHandlers(){
  let element = $('nav ul li');
  let button = $('.header--menutoggle');
  let menu = $('.header--menu');
  element.on('click',function(e){
      $(this).toggleClass('active').siblings().removeClass('active');
      e.stopPropagation();
    }
  );
  button.on('click', function(e) {
    menu.toggleClass('show')
    e.stopPropagation();
  });
  $(window).on('click',function(e) {
    if(element.hasClass('active')){
      element.removeClass('active');
    }
    if(menu.hasClass('show')){
      menu.removeClass('show');
    }
  });
}
