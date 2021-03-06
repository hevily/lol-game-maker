import { Control } from '../Control';

/**
 * @author tengge / https://github.com/tengge1
 */

var ID = -1;

function ColorPicker(options) {
    Control.call(this, options);
    options = options || {};
    this.id = options.id || 'colorpicker' + ID--;
    this.label = options.label || null;
    this.color = options.color || null; // #ffffff
    this.defaultPalette = options.defaultPalette || 'web';
    this.displayIndicator = options.displayIndicator || false;
    this.hideButton = options.hideButton || true;
    this.history = options.history || false;
    this.initialHistory = options.initialHistory || []; // ["#ff0000", "#00ff00", "#0000ff"]
    this.showOn = options.showOn || 'button';
    this.transparentColor = options.transparentColor || false; // "#0000ffff"
    this.dispatch = d3.dispatch('changeColor', 'mouseoverColor');
}

ColorPicker.prototype = Object.create(Control.prototype);
ColorPicker.prototype.constructor = ColorPicker;

ColorPicker.prototype.render = function() {
    this.el.div = document.createElement('div');
    this.parent.appendChild(this.el.div);
    if (this.label) {
        this.el.label = document.createElement('label');
        this.el.label.innerHTML = this.label;
        this.el.div.appendChild(this.el.label);
    }
    this.el.input = document.createElement('input');
    this.el.input.setAttribute('id', this.id);
    this.el.div.appendChild(this.el.input);
    $(this.el.input).colorpicker();
    $(this.el.div).controlgroup();
    var _this = this;
    $(this.el.input).on('change.color', function(event, color) {
        _this.dispatch.call('changeColor', _this, color);
    });
    $(this.el.input).on('mouseover.color', function(event, color) {
        _this.dispatch.call('mouseoverColor', _this, color);
    });
};

ColorPicker.prototype.clear = function() {
    $(this.el.input).colorpicker('clear');
};

ColorPicker.prototype.enable = function() {
    $(this.el.input).colorpicker('enable');
};

ColorPicker.prototype.disable = function() {
    $(this.el.input).colorpicker('disable');
};

ColorPicker.prototype.isDisabled = function() {
    $(this.el.input).colorpicker('isDisabled');
};

ColorPicker.prototype.val = function(color) { // #d0d0d0
    $(this.el.input).colorpicker('val', color);
};

ColorPicker.prototype.showPalette = function() {
    $(this.el.input).colorpicker('showPalette');
};

ColorPicker.prototype.hidePalette = function() {
    $(this.el.input).colorpicker('hidePalette');
};

ColorPicker.prototype.hidePalette = function() {
    $(this.el.input).colorpicker('hidePalette');
};

ColorPicker.prototype.on = function(eventName, callback) {
    this.dispatch.on(eventName, callback);
};

export { ColorPicker };