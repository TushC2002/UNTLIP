function loadContent(url, containerId) {
    $.get(url, function(data) {
        $(`#${containerId}`).html(data);
    }).fail(function() {
        console.error('Failed to load content');
    });
}

$(document).ready(function() {
    var sidebarLinks = $('.menu a');
    sidebarLinks.each(function() {
        $(this).on('click', function(event) {
            event.preventDefault();
            var href = $(this).attr('href');
            var targetId = $(this).attr('data-target');
            loadContent(href, targetId);
            
            sidebarLinks.removeClass('active');
            $(this).addClass('active');
        });
    });

    var activeLink = $('.menu a.active');
    if (!activeLink.length) {
        var firstLink = $('.menu a').first();
        if (firstLink.length) {
            firstLink.addClass('active');
        }
    }

    var currentUrl = window.location.href;
    if (currentUrl.indexOf('dashboard.html') === -1) {
        loadContent('dashboard.html', 'dynamicContent');
        $('.menu a[href="dashboard.html"]').addClass('active');
    }
});








