//ignore this if you are not typing it in WordPress

jQuery(document).ready(function( $ ){


});






//Disable Devloper console

jQuery(document).ready(function( $ ){



  $(document).keydown(function(e){
		if(e.which === 123){
		   return false;
		}
	});






});



//Right Click Disable


jQuery(document).ready(function( $ ){





  $(document).ready(function() {
          $("body").on("contextmenu", function(e) {
              return false;
            });
        });





});


//Copy paste disable
jQuery(document).ready(function( $ ){





    // Your code in here
  $(document).ready(function() {
          $('body').bind('cut copy', function(e) {
              e.preventDefault();
            });
        });






});
