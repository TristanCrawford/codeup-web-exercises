"use strict";
{
    $('dd').addClass('invisible');

    let dt = $('dt');

    dt.click(function (ev) {
        $(this).next().toggleClass('invisible');
    });

    $('#yellow').click(function (ev) {
        $('ul').each(function (i, v) {
            $(this).children().last().css('background', 'yellow');
        });
    });

    $('h3+ul').hide();

    $('h3').click(function (ev) {
        $(this).next().each( function (i, v) {
            $(this).slideToggle();
            $(this).children().css('font-weight', 'bold');
        });
    });

    $('li').click(function (ev) {
        $(this).parent().children().first().css('color', 'blue');
    });

    $('#newsletter span').click(function (ev) {
        $(this).parent().slideToggle();
    });

    $('h2').hide();
    setTimeout(function() { $('h2').fadeToggle(); }, 8000);
}
