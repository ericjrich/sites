$(function(){
  /*SET VARIABLES*/
  x = 1;
  pngs=17;
  /*INTRO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#ejr').hide();$('#ul').hide();$('#ur').hide();$('#ll').hide();$('#lr').hide();
  $('#ejr').fadeIn(500).delay(2000).fadeOut(500);
  $('#ul').delay(3000).fadeIn(500);$('#ur').delay(3000).fadeIn(500);$('#ll').delay(3000).fadeIn(500);$('#lr').delay(3000).fadeIn(500);
  /*SET TITLES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#ur').attr('title', '|Visual Area| KEYS.REF= { UnMaximize=[CLICK]-or-[DOWN] }_{ Maximize=[UP] }_{ ChangeVisuals=[LEFT]-or-[RIGHT] }');
  $('#lastpng').attr('title', '|Last Visual| KEYS=[Arrow-L]');
  $('#max').attr('title', '|Maximize| KEYS=[UP] / KEYS.REF= { UnMaximize=[CLICK]-or-[DOWN] }');
  $('#nextpng').attr('title', '|Next Visual| KEYS=[RIGHT]');
  $('#ll').attr('title', '|PLAYER| KEYS.REF= { PLAY=[O] }_{ PAUSE=[P] }');
  /*CLICK FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#max').click(function(){$('#ur').css({'left': '0', 'width': '100%', 'height': '100%'});});
  $('#ur').click(function(){$('#ur').css({'left': '10%', 'width': '80%', 'height': '80%'});});
  $('#nextpng').click(function(){x++;if(x > pngs){x = 1};track = 'url\(v' + x +'.png\)';$('#ur').css('background-image', track );});
  $('#lastpng').click(function(){x--;if(x < 1){x = pngs};track = 'url\(v' + x +'.png\)';$('#ur').css('background-image', track );});
  /*KEYBOARD INPUTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /*SETUP*/
  document.body.onkeyup = function(e){ if(e.keyCode == 32){ }}
  window.addEventListener("keydown", moveSomething, false);
  /*SWITCH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  function moveSomething(e){
    switch(e.keyCode) {
      case 32:
      case 39:x++;if(x > pngs){x = 1};track = 'url\(v' + x +'.png\)';$('#ur').css('background-image', track );break;
      case 37:x--;if(x < 1){x = pngs};track = 'url\(v' + x +'.png\)';$('#ur').css('background-image', track );break;
      case 38:$('#ur').css({'left': '0', 'width': '100%', 'height': '100%'});break;
      case 40:$('#ur').css({'left': '10%', 'width': '80%', 'height': '80%'});break;
    }/*switch*/
  }/*function moveSomething(e)*/
});/*END*/
