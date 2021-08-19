$(document).ready(function () {
    var currentFlopr = 2;
    let counterUp = $(".counter-up");
    let counterDown = $('.counter-down');
    $('.home-image path').on('mouseover', function(){
        currentFlopr = $(this).attr('data-floar');
        $('.counter').text(currentFlopr);
        $('.home-image path').removeClass("current-floor");
    });


    counterUp.on('click', function(){
        if(currentFlopr < 18){
            currentFlopr++;
        uscurrentFlopr = currentFlopr.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
        $('.counter').text(uscurrentFlopr);
       
        }
    })
    counterDown.on('click', function(){
        if(currentFlopr > 2){
            currentFlopr--;
            uscurrentFlopr = currentFlopr.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(uscurrentFlopr);
            $('.home-image path').removeClass("current-floor");
            $(`[data-floor=${uscurrentFlopr}]`).toggleClass("current-floor");
        }
    })
});