$(function(){


/*========== hide the start meny widnows ================*/
$('#tbs0,#tbs1,#tbs2,#tbs3,#tbs4,#tbs5,#tbs6,#tbs7,#tbs8,#tbs9').hide();
/*========== start menu ==================================================*/
$('#tbs').click(function(){ $('#tbsmenu').animate({left: '0'}); });
$("#tbsmenu").mouseleave(function(){$(this).animate({left: '-30%'});});

/*======== start menu windows =====================================*/
$(".tbsx").mouseleave(function(){$(this).fadeOut();});

$('#tbsmenu0').click(function(){ $('#tbs0').fadeToggle();$('#tbs1,#tbs2,#tbs3,#tbs4,#tbs5,#tbs6,#tbs7,#tbs8,#tbs9').hide();});
$('#tbsmenu1').click(function(){ $('#tbs1').fadeToggle();$('#tbs0,#tbs2,#tbs3,#tbs4,#tbs5,#tbs6,#tbs7,#tbs8,#tbs9').hide();});
$('#tbsmenu2').click(function(){ $('#tbs2').fadeToggle();$('#tbs0,#tbs1,#tbs3,#tbs4,#tbs5,#tbs6,#tbs7,#tbs8,#tbs9').hide();});
$('#tbsmenu3').click(function(){ $('#tbs3').fadeToggle();$('#tbs0,#tbs1,#tbs2,#tbs4,#tbs5,#tbs6,#tbs7,#tbs8,#tbs9').hide();});
$('#tbsmenu4').click(function(){ $('#tbs4').fadeToggle();$('#tbs0,#tbs1,#tbs2,#tbs3,#tbs5,#tbs6,#tbs7,#tbs8,#tbs9').hide();});
$('#tbsmenu5').click(function(){ $('#tbs5').fadeToggle();$('#tbs0,#tbs1,#tbs2,#tbs3,#tbs4,#tbs6,#tbs7,#tbs8,#tbs9').hide();});
$('#tbsmenu6').click(function(){ $('#tbs6').fadeToggle();$('#tbs0,#tbs1,#tbs2,#tbs3,#tbs4,#tbs5,#tbs7,#tbs8,#tbs9').hide();});
$('#tbsmenu7').click(function(){ $('#tbs7').fadeToggle();$('#tbs0,#tbs1,#tbs2,#tbs3,#tbs4,#tbs5,#tbs6,#tbs8,#tbs9').hide();});
$('#tbsmenu8').click(function(){ $('#tbs8').fadeToggle();$('#tbs0,#tbs1,#tbs2,#tbs3,#tbs4,#tbs5,#tbs6,#tbs7,#tbs9').hide();});
$('#tbsmenu9').click(function(){ $('#tbs9').fadeToggle();$('#tbs0,#tbs1,#tbs2,#tbs3,#tbs4,#tbs5,#tbs6,#tbs7,#tbs8').hide();});

$(document).mouseup(function(e){var container = $("#tbs0");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs1");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs2");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs3");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs4");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs5");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs6");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs7");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs8");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs9");if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});



/*=====weather==============================================*/
$('#tbw').click(function(){ $('#tbw1').animate({top: '5%'}); });
$('#tbw').mouseenter(function(){ $('#tbw1').animate({top: '-50%'}); });

/*======= clock =========================================================*/
function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  return d.getFullYear()+' '+months[d.getMonth()]+' '+d.getDate()+' '+hours+':'+minutes+' '+days[d.getDay()];
}
document.getElementById('time').innerHTML= formatAMPM();

});