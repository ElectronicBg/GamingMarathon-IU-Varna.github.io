let currentIndex = 0;

        function nextSlide() {
            currentIndex = (currentIndex + 1) % 6;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + 6) % 6;
            updateSlider();
        }

        function updateSlider() {
            const slider = document.querySelector('.organizer-slider');
            const slideWidth = document.querySelector('.organizer').offsetWidth;
            const newTransformValue = -currentIndex * slideWidth + 'px';
            slider.style.transform = 'translateX(' + newTransformValue + ')';
        }