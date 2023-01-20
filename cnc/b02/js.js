$(function(){
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

/*--------------------------------------------------------------------------*/
$("#e").text('0 Mi');$("#f").text('$ 0');$("#g").text('0 Mi');
/*--------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------*/
/*clock*/
	function FZDA() {
		var TVA = new Date(),
    	mna = TVA.getMinutes().toString().length == 1 ? '0'+TVA.getMinutes() : TVA.getMinutes(),
    	hra = TVA.getHours().toString().length == 1 ? '0'+TVA.getHours() : TVA.getHours();
		return hra+':'+mna;
	}
	document.getElementById('FZDAO').innerHTML= FZDA();
/*--------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------*/
/*~~~~~ON DOCUMENT CHANGE~~~~~~~~~~~*/
$(".entered").change(function(){

	/* making variable from cells */
	C1 = parseFloat($("#c1").val()); E1 = parseFloat($("#e1").val()); G1 = parseFloat($("#g1").val()); C = parseFloat($("#c").val());
	D = parseFloat($("#d").val()); E = parseFloat($("#e").val()); F = parseFloat($("#f").val()); G = parseFloat($("#g").val());

	/*calculations with variables*/
  E = C * 2; G = 60 * (E / E1) + G1; F = (D - E * C1) / (G / 60);

	/*clock1*/
	function FZDB() {
		var TVB = new Date(+new Date() + 60000*G),
    	mnb = TVB.getMinutes().toString().length == 1 ? '0'+TVB.getMinutes() : TVB.getMinutes(),
    	hrb = TVB.getHours().toString().length == 1 ? '0'+TVB.getHours() : TVB.getHours();
  	return hrb+':'+mnb;
	}
	document.getElementById('FZDBO').innerHTML= FZDB();

  /*put the variables back into the cells*/
  $("#c1").text(C1.toFixed(2)+' Mi'); $("#e1").text(E1.toFixed(2)); $("#g1").text(G1.toFixed(2)); $("#c").text(C.toFixed(2));
	$("#d").text(D.toFixed(2)); $("#e").text(E.toFixed(2)+' Mi'); $("#f").text('$ '+F.toFixed(2)); $("#g").text(G.toFixed(2)+' min');

});
/*--------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------*/
/*cycling tab key*/
$("#tabby").focus(function() {$("#c").focus();});
/*--------------------------------------------------------------------------*/

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
});
