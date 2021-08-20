$(document).ready(function () {
    var currentFlopr = 2;
    let counterUp = $(".counter-up");
    let counterDown = $('.counter-down');
    let modal = $('.modal');
    let floorPath = $('.home-image path');
    let modalCloseBtn = $('.modal-close-btn')

        floorPath.on('mouseover', function(){
        currentFlopr = $(this).attr('data-floar');
        $('.counter').text(currentFlopr);
        floorPath.removeClass("current-floor");
    });

    floorPath.on('click', function(){
        modal.toggleClass('is-open')
    })
    modalCloseBtn.on('click', function(){
        modal.removeClass('is-open')
    })

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