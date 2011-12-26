/**
 * jQuery.ticker.js
 *
 * @author     RaNa design associates, inc.
 * @copyright  2011 RaNa design associates, inc.
 * @license    http://www.opensource.org/licenses/mit-license.html  MIT License
 * @require    jQuery JavaScript Framework (http://jquery.com/)
 * @version    Release: 1.0
 * @since      2011-12-26 12:36:09.
 */

;(function($, window, document, undefined) {
var DEBUG = false;

$.fn.ticker = function (options) {
	var opt = options || {};
	this.each(function (i, element) {
		opt.element = $(element);
		$(element).data('ticker', new Ticker(opt));
	});
	return this;
};
function Ticker() {
	// extend default options
	this.options = {};
	$.extend(this.options, this.defaultOptions, arguments[0]);
	this.element = this.options.element;
	// initialize
	this._create();
}
Ticker.prototype = {
	defaultOptions: {
		element: {},
		duration: 500,
		wrapperClassName: 'ticker-wrapper',
		innerClassName: 'ticker-inner',
		contentSelector: '.ticker-item'
	},
	_create: function() {
		var self = this;
		var opt = this.options;
		var oldIE = $.browser.msie && $.browser.version < 8;
		this.element.css({
			'overflow': 'hidden'
		});
		this.content = this.element.find(opt.contentSelector);
		this.wrapper = $('<div class="' + opt.wrapperClassName + '" />');
		this.wrapper.css({
			'overflow': 'hidden',
			'width': 9999
		});
		this.inner = $('<div class="' + opt.innerClassName + '" />');
		this.inner.css({
			'cssFloat': 'left',
			'display': 'inline-block'
		});
		if (oldIE) {
			this.inner.css({
				'display': 'inline',
				'zoom': 1
			});
		}
		this.inner.append(this.content);
		this.inner2 = this.inner.clone();
		if (DEBUG) {
			this.inner.addClass('inner1');
			this.inner2.addClass('inner2');
		}
		this.wrapper.append(this.inner).append(this.inner2);
		this.element.empty().append(this.wrapper);
		
		this._start();
	},
	_start: function () {
		var self = this;
		var opt = this.options;
		// Constant variables in animation function
		var boxIndex = 0;
		var boxWidth = this._getWholeWidth(this.content);
		var baseDuration = opt.duration * boxWidth / 20;

		// Animation function
		function animate() {
			// Animation target box is alternately changed
			var box = (boxIndex === 0) ? self.inner : self.inner2;
			var boxWidth = box.width();
			var boxMarginL = parseInt(box.css('margin-left')) || 0;
			// Compute remaining distance
			var distance = (boxMarginL === 0) ? boxWidth : boxWidth + boxMarginL;
			// Compute animation duration
			var duration = Math.floor(baseDuration * (distance / boxWidth));
			// Animation
			box.animate({
				'margin-left': '-=' + distance + 'px'
			}, duration, 'linear', function() {
				// Change target box
				boxIndex = (boxIndex === 0) ? 1 : 0;
				box.appendTo(self.wrapper).css({ 'margin-left': 0 });
				// Recursive Processing
				animate();
			});
		}
		// Initial animation
		animate();
		// add event
		this.wrapper.hover(function() {
			self.inner.stop();
			self.inner2.stop();
		}, function() {
			animate();
		});
	},
	_getWholeWidth: function ($box) {
		var width = 0;
		$box.each(function (i, box) {
			width += $(box).outerWidth();
		});
		return width;
	}
};


})(jQuery, this, this.document);
