(function($) {
  var loadedCount = 0;
  var bcg = $('.bcg');
  var imagesLoad = bcg.length;
  var loadingProgress = 0;
  bcg.imagesLoaded({
    background: true
  }).progress(function(instance, image) {
    loadProgress();
  });
  //progress timeline animation
  var progressTl = new TimelineMax({
    paused: true,
    onUpdate: progressUpdate,
    onComplete: loadComplete
  });
  progressTl.to($('.progress span'), 1, {
    width: 100,
    ease: Linear.easeNone
  });

  function loadProgress(imageLoad, image) {
    loadedCount++;
    loadingProgress = (loadedCount / imagesLoad);
    TweenLite.to(progressTl, 0.7, {
      progress: loadingProgress,
      ease: Linear.easeNone
    });
  }

  function progressUpdate() {
    loadingProgress = Math.round(progressTl.progress() * 100);
    $('.txt-perc').text(loadingProgress + '%');
  }

  function loadComplete() {
    var preloaderOutTl = new TimelineMax();
    preloaderOutTl.to($('.progress'), 0.3, {
      y: 100,
      autoAlpha: 0,
      ease: Back.easeIn
    }).to($('.txt-perc'), 0.3, {
      y: 100,
      autoAlpha: 0,
      ease: Back.easeIn
    }, 0.1).set($('body'), {
      className: '-= is-loading'
    }).set($('body'), {
      className: '+=is-loaded'
    }).to($('#preloader'), 0.1, {
      yPercent: 100,
      ease: Power4.easeInOut
    }).set($('#preloader'), {
      className: '+=is-hidden'
    }).from($('#intro .title'), 1, {
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '-=0.2').from($('#intro p'), 0.7, {
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '+=0.2').from($('.scroll-hint'), 0.3, {
      y: -20,
      autoAlpha: 0,
      ease: Power1.easeOut
    }, '+=0.1');
    return preloaderOutTl;
  }
  // logo scroll // 
  $(function() { // $(document).ready shorthand
    $('.hide-me').fadeIn('slow');
  });
  $(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {
      $('.hide-me').each(function(i) {
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window it fades */
        // console.log(bottom_of_window);
        // console.log(bottom_of_object);
        if (bottom_of_window > bottom_of_object) {
          $(this).animate({
            'opacity': '1'
          }, 1500);
        }
      });
    });
  });

  
}(jQuery));
/// video fade // 
$(window).scroll(function() {
  var target = $("#myVideo");
  // target.css("opacity", 1 - $(window).scrollTop() / (-target.get(0).getBoundingClientRect().y + 50));
  // if (1 - $(window).scrollTop() / (-target.get(0).getBoundingClientRect().top + 50)) {
  //  // target.addClass('fadeOut');
  //  target.css("opacity", 0); 
  // } else {
  //  target.css("opacity", 1);
  // }
  // console.log(target.get(0).getBoundingClientRect().top)
  // console.log($(window).scrollTop())
  if (elementInViewport2($('#top').get(0))) {
    target.get(0).play();
    $('#top').fadeOut(1700, function() {
      $('#top').get(0).style['display'] = 'block';
      $('#top').get(0).style['visibility'] = 'hidden';
    });
  } else {
    target.get(0).pause();
    // $('#top').removeClass('fadeOut');
    $('#top').fadeIn(1);
    $('#top').get(0).style['display'] = 'block';
    $('#top').get(0).style['visibility'] = 'visible';
  }
});
//
function elementInViewport2(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }
  return (top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
}
var video = document.getElementById('myVideo'),
  fraction = 0.8;

function checkScroll() {
  var x = video.offsetLeft,
    y = video.offsetTop,
    w = video.offsetWidth,
    h = video.offsetHeight,
    r = x + w, //right
    b = y + h, //bottom
    visibleX, visibleY, visible;
  visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
  visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));
  visible = visibleX * visibleY / (w * h);
  if (visible > fraction) {
    video.play();
  } //else {
  //    video.pause();
  // }
}
// checkScroll();
// window.addEventListener('scroll', checkScroll, false);
// window.addEventListener('resize', checkScroll, false);
//slide//




 $(function() {
                
                var documentEl = $(document),
                    fadeElem = $('.fade-scroll');
                
                
                documentEl.on('scroll', function() {
                    var currScrollPos = documentEl.scrollTop();
                    
                    fadeElem.each(function() {
                        var $this = $(this),
                            elemOffsetTop = $this.offset().top;
                        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/400);
                    }); 
                });
                
            });









