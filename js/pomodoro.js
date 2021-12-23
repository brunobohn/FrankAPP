$(document).ready(function() {
  var icon = $('.play');
  icon.click(function() {
     icon.toggleClass('active');
     return false;
  });
});

function play() {
       var audio = document.getElementById('audio');
       if (audio.paused) {
           audio.play();
           $('#play').removeClass('glyphicon-play-circle')
           $('#play').addClass('glyphicon-pause')
           audio.volume = 0.5;
       }else{
           audio.pause();
           audio.loop = 1;
           $('#play').addClass('glyphicon-play-circle')
           $('#play').removeClass('glyphicon-pause')
       }
   }

  function play1() {
        var audio = document.getElementById('audio1');
        if (audio.paused) {
              audio.play();
              $('#play').removeClass('glyphicon-play-circle')
              $('#play').addClass('glyphicon-pause')
              audio.volume = 0.5;
        }else{
              audio.pause();
              audio.loop = 1;
              $('#play').addClass('glyphicon-play-circle')
              $('#play').removeClass('glyphicon-pause')
          }
      }

      function play2() {
            var audio = document.getElementById('audio2');
            if (audio.paused) {
                  audio.play();
                  $('#play').removeClass('glyphicon-play-circle')
                  $('#play').addClass('glyphicon-pause')
                  audio.volume = 0.5;
            }else{
                  audio.pause();
                  audio.loop = 1;
                  $('#play').addClass('glyphicon-play-circle')
                  $('#play').removeClass('glyphicon-pause')
              }
          }

function play3() {
                var audio = document.getElementById('audio3');
                if (audio.paused) {
                      audio.play();
                      audio.volume = 0.5;
                      $('#play').removeClass('glyphicon-play-circle')
                      $('#play').addClass('glyphicon-pause')
                }else{
                      audio.pause();
                      audio.loop = 1;
                      $('#play').addClass('glyphicon-play-circle')
                      $('#play').removeClass('glyphicon-pause')
                  }
              }

function play4() {
  var audio = document.getElementById('audio4');
  if (audio.paused) {
    audio.play();
    audio.volume = 0.5;
      $('#play').removeClass('glyphicon-play-circle')
      $('#play').addClass('glyphicon-pause')
  } else{
    audio.pause();
    audio.loop = 1;
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
}
}

function play5() {
var audio = document.getElementById('audio5');
if (audio.paused) {
audio.play();
audio.volume = 0.5;
  $('#play').removeClass('glyphicon-play-circle')
  $('#play').addClass('glyphicon-pause')
}else{
      audio.pause();
      audio.loop = 1;
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
    }
  }

function play6() {
    var audio = document.getElementById('audio6');
    if (audio.paused) {
        audio.play();
        audio.volume = 0.5;
        $('#play').removeClass('glyphicon-play-circle')
        $('#play').addClass('glyphicon-pause')
} else{
        audio.pause();
        audio.loop = 1;
        $('#play').addClass('glyphicon-play-circle')
        $('#play').removeClass('glyphicon-pause')
  }
}

function play7() {
    var audio = document.getElementById('audio7');
    if (audio.paused) {
      audio.play();
      audio.volume = 0.5;
      $('#play').removeClass('glyphicon-play-circle')
      $('#play').addClass('glyphicon-pause')
} else{
      audio.pause();
      audio.loop = 1;
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
  }
}

function play8() {
      var audio = document.getElementById('audio8');
      if (audio.paused) {
          audio.play();
          audio.volume = 0.5;
          $('#play').removeClass('glyphicon-play-circle')
          $('#play').addClass('glyphicon-pause')
}else{
          audio.pause();
          audio.loop = 1;
          $('#play').addClass('glyphicon-play-circle')
          $('#play').removeClass('glyphicon-pause')
          }
        }

function play9() {
          var audio = document.getElementById('audio9');
            if (audio.paused) {
            audio.play();
            audio.volume = 0.5;
            $('#play').removeClass('glyphicon-play-circle')
            $('#play').addClass('glyphicon-pause')
      }else{
            audio.pause();
            audio.loop = 1;
            $('#play').addClass('glyphicon-play-circle')
            $('#play').removeClass('glyphicon-pause')
          }
}




$('input').eq(1).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(1).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(1).removeClass('clicked').addClass('button');
  }
})

$('input').eq(2).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(2).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(2).removeClass('clicked').addClass('button');
  }
})

$('input').eq(3).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(3).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(3).removeClass('clicked').addClass('button');
  }
})

$('input').eq(4).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(4).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(4).removeClass('clicked').addClass('button');
  }
})

$('input').eq(5).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(5).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(5).removeClass('clicked').addClass('button');
  }
})

$('input').eq(6).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(6).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(6).removeClass('clicked').addClass('button');
  }
})

$('input').eq(7).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(7).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(7).removeClass('clicked').addClass('button');
  }
})

$('input').eq(8).click(function(event) {
  if(event.target.className === 'button' ){
  $('input').eq(8).removeClass('button').addClass('clicked');
}
  else {
    $('input').eq(8).removeClass('clicked').addClass('button');
  }
})
