//Date
function updateDate() {
    var currentDate = new Date();
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    $('#current-date').text(formattedDate);
}
updateDate();

//profiledropdown
$(document).ready(function() {
    
    $(document).on('click', '#profile-toggle', function(event) {
        event.stopPropagation();
        $('#profile-dropdown').toggle();
    });

    
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#profile-dropdown').length) {
            $('#profile-dropdown').hide();
        }
    });

    
    $('#view-profile').click(function() {
        // Logic 
        alert('View Profile clicked');
    });

    
    $('#logout').click(function() {
        // Logic
        alert('Logout clicked');
    });
});


//sidebar
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
});


// Toggle sidebar menu click
$(document).ready(function() {
    $(document).on('click', '.menu-toggle', function(event) {
        event.stopPropagation(); 
        $('.dropdown-menu').toggle(); 
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.sidebar-mobile').length) {
            $('.dropdown-menu').hide();
        }
    });

});


