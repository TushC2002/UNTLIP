
$(document).ready(function(){
    $('.toggle-btn').click(function(){
        $('.toggle-btn').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function() {
    var containerLinks = $('.nav a');
    containerLinks.each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            var href = $(this).attr('href');
            var targetId = $(this).attr('data-target');
            loadContent(href, targetId);
            
            containerLinks.removeClass('active');
            $(this).addClass('active');
        });
    });
});