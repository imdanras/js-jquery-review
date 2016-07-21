$(function(){


    console.log('The dom is ready! (drill 3)');

    $('.shape').hover(function() {
      $(this).removeClass('ball')
      $(this).css('background-color', 'red');
    }, function() {
      $(this).addClass('ball')
      $(this).css('background-color', '#4444CC')
    })
//document parens
});


