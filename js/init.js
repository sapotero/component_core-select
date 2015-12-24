"use strict";

var CoreSelectPrototype = Object.create(HTMLElement.prototype);
CoreSelectPrototype.createdCallback = function() {
  this.textContent = "I'm an x-foo!";
};

CoreSelectPrototype.load = function() {
  console.log('foo() called');
};
CoreSelectPrototype.attributeChangedCallback = function( attr, oldVal, newVal ) {
  console.log("attr, oldVal, newVal: ", attr, oldVal, newVal);
};

var CoreSelect = document.registerElement('core-select', {
  prototype: CoreSelectPrototype
});