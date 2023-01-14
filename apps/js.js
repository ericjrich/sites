$(function(){
$('#tbw1').hide();$('#tbsmenu').hide();$('#tbs1').hide();$('#tbs2').hide();$('#tbs3').hide();$('#tbs4').hide();$('#tbs5').hide();

$('#tbw').click(function(){ $('#tbw1').toggle(); });
$('#tbs').click(function(){ $('#tbsmenu').toggle(); });
$('#tbsmenu1').click(function(){ $('#tbs1').toggle();$('#tbs2').hide();$('#tbs3').hide();$('#tbs4').hide();$('#tbs5').hide(); });
$('#tbsmenu2').click(function(){ $('#tbs2').toggle();$('#tbs1').hide();$('#tbs3').hide();$('#tbs4').hide();$('#tbs5').hide(); });
$('#tbsmenu3').click(function(){ $('#tbs3').toggle();$('#tbs1').hide();$('#tbs2').hide();$('#tbs4').hide();$('#tbs5').hide(); });
$('#tbsmenu4').click(function(){ $('#tbs4').toggle();$('#tbs1').hide();$('#tbs2').hide();$('#tbs3').hide();$('#tbs5').hide(); });
$('#tbsmenu5').click(function(){ $('#tbs5').toggle();$('#tbs1').hide();$('#tbs2').hide();$('#tbs3').hide();$('#tbs4').hide(); });



$("#tbsmenu").mouseleave(function(){$(this).hide();});
$(".tbsx").mouseleave(function(){$(this).hide();});


$(document).mouseup(function(e){var container = $("#tbs1");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.hide();}});
$(document).mouseup(function(e){var container = $("#tbs2");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.hide();}});
$(document).mouseup(function(e){var container = $("#tbs3");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.hide();}});
$(document).mouseup(function(e){var container = $("#tbs4");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.hide();}});
$(document).mouseup(function(e){var container = $("#tbs5");
 if(!container.is(e.target) && container.has(e.target).length === 0){container.hide();}});

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}

/*var today = new Date();*/
document.getElementById('time').innerHTML= formatAMPM();
});
