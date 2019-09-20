window.onload = function() {
  // JavaScript for scroll to top button
  const scrollToTopButton = document.getElementById('scroll-to-top');
  const downButton = document.getElementById('scroll-to-bottom');
  const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 500) {
      scrollToTopButton.className = "scroll-top show";
      downButton.className = "down-arrow hide";
    } else {
      scrollToTopButton.className = "scroll-top hide";
      downButton.className = "down-arrow show";
    }
  };
  window.addEventListener("scroll", scrollFunc);

  $('.scroll-top').click(function() {
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') )
    }, 100);
     return false;
  });
};
