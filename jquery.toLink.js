(function($){
  $.fn.toLink = function(options){
    var defaults = {
      time: 500,
      marginTop: 10
    };
    var options = $.extend(defaults, options);
    return this.each(function(){
      var o = options;
      $(this).click(function(){
        var a = location.hash;
        var b = $(a).offset();
        $('html, body').animate({scrollTop: b.top - o.marginTop}, o.time);
      });
    });
  }
})(jQuery);
