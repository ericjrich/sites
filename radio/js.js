$(function(){
  /*SET VARIABLES*/
  x = 1;
  gifs=12;
  /*INTRO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#ejr').hide();$('#ul').hide();$('#ur').hide();$('#ll').hide();$('#lr').hide();
  $('#ejr').fadeIn(500).delay(2000).fadeOut(500);
  $('#ul').delay(3000).fadeIn(500);$('#ur').delay(3000).fadeIn(500);$('#ll').delay(3000).fadeIn(500);$('#lr').delay(3000).fadeIn(500);
  /*SET TITLES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#r1b1').attr('title', '|SomaFM - PopTron| KEYS=[#-ROW: 1]-or-[#-PAD: 7]');
  $('#r1b2').attr('title', '|SomaFM - Beat Blender| KEYS=[#-ROW: 2]-or-[#-PAD: 8]');
  $('#r1b3').attr('title', '|SomaFM - Groove Salad Classic| KEYS=[#-ROW: 3]-or-[#-PAD: 9]');
  $('#r2b1').attr('title', '|SomaFM - Cliq-Hop| KEYS=[#-ROW: 4]-or-[#-PAD: 4]');
  $('#r2b2').attr('title', '|SomaFM - Secret Agent| KEYS=[#-ROW: 5]-or-[#-PAD: 5]');
  $('#r2b3').attr('title', '|SomaFM - Groove Salad| KEYS=[#-ROW: 6]-or-[#-PAD: 6]');
  $('#r3b1').attr('title', '|I Love Mashup - Denmark| KEYS=[#-ROW: 7]-or-[#-PAD: 1]');
  $('#r3b2').attr('title', '|SomaFM - Defcon| KEYS=[#-ROW: 8]-or-[#-PAD: 2]');
  $('#r3b3').attr('title', '|Deep House Lounge| KEYS=[#-ROW: 9]-or-[#-PAD: 3]');
  $('#ur').attr('title', '|Visual Area| KEYS.REF= { UnMaximize=[CLICK]-or-[DOWN] }_{ Maximize=[UP] }_{ ChangeVisuals=[LEFT]-or-[RIGHT] }');
  $('#lastgif').attr('title', '|Last Visual| KEYS=[Arrow-L]');
  $('#max').attr('title', '|Maximize| KEYS=[UP] / KEYS.REF= { UnMaximize=[CLICK]-or-[DOWN] }');
  $('#nextgif').attr('title', '|Next Visual| KEYS=[RIGHT]');
  $('#ll').attr('title', '|PLAYER| KEYS.REF= { PLAY=[O] }_{ PAUSE=[P] }');
  /*CLICK FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  $('#r1b1').click(function(){$('#current').css('background-image','url(1.png)');$('#info').html('SomaFM - PopTron');$('audio').attr('src', 'http://ice1.somafm.com/poptron-128-mp3');$('audio').load();});
  $('#r1b2').click(function(){$('#current').css('background-image','url(2.png)');$('#info').html('SomaFM - Beat Blender');$('audio').attr('src', 'http://ice1.somafm.com/beatblender-128-mp3');$('audio').load();});
  $('#r1b3').click(function(){$('#current').css('background-image','url(3.png)');$('#info').html('SomaFM - Groove Salad Classic');$('audio').attr('src', 'https://ice1.somafm.com/gsclassic-128-mp3');$('audio').load();});
  $('#r2b1').click(function(){$('#current').css('background-image','url(4.png)');$('#info').html('SomaFM - Cliq-Hop');$('audio').attr('src', 'http://ice1.somafm.com/cliqhop-128-mp3');$('audio').load();});
  $('#r2b2').click(function(){$('#current').css('background-image','url(5.png)');$('#info').html('SomaFM - Secret Agent');$('audio').attr('src', 'http://ice1.somafm.com/secretagent-128-mp3');$('audio').load();});
  $('#r2b3').click(function(){$('#current').css('background-image','url(6.png)');$('#info').html('SomaFM - Groove Salad');$('audio').attr('src', 'http://ice1.somafm.com/groovesalad-128-mp3');$('audio').load();});
  $('#r3b1').click(function(){$('#current').css('background-image','url(7.png)');$('#info').html('I Love Mashup - Denmark');$('audio').attr('src', 'http://stream06.iloveradio.de/iloveradio5.mp3');$('audio').load();});
  $('#r3b2').click(function(){$('#current').css('background-image','url(8.png)');$('#info').html('SomaFM - Defcon');$('audio').attr('src', 'http://ice6.somafm.com/defcon-128-aac');$('audio').load();});
  $('#r3b3').click(function(){$('#current').css('background-image','url(9.png)');$('#info').html('Deep House Lounge');$('audio').attr('src', 'http://198.15.94.34:8006/stream/');$('audio').load();});
  $('#ur').click(function(){$('#ur').css({'left': '40%', 'width': '60%', 'height': '80%'});});
  $('#max').click(function(){$('#ur').css({'left': '0', 'width': '100%', 'height': '100%'});});
  $('#nextgif').click(function(){x++;if(x > gifs){x = 1};track = 'url\(v' + x +'.gif\)';$('#ur').css('background-image', track );});
  $('#lastgif').click(function(){x--;if(x < 1){x = gifs};track = 'url\(v' + x +'.gif\)';$('#ur').css('background-image', track );});
  /*KEYBOARD INPUTS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  /*SETUP*/
  document.body.onkeyup = function(e){ if(e.keyCode == 32){ }}
  window.addEventListener("keydown", moveSomething, false);
  /*SWITCH~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
  function moveSomething(e){
    switch(e.keyCode) {
      case 32:x++; if(x > gifs){x = 1};track = 'url\(v' + x +'.gif\)';$('#ur').css('background-image', track );break;
        case 39:x++;if(x > gifs){x = 1};track = 'url\(v' + x +'.gif\)';$('#ur').css('background-image', track );break;
        case 37:x--;if(x < 1){x = gifs};track = 'url\(v' + x +'.gif\)';$('#ur').css('background-image', track );break;
        case 103:
        case 49:$('#r1b1').trigger('click');break;
        case 104:
        case 50:$('#r1b2').trigger('click');break;
        case 105:
        case 51:$('#r1b3').trigger('click');break;
        case 100:
        case 52:$('#r2b1').trigger('click');break;
        case 101:
        case 53:$('#r2b2').trigger('click');break;
        case 102:
        case 54:$('#r2b3').trigger('click');break;
        case 97:
        case 55:$('#r3b1').trigger('click');break;
        case 98:
        case 56:$('#r3b2').trigger('click');break;
        case 99:
        case 57:$('#r3b3').trigger('click');break;
        case 79:$('audio').trigger('play');break;
        case 80:$('audio').trigger('pause');break;
        case 38:$('#ur').css({'left': '0', 'width': '100%', 'height': '100%'});break;
        case 40:$('#ur').css({'left': '40%', 'width': '60%', 'height': '80%'});break;
    }/*switch*/
  }/*function moveSomething(e)*/
});/*END*/
