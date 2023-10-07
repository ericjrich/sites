$(function(){

//## cam #########################################################################
  async function getLocalVideo() {
    try {const localVideo = document.getElementById('localVideo');const stream = localVideo.srcObject;
      if (stream) {const tracks = stream.getTracks();tracks.forEach(track => track.stop());localVideo.srcObject = null;}
      else {const newStream = await navigator.mediaDevices.getUserMedia({ video: true });localVideo.srcObject = newStream;}
    } catch (error) {console.error('Error accessing webcam:', error);}
  }
//################################################################################

/*#### HIDE STUFF #####*/
	$('#d3,.d4,#d5,#d6').hide();
/*#### START MENU #####*/
	$('#d2-l0').click(function(){ $('#d3').slideDown();});
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
	$('#d2-r1').click(function(){ $('#d5').fadeToggle('1000');});
//## cam #########################################################################
  $('#d2-r8').click(function(){ $('#d6').fadeToggle('1000');getLocalVideo();}); // When #d2-r8 is clicked, toggle #d6 and the video
//################################################################################

/*#### DATE & TIME ####*/
	function ztime() {
		var d = new Date(),
		minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
		hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
		months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
		days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
		// Update the title attribute of the div with the formatted date
			$('#d2-r0').attr('title', d.getFullYear()+'/'+months[d.getMonth()]+'/'+d.getDate());
		// Update the #time div with the formatted time
			$('#time').html(hours + ':' + minutes);
	}
	//---- call it & set intervals-----
		ztime();
		setInterval(ztime, 1000);

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

});
