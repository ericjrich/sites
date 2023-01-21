$(function(){
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
	/*#### HIDE STUFF #####*/
	$('#d3,.d4,#d5').hide();

	/*#### START MENU #####*/
	$('#d2-1').click(function(){ $('#d3').slideDown();});
	$("#d3").mouseleave(function(){$(this).slideUp();});
	/**/
	$(".d4").mouseleave(function(){$(this).fadeOut();});
	/**/
	$('#d3-8').click(function(){ $('.d4').hide();$('#d4-8').fadeToggle(500);});
	$('#d3-7').click(function(){ $('.d4').hide();$('#d4-7').fadeToggle(500);});
	$('#d3-6').click(function(){ $('.d4').hide();$('#d4-6').fadeToggle(500);});
	$('#d3-5').click(function(){ $('.d4').hide();$('#d4-5').fadeToggle(500);});
	$('#d3-4').click(function(){ $('.d4').hide();$('#d4-4').fadeToggle(500);});
	$('#d3-3').click(function(){ $('.d4').hide();$('#d4-3').fadeToggle(500);});
	$('#d3-2').click(function(){ $('.d4').hide();$('#d4-2').fadeToggle(500);});
	$('#d3-1').click(function(){ $('.d4').hide();$('#d4-1').fadeToggle(500);});

	/*#### WEATHER BOX ####*/
	$('#d2-6').click(function(){ $('#d5').fadeToggle('1000');});

	/*#### DATE & TIME ####*/
	function ztime() {
		var d = new Date(),
			minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
		  hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
		  months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
		  days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  	return d.getFullYear()+' '+months[d.getMonth()]+' '+d.getDate()+' '+hours+':'+minutes+' '+days[d.getDay()];
	}
	document.getElementById('time').innerHTML= ztime();
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
});