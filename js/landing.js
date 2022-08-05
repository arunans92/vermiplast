$(document).ready(function(){
  var findHeaderInterval = setInterval(findHeader, 100);
  function findHeader() {
    if($('.navbar').length > 0){
      $('.navbar').removeClass('navScrollBg');
      $('.navbar-brand').addClass('hide');
      stopInterval(findHeaderInterval);
    }
  }
  function stopInterval(intervalFunction) {
    clearInterval(intervalFunction);
  }


  $(window).scroll(function() {
    var windowScrollTop = $(window).scrollTop()
    if(windowScrollTop > 200){
      $('.navbar').addClass('navScrollBg')
      $('.navbar-brand').removeClass('hide')
      $('.navbar-brand').addClass('show')
    }else{
      $('.navbar').removeClass('navScrollBg')
      $('.navbar-brand').addClass('hide')
      $('.navbar-brand').removeClass('show')
    }
    })
 })
