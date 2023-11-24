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
  $("#form-submission").submit(function(event) {
      event.preventDefault();
      $.ajax({
          url: $(this).attr('action'),
          type: $(this).attr('method'),
          data: new FormData(this),
          processData: false,
          contentType: false,
          success: function(data) {
              $('#successMessage').html('!!Message has been sent to Rajesh!!').show();
              $('#successMessage').removeClass("d-none");
              $("#form-submission")[0].reset()
          },
          error: function(error) {
              console.error('Error:', error);
          }
      });
       setTimeout(function(){$('#successMessage').addClass("d-none");},3000);
      // Prevent the default behavior and stop event propagation
      return false;
  })
});






