$(document).ready(function () {
    console.log('ready');
    $('.hamburger').on('click', function () {
        $('.menu').toggleClass('show');
    });

    $('.exit-responsive').on('click', function () {
        $('.menu').toggleClass('show');
    });

    $('.more').on('click', function () {
        $('.box-box1').toggleClass('expand');
    });



});