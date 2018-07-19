// Some custom js
function nav_trans () {
  $(window).scroll(function() {
    if($(this).scrollTop() > 250) {
      $('.main-nav').addClass('not-transparent-nav');
    } else {
      $('.main-nav').removeClass('not-transparent-nav');
    }
  });
}