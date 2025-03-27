function filterImages(category) {
    let images = document.querySelectorAll('.image');
    images.forEach(img => {
        img.style.display = (category === 'All' || img.classList.contains(category)) ? 'block' : 'none';
    });
    document.querySelectorAll('.buttons button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
