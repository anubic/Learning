$(document).ready(function(){
var first = $('.dropdown'),
    second = $('.drop-wrapper'),
	third = $('.drop-items');
first.hover(
    function(){
        second.css('visibility', 'inherit'),
		third.css('visibility', 'inherit');
    },
    function(){
        second.css('visibility', 'hidden'),
		third.css('visibility', 'hidden');
    }
);
second.hover(
    function(){
        second.css('visibility', 'inherit'),
		third.css('visibility', 'inherit');
    },
    function(){
        second.css('visibility', 'hidden'),
		third.css('visibility', 'hidden');
    }
);
third.hover(
    function(){
        second.css('visibility', 'inherit'),
		third.css('visibility', 'inherit');
    },
    function(){
        second.css('visibility', 'hidden'),
		third.css('visibility', 'hidden');
    }
);
$('.dropdown').hover(function(e) {
    $('.drop-wrapper').trigger(e.type);
})
});