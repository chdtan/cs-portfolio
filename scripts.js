$(document).ready(function () {
    console.log('ready');
    $('.hamburger').on('click', function () {
        $('.menu').toggleClass('show');
    });

    $('.exit-responsive').on('click', function () {
        $('.menu').toggleClass('show');
    });

    // $("body").click(function (e) {
    //     if (e.target.class !== '.exit-responsive') {
    //         $(".menu").hide();
    //     }
    // });

    // const imageArray = []


    $('.gallery img').on('click', function (click) {
        const details = $(this).data("detail");
        const detailsID = "#" + details;
        $(detailsID).toggleClass("expand");
    });


    
});