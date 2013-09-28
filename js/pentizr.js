/*
 *
 * pentizr.js
 *
 * Show your CodePens everywhere in 25 seconds!
 *
 *
 * Tim Pietrusky
 * http://timpietrusky.com
 *
 */

;(function($, window, document, undefined) {
  // Create the defaults once
  var pluginName = 'pentizr',
      // default options
      defaults = {
        username : '',
        type : 'owned',
        page : 1,
        classname : 'pentizr',
        social : false,
        limit : 9,
        template : '',
        callback : ''
      };

  // Create the defaults once
  function Plugin(element, options) {
    this.element = element;

    this.options = $.extend( {}, defaults, options);

    this._defaults = defaults;
    this._name     = pluginName;
    this.init();
  }

  // The actual plugin constructor
  Plugin.prototype.init = function() {
    this.retrieve();
  };

  Plugin.prototype.retrieve = function() {
    var _this = this;

    $.ajax({
      dataType: 'jsonp',
      jsonp: 'jsonp',
      url: 'http://codepen-awesomepi.timpietrusky.com/' + this.options.username + '/' + this.options.type + '/' + this.options.page,
      success: function(data) {
        if (data.content != null) {

          // Use the default template
          if (_this.options.template == '') {
            _this.show(data.content.pens);

          // Use a custom template
          } else {
            _this.showCustom(data.content.pens);
          }
        }
      }
    });

  };
  
  /**
   * Appends the output to the element. 
   */
  Plugin.prototype.show = function(pens) {
    var _this = this
        container = $('<div class="'+this.options.classname+'"></div>');

    $.each(pens, function(i, v) {

      // Limit the returned pens
      if (i >= _this.options.limit) {
        return false;
      }

      var wrapper = $('<div class="wrappetizr"></div>');

      // Subcontainer
      var subcontainer = $('<div class="subcontainer"></a>');

      // Iframe
      var iframe = $('<iframe></iframe>');
      iframe.attr('frameborder', 0);
      iframe.attr('scrolling', 'no');
      iframe.attr('allowtransparency', 0);
      iframe.attr('class', 'iframe' + i);
      iframe.attr('src', this.url.fullgrid);

      // Meta
      var meta = $('<div class="meta"></div>'),
          meta_title = $('<h2></h2>');

      if (this.title != null) {
        meta_title.html(this.title);
      }

      meta_title.appendTo(meta);

//      // Live/static switch
//      meta_switch_mode = $('<div class="switch-mode"><a href="#" data-full="'+this.url.full+'" data-fullgrid="'+this.url.fullgrid+'">Live</a></div>');
//      meta_switch_mode.appendTo(meta);
//
//      meta_switch_mode.find('a').click(function(e) {
//        iframe.attr('src', $(this).data('full'));
//      });

      // Open CodePen
      meta_codepen = $('<div class="open-codepen"></div>');
      meta_codepen.append($('<a href="'+this.url.details+'" target="_blank">Details</a>'));
      meta_codepen.append($('<a href="'+this.url.pen+'" target="_blank">Source</a>'));
      meta_codepen.append($('<a href="'+this.url.full+'" target="_blank">Fullscreen</a>'));
      meta_codepen.appendTo(meta);

      // Create social if options.social is true
      if (_this.options.social) {
        var meta_social = $('<div class="social"></div>');
        meta_social.append(this.views + ' <span class="views">&#9786;</span>');
        meta_social.append('&nbsp;&nbsp;');
        meta_social.append(this.hearts + ' <span class="hearts">&#9829;</span>');
        meta_social.append('&nbsp;&nbsp;');
        meta_social.append(this.comments + ' <span class="comments">&#9829;</span>');

        meta_social.appendTo(meta);
      }

      // Append childs
      wrapper.append(iframe);
      wrapper.append(subcontainer);
      subcontainer.append(meta);
      wrapper.appendTo(container);

      // Append pen to element
      $(_this.element).append(container);

      // Add click handler for the pens
      subcontainer.on('click', function(e) {
        if (e.target.localName != 'a') {
          if (wrapper.hasClass('onair')) {
            wrapper.removeClass('onair');
          } else {
            $('.wrappetizr').removeClass('onair');
            wrapper.addClass('onair');
          }
        }
      });
    });

    // Provide a function when everything is finished
    if ($.isFunction(_this.options.callback)) {
      _this.options.callback();
    }
  }

  /**
   * Use a custom <CODE>options.template</CODE> and parse
   * the values:
   *
   * {{title}}
   * {{description}}
   * {{views}}
   * {{hearts}}
   * {{comments}}
   * {{urlDetails}}
   * {{urlPen}}
   * {{urlFull}}
   *
   * The output is appended to the element.
   */
  Plugin.prototype.showCustom = function(pens) {
    var _this = this;
    
    $.each(pens, function(i, v) {

      // Limit the returned pens
      if (i >= _this.options.limit) {
        return false;
      }

      var template = _this.options.template,
          customRegex = '',
          toReplace = {
            title : this.title,
            description : this.description,
            views : this.views,
            hearts : this.hearts,
            comments : this.comments,
            urlDetails : this.url.details,
            urlPen : this.url.pen,
            urlFull : this.url.full,
            urlLargeImage : this.url.largeimg,
            urlSmallImage : this.url.smallimg
          }
      ;

      // Parse the template and replace the toReplace fields
      $.each(toReplace, function(i, v) {
        customRegex = new RegExp("{{" + i + "}}", "g");
        template = template.replace(customRegex, v);
      });

      // Append the template to element
      $(_this.element).append(template);
    });

    // Provide a function when everything is finished
    if ($.isFunction(_this.options.callback)) {
      _this.options.callback();
    }
  }

  // A really lightweight plugin wrapper around the constructor,
  // preventing against multiple instantiations
  $.fn[pluginName] = function( options ) {
    return this.each(function (){
      if(!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName,
          new Plugin(this, options));
      }
    });
  };

})(jQuery, window, document);
