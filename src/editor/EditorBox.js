import { Control } from '../ui/Control';
import { EditorMainPanel } from './EditorMainPanel';
import { EditorPropertyPanel } from './EditorPropertyPanel.js';

/**
 * @author tengge / https://github.com/tengge1
 */

function EditorBox(options) {
    Control.call(this, options);
    options = options || {};
    this.app = options.app || null;
    this.cls = options.cls || 'box';
    this.mainPanel = options.mainPanel || new EditorMainPanel({
        app: this.app
    });
    this.propertyPanel = options.propertyPanel || new EditorPropertyPanel({
        app: this.app
    });
    this.app.mainPanel = this.mainPanel;
    this.app.propertyPanel = this.propertyPanel;
}

EditorBox.prototype = Object.create(Control.prototype);
EditorBox.prototype.constructor = EditorBox;

EditorBox.prototype.render = function() {
    this.el.div = document.createElement('div');
    this.el.div.className = this.cls;
    this.parent.appendChild(this.el.div);
    this.mainPanel.parent = this.el.div;
    this.mainPanel.render();
    this.propertyPanel.parent = this.el.div;
    this.propertyPanel.render();
};

export { EditorBox };