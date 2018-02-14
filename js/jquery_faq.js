"use strict";
{

    let dt = $('dt');

    // Show <dd> when <dt> is clicked.
    $('dd').addClass('invisible');
    dt.click(function (ev) {
        $(this).next().toggleClass('invisible');
    });

    // Highlight last <li> of every <ul>.
    $('#yellow').click(function (ev) {
        $('ul').each(function (i, v) {
            $(this).children().last().css('background', 'yellow');
        });
    });

    // Hide all <ul> and slideToggle() them when their <h3> is clicked.
    $('h3+ul').hide();
    $('h3').click(function (ev) {
        $(this).next().slideToggle().css('font-weight', 'bold');
    });

    // Change color of first <li> in parent <ul> to blue when any <li> is clicked.
    $('li').click(function (ev) {
        $(this).parent().children().first().css('color', 'blue');
    });

    // Hide newsletter nag if <span> is clicked.
    $('#newsletter span').click(function (ev) {
        $(this).parent().slideToggle();
    });

    // After 8 seconds, fade in the hidden <h2>.
    $('h2').hide();
    setTimeout(function() { $('h2').fadeToggle(); }, 8000);
}
