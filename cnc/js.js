$(function(){
$('#ejr').hide();
	$('#titlediv').hide();
	$('#pagediv').hide();
	$('#ejr').hide();
	$('#ejr').fadeIn(500).delay(2000).fadeOut(500);
    $('#titlediv').delay(3000).fadeIn(500);
	$('#pagediv').delay(3000).fadeIn(500);

/*
https://htmlpreview.github.io/?
https://github.com/ericjrich/sites/main/cnc/index.html
https://github.com/ericjrich/sites/main/radio/index.html
*/
see='https://htmlpreview.github.io/?'
loc='https://github.com/ericjrich/sites/main/'
b00= see + loc + 'cnc/b00/index.html'
b01= see + loc + 'radio/index.html'
b02= see + loc + 'cnc/b02/index.html'
b03= see + loc + 'cnc/b03/index.html'
b04= see + loc + 'index.html'

$('#b00').click(function(){$('#mainframe').attr('src', b00);});
$("#b00").mousedown(function(ev){if(ev.which == 3){window.open(b00, '_blank');}});

$('#b01').click(function(){$('#mainframe').attr('src', b01);});
$("#b01").mousedown(function(ev){if(ev.which == 3){window.open(b01, '_blank');}});

$('#b02').click(function(){$('#mainframe').attr('src', b02);});
$("#b02").mousedown(function(ev){if(ev.which == 3){window.open(b02, '_blank');}});

$('#b03').click(function(){$('#mainframe').attr('src', b03);});
$("#b03").mousedown(function(ev){if(ev.which == 3){window.open(b03, '_blank');}});

$('#b04').click(function(){window.open(b04, '_blank');});
$("#b04").mousedown(function(ev){if(ev.which == 3){window.open(b04, '_blank');}});

});
