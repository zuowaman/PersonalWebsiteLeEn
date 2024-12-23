// jQuery


var $grid = $('.grid').imagesLoaded(function () {
  // init Masonry after all images have loaded
  $grid.masonry({
    columnWidth: 200,
    itemSelector: '.grid-item'
  });
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});
