$(function(){
$('#ejr').hide();
	$('#titlediv').hide();
	$('#pagediv').hide();
	$('#ejr').hide();
	$('#ejr').fadeIn(500).delay(2000).fadeOut(500);
    $('#titlediv').delay(3000).fadeIn(500);
	$('#pagediv').delay(3000).fadeIn(500);
//===================================
//===================================
//https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/cnc/index.html
//https://github.com/ericjrich/sites/blob/main/radio/index.html
$('#b00').click(function(){
    $('#mainframe').attr('src', 'https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/cnc/b00/index.html');
});

$("#b00").mousedown(function(ev){
      if(ev.which == 3)
      {window.open('https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/cnc/b00/index.html', '_blank');}});

//===================================
$('#b01').click(function(){
    $('#mainframe').attr('src', '.https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/radio/index.html');
});

$("#b01").mousedown(function(ev){
      if(ev.which == 3)
      {window.open('.https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/radio/index.html', '_blank');}});

//===================================
$('#b02').click(function(){
    $('#mainframe').attr('src', 'https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/cnc/b02/index.html');
});

$("#b02").mousedown(function(ev){
      if(ev.which == 3)
      {window.open('https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/cnc/b02/index.html', '_blank');}});
//===================================
$('#b03').click(function(){
    $('#mainframe').attr('src', 'https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/cnc/b03/index.html');
});

$("#b03").mousedown(function(ev){
      if(ev.which == 3)
      {window.open('https://htmlpreview.github.io/?https://github.com/ericjrich/sites/tree/main/cnc/b03/index.html', '_blank');}});
//===================================
//===================================
/*
$('#b04').click(function(){
    $('#mainframe').attr('src', '');
});

$("#b04").mousedown(function(ev){
      if(ev.which == 3)
      {window.open('', '_blank');}});
*/
});
