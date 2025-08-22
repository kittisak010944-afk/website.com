// Modal functionality for project images
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        // Create modal element
        const modal = document.createElement('div');
        modal.className = 'modal';
        document.body.appendChild(modal);

        // Add click listeners to all gallery images
        gallery.querySelectorAll('.info').forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                modal.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
                modal.style.display = 'block';

                // Prevent scrolling when modal is open
                document.body.style.overflow = 'hidden';
            });
        });

        // Close modal on click
        modal.addEventListener('click', function() {
            this.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
