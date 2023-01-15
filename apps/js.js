$(function(){
/*========== hide the start meny widnows ================*/
$('#tbs1').hide();$('#tbs2').hide();$('#tbs3').hide();$('#tbs4').hide();$('#tbs5').hide();

/*========== start menu ==================================================*/
$('#tbs').click(function(){ $('#tbsmenu').animate({left: '0'}); });
$("#tbsmenu").mouseleave(function(){$(this).animate({left: '-30%'});});

/*======== start menu windows =====================================*/
$(".tbsx").mouseleave(function(){$(this).fadeOut();});

$('#tbsmenu1').click(function(){ $('#tbs1').fadeToggle();$('#tbs2').hide();$('#tbs3').hide();$('#tbs4').hide();$('#tbs5').hide(); });
$('#tbsmenu2').click(function(){ $('#tbs2').fadeToggle();$('#tbs1').hide();$('#tbs3').hide();$('#tbs4').hide();$('#tbs5').hide(); });
$('#tbsmenu3').click(function(){ $('#tbs3').fadeToggle();$('#tbs1').hide();$('#tbs2').hide();$('#tbs4').hide();$('#tbs5').hide(); });
$('#tbsmenu4').click(function(){ $('#tbs4').fadeToggle();$('#tbs1').hide();$('#tbs2').hide();$('#tbs3').hide();$('#tbs5').hide(); });
$('#tbsmenu5').click(function(){ $('#tbs5').fadeToggle();$('#tbs1').hide();$('#tbs2').hide();$('#tbs3').hide();$('#tbs4').hide(); });

$(document).mouseup(function(e){var container = $("#tbs1");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs2");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs3");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs4");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});
$(document).mouseup(function(e){var container = $("#tbs5");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.fadeOut();}});

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
