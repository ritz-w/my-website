function roll()
{
  var slider = $('.slider > .widget');
    slider.removeClass('do-slide');
  
  $('.slider > .controls > .bottom > label').html(slider.find('> li').first().attr('num') + ' of ' + slider.find('> li').size());
  
  window.sliderTimeout = setTimeout(function()
  {
    slider.addClass('do-slide');
    window.sliderTimeout = setTimeout(function()
    {
      slider.find('> li').first().appendTo(slider);
      roll();
    }, 5000);
  }, 10000);
}

$(function()
{
  $('.slider > .widget > li').each(function()
  {
    $(this).attr('num', $(this).index() + 1);
  });
  
  $('.slider a').click(function()
  {
    switch($(this).attr('href'))
    {
      case '#share':
        alert('You clicked share!\nGood for you! :)');
        break;
      case '#close':
        alert('This would trigger a widget.close() event');
        break;
      case '#like':
        alert('You clicked like!\nAwesome! :D');
        break;
      case '#search':
        alert('This would trigger a modal with a search box');
        break;
      case '#comments':
        alert('This would trigger a modal with any comments');
        break;
      case '#prev':
        window.clearTimeout(window.sliderTimeout);
        $('.slider > .widget').addClass('backwards-slide').find('> li').last().prependTo('.slider > .widget');
        window.sliderTimeout = setTimeout(function()
        {
          $('.slider > .widget').removeClass('backwards-slide');
          roll();
        }, 1000);
        break;
      case '#next':
        window.clearTimeout(window.sliderTimeout);
        $('.slider > .widget').addClass('do-slide');
        window.sliderTimeout = setTimeout(function()
        {
          $('.slider > .widget').removeClass('do-slide').find('> li').first().appendTo('.slider > .widget');
          roll();
        }, 1000);
        break;
    }
    return false;
  });
  
  roll();
});