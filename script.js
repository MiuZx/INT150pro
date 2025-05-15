
document.addEventListener("DOMContentLoaded", function () {
    const newsContent = document.querySelector('.news-content');
    const progressBar = document.getElementById('myBar');
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Function to update the progress bar width based on scroll position
    newsContent.addEventListener('scroll', function () {
        const scrollLeft = newsContent.scrollLeft;
        const maxScrollLeft = newsContent.scrollWidth - newsContent.clientWidth;
        const scrollPercent = (scrollLeft / maxScrollLeft) * 100;
        progressBar.style.width = scrollPercent + '%';

        // Update arrow button states (enabled/disabled)
        updateArrowButtons(scrollLeft, maxScrollLeft);
    });

    // Function to update the arrow button states (enabled/disabled)
    function updateArrowButtons(scrollLeft, maxScrollLeft) {
        if (scrollLeft === 0) {
            scrollLeftBtn.classList.add('disabled'); // Disable the left arrow
        } else {
            scrollLeftBtn.classList.remove('disabled'); // Enable the left arrow
        }

        if (scrollLeft >= maxScrollLeft) {
            scrollRightBtn.classList.add('disabled'); // Disable the right arrow
        } else {
            scrollRightBtn.classList.remove('disabled'); // Enable the right arrow
        }
    }

    // Arrow buttons scroll behavior
    scrollLeftBtn.addEventListener('click', function () {
        if (!scrollLeftBtn.classList.contains('disabled')) {
            newsContent.scrollBy({ left: -300, behavior: 'smooth' });
        }
    });

    scrollRightBtn.addEventListener('click', function () {
        if (!scrollRightBtn.classList.contains('disabled')) {
            newsContent.scrollBy({ left: 300, behavior: 'smooth' });
        }
    });

    // Initial call to update arrow buttons on page load
    const initialScrollLeft = newsContent.scrollLeft;
    const maxScrollLeft = newsContent.scrollWidth - newsContent.clientWidth;
    updateArrowButtons(initialScrollLeft, maxScrollLeft);
});
