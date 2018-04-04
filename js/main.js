
$('#nav-icon input').click(function(e){
	if($('#nav-icon input').prop('checked')){
		console.log("open!");
		$('.nav--background').addClass('open');
		$('nav').addClass('open');
	}else{
		console.log("close!");
		$('.nav--foreground').addClass('close');
		setTimeout(function() {$('.nav--background').removeClass('open');$('nav').removeClass('open');}, 500);
		setTimeout(function() {$('.nav--foreground').removeClass('close');}, 1000);
	}
});
