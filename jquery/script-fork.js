$(function() {
    $('.fadein img:gt(0)').hide();
    setInterval(function() {
        $('.fadein :first-child').fadeOut()
            .next('img').fadeIn()
            .end().appendTo('.fadein');
    }, 3500);
});

$(".dropbtn").click(function() {
    $(this).parent().children(".dropdown-content").slideToggle();
})

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function(e) {
    width = "+=" + $(document).width() / 4;
    $("#logo img").animate({
        left: width
    }, 2000, function() {
        // Animation complete.
    });
});