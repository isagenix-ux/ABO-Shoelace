// Import styles
import '../styles/main.scss'

// Import Shoelace components
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/divider/divider.js';
import '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';
import '@shoelace-style/shoelace/dist/components/details/details.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';

// Set the base path for Shoelace assets
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';

// Update the base path to use the CDN with the correct version
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/dist/');

// Your custom JavaScript code can go here 

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const drawer = document.querySelector('.mobile-menu');

    menuToggle?.addEventListener('click', () => {
        drawer.show();
    });

    // Handle Associate Business submenu in both desktop and mobile
    const businessItems = document.querySelectorAll('sl-menu-item:has(.fa-network-wired)');
    const submenus = document.querySelectorAll('.submenu');
    
    // Initialize all submenus as hidden
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
    
    // Add click handlers to all business menu items
    businessItems.forEach((item, index) => {
        item?.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle only the submenu associated with this item
            const submenu = submenus[index];
            submenu.style.display = submenu.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Prevent all submenu items from closing their parent dropdowns
    submenus.forEach(submenu => {
        submenu?.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    // Commission drawer functionality
    const commissionDrawer = document.querySelector('.commission-drawer');
    const dateButton = document.querySelector('.week-total .date');
    const downloadButton = commissionDrawer.querySelector('sl-button');

    dateButton?.addEventListener('click', () => {
        commissionDrawer.show();
    });

    downloadButton?.addEventListener('click', () => {
        window.open('src/images/CommissionStatement-example.pdf', '_blank');
    });

    // Calendar dialog functionality
    const calendarButton = document.querySelector('.commission-calendar');
    const calendarDialog = document.querySelector('.calendar-dialog');

    calendarButton?.addEventListener('click', () => {
        calendarDialog.show();
    });
});

// Initialize Bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Initialize dropdowns
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
}); 