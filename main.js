

$(window).scroll(function(){

$('.reveal').each(function(){

var top = $(this).offset().top;
var win = $(window).scrollTop();
var height = $(window).height();

if(top < win + height - 100){
$(this).addClass('active');
}

});

});