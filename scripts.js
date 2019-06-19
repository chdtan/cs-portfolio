console.log('working');

$(document).ready(function () {
    console.log('ready');
    $('.hamburger').on('click', function () {
        $('.menu').toggleClass('show');
    });

    $('.exit-responsive').on('click', function () {
        $('.menu').toggleClass('show');
    });

    // $('.gallery img').on('click', function (click) {
    //     const details = $(this).data("detail");
    //     const detailsID = "#" + details;
    //     $(detailsID).toggleClass("expand");
    // });
    
});