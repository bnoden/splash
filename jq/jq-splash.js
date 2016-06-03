$(document).ready(function(){
  (function splash(boot, game, scr0, scr1){
    game = '#demo', boot = '#boot', scr0 = '#screen0', scr1 = '#screen1'
    $(game).hide().attr('src', 'img/demoD1.gif')
    $(scr0).hide().attr('src', 'img/scr0.png')
    $(scr1).hide().attr('src', 'img/scr1.png')

    var open = function(){
      $(scr0).fadeOut(bootSpd)
      $(scr1).fadeIn(bootSpd)
    }, close = function(){ $(scr1).fadeOut(bootSpd) },
         end = function(){ $(game).show() }

    var bootSpd = 1800

    $(boot+'img').on('click',function(){$(boot).hide(),$(game).show()})

    var view = (function(){
      $(scr0).fadeIn(bootSpd)
      setTimeout(open, bootSpd*3)
      setTimeout(close, bootSpd*5)
      setTimeout(end, bootSpd*6.5)
    }())
  }())
});