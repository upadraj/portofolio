$(document).ready(function() {
  $(window).scroll(function() {
    // Calculate the height of one page
    var onePageHeight = $(window).height();
    console.log(onePageHeight)

    // If the user has scrolled more than one page height, show the button
    if ($(this).scrollTop() > onePageHeight) {
      $('.scroll-to-top').css('color', 'none');
       console.log("Inside the if statement.")
    } else {
      $('.scroll-to-top').css('display', 'inline');
       console.log("Inside the else statement.")
    }
  });

  // Smooth scroll to top when the button is clicked
  $('#scrollToTopBtn button').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});






