$(".anchr").mouseover(function()
{
		$(this).css({"background-color":"#cf1548", 'color':'#fff','box-shadow':"4px 4px rgba(207, 21, 72, 0.3)"});
		$(this).mouseleave(function()
		{
			if(!($(this).hasClass('clicked')))
				$(this).css({"background-color":'#fff', 'color':'black', 'box-shadow':'0 0 #fff'});
		});
})
$('.anchr').click(function()
{
	$(this).siblings().removeClass('clicked').css({'background-color':"#fff",'color':'black', 'box-shadow':'0 0 #fff'});
	if(!($(this).hasClass('clicked')))
		$(this).toggleClass("clicked");
});
$('.anchr:nth-child(1)').click(function()
{
	if(!($('#slidermod').hasClass('displayed')))
	{
		$('#unstatic').css('height','632px').children().fadeOut(300).removeClass('displayed');
		$('#slidermod').delay(300).fadeIn(200).addClass('displayed');
	}
});
$('.anchr:nth-child(2)').click(function()
{
	if(!($('#bio').css('display')=='block'))
	{
		$('#unstatic').children().fadeOut(300).removeClass('displayed');
		$('#bio').delay(300).fadeIn(200).addClass('dispalyed');
	}
});
$('.anchr:nth-child(3)').click(function()
{
	if(!($('#cont').css('display')=='block'))
	{
		$('#unstatic').css('height','600px').children().fadeOut(300).removeClass('displayed');
		$('#cont').delay(300).fadeIn(200).addClass('displayed');
	}
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    nav:true,
    items:1,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});