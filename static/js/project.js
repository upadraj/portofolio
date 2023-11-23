$(document).ready(function() {
  $(window).scroll(function() {
    // Calculate the height of one page
    var onePageHeight = $(window).height();
    console.log(onePageHeight)

    // If the user has scrolled more than one page height, show the button
    if ($(this).scrollTop() > onePageHeight) {
      $('.scroll-to-top').css('opacity', '100%');
       console.log("Inside the if statement.")
    } else {
      $('.scroll-to-top').css('opacity', '0');
       console.log("Inside the else statement.")
    }
  });

  $("#icon-hamburger").click(function() {
    $("#nav-mobile").removeClass("d-none");
    $("#icon-hamburger").addClass("d-none ");
     $('#btn-close').removeClass("d-none")
  });
  $("#btn-close").click(function() {
     $("#nav-mobile").addClass("d-none");
      $("#icon-hamburger").removeClass("d-none");
     $('#btn-close').addClass("d-none")
  });
});






