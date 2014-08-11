
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
		$('#unstatic').children().fadeOut('slow').removeClass('displayed');
		$('#slidermod').fadeIn(200).addClass('displayed');
	}
});
$('.anchr:nth-child(2)').click(function()
{
	if(!($('#bio').css('display')=='block'))
	{
		$('#unstatic').children().fadeOut('slow').removeClass('displayed');
		$('#bio').fadeIn(200).addClass('dispalyed');
	}
});
$('.anchr:nth-child(3)').click(function()
{
	if(!($('#cont').css('display')=='block'))
	{
		$('#unstatic').children().fadeOut('slow').removeClass('displayed');
		$('#cont').fadeIn(200).addClass('displayed');
	}
});