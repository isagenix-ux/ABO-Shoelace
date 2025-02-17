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

// Set the base path for Shoelace assets
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
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
}); 