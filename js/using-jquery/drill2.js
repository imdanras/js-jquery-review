$(function(){


    console.log('The dom is ready! (drill 2)');

    $(document).on('keyup',function(event){
        //output to console which key was pressed
        console.log('The user pressed key: ',event.which);
            // event.preventDefault();
            if (event.which === 83) {
              console.log('you pressed S');
              $('.shape').effect( "shake" );
            } else if (event.which === 37) {
                $('.shape').animate({left: '-='+$(this).width()});
            } else if (event.which === 38) {
              $('.shape').animate({ top: '-='+$(this).height()});
            } else if (event.which === 39) {
              $('.shape').animate({ left: '+='+$(this).width()});
            } else if (event.which === 40) {
              $('.shape').animate({ top: '+='+$(this).height()});
            }
            else {
              console.log('sigh')
            }
      });
  });

