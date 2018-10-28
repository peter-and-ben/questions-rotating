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
    //var questionsParent = $('#questions');
    //var answersParent = $('#answers');

    //randomiseAnswers(answersParent);
    // REMOVE
    // for(i =0; i < steps; i++){
    //     questionsParent.append( '<h1 id=' + i + '-question class="question-number"><strong>' + 'Q' + (i+1) + '/' + steps + '</strong> </h1>');
    //     answersParent.children().eq(i).attr("id", (i + '-answer'));
    //
    // }
    // REMOVE
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

        // REMOVE
        // $(".question-number, .answer").each(function () {
        //     $(this).hide();
        // });
        //
        // $('#0-question').show();
        // $('#0-answer').show();
        // REMOVE
        listAnswers();
        $('.nextbtn').hide();


//restart button
$('.restart-button').click(function () {
    // $(".question-number, .answer").each(function () {
    //     $(this).hide();
    // });
    //
    // $('.feedback').removeClass('active');
    //
    //  randomiseAnswers(answersParent);
    //
    // for(i =0; i < steps; i++){
    //     answersParent.children().eq(i).attr("id", (i + '-answer'));
    // }
    //
    // $('#0-question').show();
    // $('#0-answer').show();
    // $('.category p').remove();
    // $('body').removeClass('completed');
    //
    // stepIndex = 0;
    $('.feedback').hide();
    listAnswers();
});




});


function randomiseAnswers(a) {
  //REMOVE
  // var divs = answerParent.children();
  // while (divs.length) {
  //     answerParent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
  // }
  //REMOVE
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function listAnswers() {
  var answersData = [
    {
      img: '1.png',
      mediaOgg: '01_tena_koe.ogg',
      mediaMp3: '01_tena_koe.mp3',
      answers: [
        {
          content: 'person',
          isRight: true
        },
        {
          content: 'wrong',
          isRight: false
        }
      ]
    },
    {
      img: '2.png',
      mediaOgg: '02_tena_koutou.ogg',
      mediaMp3: '02_tena_koutou.mp3',
      answers: [
        {
          content: 'person',
          isRight: true
        },
        {
          content: 'wrong',
          isRight: false
        }
      ]
    },
    {
      img: '3.png',
      mediaOgg: '02_tena_koutou.ogg',
      mediaMp3: '02_tena_koutou.mp3',
      answers: [
        {
          content: 'person',
          isRight: true
        },
        {
          content: 'wrong',
          isRight: false
        }
      ]
    },
    {
      img: '4.png',
      mediaOgg: '02_tena_koutou.ogg',
      mediaMp3: '02_tena_koutou.mp3',
      answers: [
        {
          content: 'person',
          isRight: true
        },
        {
          content: 'wrong',
          isRight: false
        }
      ]
    },
    {
      img: '5.png',
      mediaOgg: '02_tena_koutou.ogg',
      mediaMp3: '02_tena_koutou.mp3',
      answers: [
        {
          content: 'person',
          isRight: true
        },
        {
          content: 'wrong',
          isRight: false
        }
      ]
    },
    {
      img: '6.png',
      mediaOgg: '02_tena_koutou.ogg',
      mediaMp3: '02_tena_koutou.mp3',
      answers: [
        {
          content: 'person',
          isRight: true
        },
        {
          content: 'wrong',
          isRight: false
        }
      ]
    }
  ];
  randomiseAnswers(answersData);
  var answersParent = $('#answers');
  answersParent.empty();
  var answerCreated;
  for (var i=0; i<answersData.length; i++) {
    answersData[i].index = i+1;
    answersData[i].total = answersData.length;
    randomiseAnswers(answersData[i].answers);
    answersParent.append(createAnswer(answersData[i]));
  }
  $('.hidden').hide();
}
function createAnswer(answer) {

  var answerHtml = `<div class="showed question ${answer.index==1 ? '':'hidden'}">`+
  `                  <h1 id="0-question" class="question-number" style="display: block;"><strong>Q${answer.index}/${answer.total}</strong> </h1>`+
  '                    <div class="ico">'+
  `                        <img src="img/${answer.img}">`+
  '                        <br>'+
  '                        <audio controls>'+
  `                            <source src="media/${answer.mediaOgg}" type="audio/ogg">`+
  `                            <source src="media/${answer.mediaMp3}" type="audio/mpeg">`+
  '                            Your browser does not support the audio element.'+
  '                        </audio>'+
  '                    </div>'+
  '                    <div class="answerbox">'+
  '                        <div class="answer1">'+
  `                            <button onclick="${answer.answers[0].isRight ? 'hdit(this)' : 'wrng()'}">${answer.answers[0].content}</button>`+
  '                        </div>'+
  '                        <div class="answer2">'+
  `                            <button onclick="${answer.answers[1].isRight ? 'hdit(this)' : 'wrng()'}">${answer.answers[1].content}</button>`+
  '                        </div>'+
  '                    </div>'+
  '                </div>';
  return $(answerHtml);
}
