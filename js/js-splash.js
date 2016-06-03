document.addEventListener('DOMContentLoaded', function () {

  (function splash(boot, game, scr0, scr1) {

    boot = document.querySelector('#boot')
    game = document.querySelector('#demo'), game.src = 'img/demoD2.gif'
    scr0 = document.querySelector('#screen0'), scr0.src = 'img/scr0.png'
    scr1 = document.querySelector('#screen1'), scr1.src = 'img/scr1.png'

    var init = function (open, next, close, end, skip) {
      open = function () { fadeIn(scr0) }
      next = function () { fadeOut(scr0), fadeIn(scr1) }
      close = function () { fadeOut(scr1) }
      end = function () { game.style.display = '' }
      skip = function () { boot.style.display = 'none', game.style.display = '' }

      {  scr0.style.opacity = 0  }

      setTimeout(open, bootSpd), setTimeout(next, bootSpd * 3)
      setTimeout(close, bootSpd * 5), setTimeout(end, bootSpd * 6.5)

      boot.addEventListener("click", function () { skip() })
    }

    var bootSpd = 1800, fadeSpd = 0.018

    game.style.display = 'none', scr0.style.display = 'none', scr1.style.display = 'none'

    function fadeOut(e) {
      e.style.opacity = 1;
      (function fade() {
        if ((e.style.opacity -= fadeSpd) < 0) e.style.display = "none"
        requestAnimationFrame(fade)
      })()
    }

    function fadeIn(e, display) {
      e.style.opacity = 0, e.style.display = display || "block",
      (function fade(val) {
        val = parseFloat(e.style.opacity)
        if (!((val += fadeSpd) > 1))
          e.style.opacity = val, requestAnimationFrame(fade)
      })()
    }


    {  init()  }


  })()


});