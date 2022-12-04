
$(document).ready(function() {
    $('.header').each( function(i){

        $(this).animate({'opacity':'1'},500);
        $('body').animate({'background-color':'grey'},500); 
        
}); 
$('.skill').each( function(i){

    $(this).animate({'opacity':'1'},1500);
    $('body').animate({'background-color':'grey'},1500); 
    
});
$('.about').each( function(i){

    $(this).animate({'opacity':'1'},1000);
    $('body').animate({'background-color':'grey'},1000); 
    
});
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
		
    //     /* Check the location of each desired element */
    //     $('.about').each( function(i){
            
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object ){
                
    //             $(this).animate({'opacity':'1'},500);
    //             $('body').animate({'background-color':'grey'},500);    
    //         }
            
    //     }); 
    //     $('.skill').each( function(i){
            
    //         var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();
            
    //         /* If the object is completely visible in the window, fade it it */
    //         if( bottom_of_window > bottom_of_object ){
                
    //             $(this).animate({'opacity':'1'},500);
    //             $('body').animate({'background-color':'grey'},500);    
    //         }
            
    //     }); 
        
    });
    
});

var a=1;w
function darkmode(){
  var change=document.body
  document.getElementById("pp").src
  if(a%2==1){

    change.classList.remove("darkmode");
    change.classList.toggle("default");
    document.getElementById("pp").src="foto2.png";
    
  }
  else if(a%2==0){
    change.classList.remove("default");
    change.classList.toggle("darkmode");
    document.getElementById("pp").src="foto3.png";
  }
  a++;
}