$(document).ready(function(){
  
let currentPath = window.location.pathname

setActiveHeader(currentPath)

function setActiveHeader(currentPath) {
 var findHeaderInterval = setInterval(findHeader, 100);
  function findHeader() {
    if($('.navbar').length > 0){
      var link = $('.nav li').each(function(){
        var thisLink = $(this).find('a')
        var pageLink = thisLink.attr('href')
        pageLink = '/'+ pageLink
        if(pageLink === currentPath){
          $($(this)).addClass('active')
        }
      })
      stopInterval(findHeaderInterval);
    }
  }
  function stopInterval(intervalFunction) {
    clearInterval(intervalFunction);
  }
}

$('body').on('click', 'footer a[href="#"]', function(event) {
  $('html, body').animate({
    scrollTop: 0
  }, 900);
  event.preventDefault();
});

$('body').on('click', '#tileTypes .panel-footer button', function(event) {
  var tileMeasurementsTop = $('#tileMeasurements').offset().top
  $('html, body').animate({
    scrollTop: tileMeasurementsTop - 50
  }, 900);
  event.preventDefault();
});

openWishesPopup();

function openWishesPopup(){
  var date = new Date();
  var formatedDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

  if (formatedDate == "1/1/2022") {
     $('#myModal').modal('show')
  }
}
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})