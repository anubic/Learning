$(document).ready(function(){
	$('.login').click(function() {
               $(this).toggleClass('active');			   
				if($('.login-change').is(':visible')){
				$('.login-change').slideToggle("fast");
				}else{
				$('.login-popup').slideToggle("fast");
			    }  
        });
	$('.change').click(function() {
			   $('.login-popup').slideToggle("fast");
			   $('.login-change').slideToggle("fast");
			   
        });
	$('.all-cities li').click(function() {
			   $(this).toggleClass('active');
			   $('.cities-list').slideToggle("fast");			   
        });
	

    var tabs = $('#tabs');
    $('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });
    tabs.on('click', '.tabs a', function(e){
        e.preventDefault();
        var tabId = $(this).attr('href');
        $('.tabs a',tabs).removeClass();
        $(this).addClass('active');
        $('.tabs-content > div', tabs).hide(0);
        $(tabId).show();
    });	
	$('.date').pickmeup({
	hide_on_select	: true,
	 format  : 'd.m.Y',
	 locale : {
		days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
		daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
		daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
		monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
		today: "Сегодня",
		weekStart: 1
	}
	});
	$(".btn-calendar").click(function () {
    $(this).closest('div').find('.date').click();
	$(this).closest('div').find('.date').focus();
	});
	$(".btn-calendar-h").click(function () {
    $(this).closest('div').find('.date').click();
	$(this).closest('div').find('.date').focus();
	});

    $('.decor_checkbox').each(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.prop("checked")) $(this).addClass("check_active");
    });
 
    $('.decor_checkbox').click(function(){
        var checkbox = $(this).find('input[type=checkbox]');
        if(checkbox.prop("checked")){
            $(this).removeClass("check_active");
            checkbox.prop("checked", false);
        }else{
            $(this).addClass("check_active");
            checkbox.prop("checked", true);
        }
    });
});

