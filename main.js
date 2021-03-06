$(document).ready(function() {

    // nav bar shadowing effect

    $(window).scroll(function() {
        var y = $(window).scrollTop();
        if (y === 0) {
            $(".navbar.navbar-default.navbar-fixed-top").css({
                'box-shadow': '0px 0px 0px 0px'
            });
        } else {
            $(".navbar.navbar-default.navbar-fixed-top").css({
                'box-shadow': '1px 1px 12px 1px'
            });
        }
    });

// slide animation

    $(window).scroll(function() {
        $(".slideanim").each(function() {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

    // Add smooth scrolling to all links in navbar + footer link

    $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});