    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            event.preventDefault(); // Prevent form submission
            alert('Please fill in all fields.');
        }
    });

    window.addEventListener('load', function() {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.blank-image img');
    
        // Initially hide the banner images
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
    
        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        }
    
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
    
        setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    });
