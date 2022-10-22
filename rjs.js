
$(document).ready(function() {
    $('.header').each( function(i){
            
            
                
        $(this).animate({'opacity':'1'},500);
        $('body').animate({'background-color':'grey'},500);    
   
    
}); 
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
		
        /* Check the location of each desired element */
        $('.about').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                $('body').animate({'background-color':'grey'},500);    
            }
            
        }); 
        $('.skill').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                $('body').animate({'background-color':'grey'},500);    
            }
            
        }); 
        
    });
    
});