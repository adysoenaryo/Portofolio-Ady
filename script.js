// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Here you can add code to handle form submission, like sending an AJAX request
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});