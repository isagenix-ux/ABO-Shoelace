// Import styles
import '../styles/main.scss'

// Initialize Bootstrap tooltips
$(document).ready(function() {
    // Initialize all dropdowns
    $('[data-toggle="dropdown"]').dropdown();

    // Initialize all tooltips with specific options
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover',  // Show on hover
        html: true,        // Allow HTML in tooltips
        container: 'body'  // Attach tooltips to body to avoid positioning issues
    });

    // Handle submenu on hover for desktop
    if (window.innerWidth >= 992) {
        $('.dropdown-submenu').hover(
            function() {
                $(this).find('.dropdown-menu').first().show();
            },
            function() {
                $(this).find('.dropdown-menu').first().hide();
            }
        );
    }

    // Calendar modal trigger
    $('.commission-calendar').click(function() {
        $('#calendarModal').modal('show');
    });

    // Commission Statement PDF download
    $('.download-pdf').click(function() {
        window.open('src/images/CommissionStatement-example.pdf', '_blank');
    });

    // Initialize all popovers
    $(function () {
        $('[data-toggle="popover"]').popover({
            trigger: 'hover'
        });
    });
}); 