$(function() {
    $('header .right .mobile_button').click(function () {
        $(this).toggleClass('active');
        $('header .right ul').toggleClass('active');
        return false;
    })
})
