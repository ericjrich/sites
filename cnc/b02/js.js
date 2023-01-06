$(function(){
    /*=EJR 2022/03/15 ===========================*/
 $(".entered").change(function(){  
    /* NAMING CELLS AS VARIABLES */	
    B01 = parseFloat($("#B01").val());
    B02 = parseFloat($("#B02").val());
    B03 = parseFloat($("#B03").val());
    B04 = parseFloat($("#B04").val());
    B05 = parseFloat($("#B05").val());
    B06 = parseFloat($("#B06").val());
    B07 = parseFloat($("#B07").val());
    /*============================*/

    /*calculations for vars 8 thru 17*/
    B08 = B05 + B06;
    B09 = B01 * B03; 
    B10 = B01 * 60 / B04; 
    B11 = B10 * 2;
    B12 = B10 + B08;
    B13 = B11 + B08;
    B14 = 60 * B02 / B12;
    B15 = B14 - B09;
    B16 = 60 * B02 / B13;
    B17 = B16 - (2 * B09);
    RED = B07 - 2;
    GRN = B07 + 2;

    if (B17 < RED){$('#B17').css('color', 'red')};
    if (B17 > GRN){$('#B17').css('color', 'green')};
    if (B17 < GRN && B17 > RED){$('#B17').css('color', 'yellow')};

    /*============================*/
 
    $("#B08").text(B08.toFixed(2));
    $("#B09").text(B09.toFixed(2));
    $("#B10").text(B10.toFixed(2));
    $("#B11").text(B11.toFixed(2));
    $("#B12").text(B12.toFixed(2));
    $("#B13").text(B13.toFixed(2));
    $("#B14").text(B14.toFixed(2));
    $("#B15").text(B15.toFixed(2));
    $("#B16").text(B16.toFixed(2));
    $("#B17").text(B17.toFixed(2));
 });

 $("#tabby").focus(function() {
  $("#B01").focus();
 });
/*--------------------------------------------------------------------------*/
});
