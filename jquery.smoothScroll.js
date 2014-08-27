(function ($) {

  $.fn.smoothScroll = function(options) {
    var settings = $.extend({
      target: 'body',
      duration: 1000
    }, options);

    this.click(function (e) {
      e.preventDefault();

      $('html,body').animate({
        scrollTop: $(settings.target).offset().top
      }, settings.duration);

      return this;
    });
  };

}(jQuery));