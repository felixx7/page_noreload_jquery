$(document).ready(function(){

	// membaca file
	$('#content').load('content/home.php');
	// click ul li a (link)
	$('ul#nav li a').click(function(){
		// mengambil atribut href
		var page = $(this).attr('href');
		// membaca file folder content 
		$('#content').load('content/' + page +'.php');
		return false;
	});
});