/*
 * jQuery-boilerplate plugin by Rasy 0.1.0
 * https://github.com/rasy-js
 *
 * Author: Rasy
 * Email: rasy.js@gmail.com
 * Website: /
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

;(function ( $, window, undefined ) {

  'use strict';

  var pluginName = 'plginName',
      document = window.document,
      defaults = {
        propertyName: "value"
      };

  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options) ;

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype.init = function () {

  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  };

}(jQuery, window));