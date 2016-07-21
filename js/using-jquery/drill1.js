$(function(){
    console.log('The dom is ready! (drill 1)');
    function getRandomInt() {
    return Math.floor((Math.random() * 400) + 1);
  }
    $('.shape').click(function(e) {
      e.preventDefault();
      $('.shape').fadeOut(0);
      $('.shape').css({ top: getRandomInt(), left: getRandomInt() });
      $('.shape').fadeIn(3000);
    });
//document.ready parens
});

