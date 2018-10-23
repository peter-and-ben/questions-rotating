var steps = 6;
var stepIndex = 0;


//tooltip
//$('header .fa').on('click', function(event) {
//    $('.tooltip, header .fa').toggleClass('active');
//    event.stopPropagation();
//});
//
//$('.tooltip').on('click', function(event) {
//    event.stopPropagation();
//});
//
//$(document).on('click', function(event) {
//    $('.tooltip, header .fa').removeClass('active');
//});


//tip page 

$(document).ready(function () {


    //Random question setup.
    var questionsParent = $('#questions');
    var answersParent = $('#answers');

    randomiseAnswers(answersParent);

    for(i =0; i < steps; i++){
        questionsParent.append( '<h1 id=' + i + '-question class="question-number"><strong>' + 'Q' + (i+1) + '/' + steps + '</strong> </h1>');
        answersParent.children().eq(i).attr("id", (i + '-answer'));

    }

        // initialise
        $('#intro-page .btn').click(function() {
         $('#intro-page').fadeOut(500); 
         $('.example-draggable,.example-dropable,#mouse,#pulse1,#pulse2').removeClass('animated');
     });
        
        $('header .fa').click(function() {
            $('#intro-page').fadeIn(500);
            $('.example-draggable,.example-dropable,#mouse,#pulse1,#pulse2').addClass('animated');
        });
        
        
        
        
        $("#complete-page").hide();
        var notifyIconMaxSize = 40; //Size of the Blinking icon on answer dropped.

        
        $(".question-number, .answer").each(function () {
            $(this).hide();
        });

        $('#0-question').show();
        $('#0-answer').show();

        $('.hidden').hide();
        $('.nextbtn').hide();

        
//restart button
$('.restart-button').click(function () {
    $(".question-number, .answer").each(function () {
        $(this).hide();
    });

    $('.feedback').removeClass('active');

     randomiseAnswers(answersParent);

    for(i =0; i < steps; i++){
        answersParent.children().eq(i).attr("id", (i + '-answer'));
    }

    $('#0-question').show();
    $('#0-answer').show();
    $('.category p').remove();
    $('body').removeClass('completed');

    stepIndex = 0;
});




});


function randomiseAnswers(answerParent) {
        var divs = answerParent.children();
            while (divs.length) {
                answerParent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
            }

        } 




