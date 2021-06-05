//headerに .openNav を付加・削除
$(function() {
	$('#navToggle').click(function(){
		$('header').toggleClass('openNav');
	});
});