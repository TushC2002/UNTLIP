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

});

$(document).ready(function() {
    $(document).on('click', '.menu-toggle', function(event) {
        event.stopPropagation(); 
        $('.dropdown-menu').toggle(); 
    });

    
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.sidebar-mobile').length && !$(event.target).closest('.menu-toggle').length) {
            $('.dropdown-menu').hide();
        }
    });

    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        $('#user-info').text(user.name + "-" + user.role);
        $('#profile-name').text(user.name);
        $('#profile-role').text(user.role);
        $('#profile-image').attr('src', 'images/profile.png'); 

        
        if (user.role === "Admin") {
            $('#faq-tab').hide();
            $('#support-tab').hide();
        } else if (user.role === "Super Admin") {
            $('#clients-tab').hide();
            $('#finance-tab').hide();
        }

        
        if (user.role === "Admin") {
            $('.sidebar-mobile #faq-tab').hide();
            $('.sidebar-mobile #support-tab').hide();
        } else if (user.role === "Super Admin") {
            $('.sidebar-mobile #clients-tab').hide();
            $('.sidebar-mobile #finance-tab').hide();
        }
    }

    $('#logout').click(function() {
        localStorage.removeItem('user'); 
        window.location.href = "index.html"; 
    });

    $('#view-profile').click(function() {
        $('#profileModal').modal('show');
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



