$( document ).ready(function(){
	console.log('tabbed jquery');
    $('body').on('click', '.prevnext', function(e){        
        targ = $(this).attr('data-target');
        $('.tabbednavtab').each(function() {
        	$(this).removeClass('active');
        });
        $('.tab-pane').each(function() {
        	$(this).removeClass('active');
        });
        $('#section-' + targ).addClass('active');
        $('#navtab' + targ).addClass('active');
        console.log(targ);
    });
});