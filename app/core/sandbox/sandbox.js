/**
 * Created by ridel1e on 20/10/2016.
 */

class Sandbox {
  /**
   * Sandbox object constructor
   * @param ApplicationController
   * @param moduleName
   */
  constructor(ApplicationController, moduleName) {
    this.ApplicationController = ApplicationController;
    
    this.container = this.ApplicationController.dom.find(`#${moduleName}`);
  }

  /**
   * Renders container template
   * @param template
   */
  renderTemplate(template) {
    const container = this.ApplicationController.dom.createElement(template);
    this.ApplicationController.dom.replaceWith(this.container, container);
    this.container = container;
  }

  /**
   * Appends inner text to element
   * @param element
   * @param text
   */
  appendText(element, text) {
    this.ApplicationController.dom.appendText(element, text);
  }
  
  /**
   * Appends element to context. If context is undefined, appends element to own module context.
   * @param element
   * @param context
   */
  appendElement(element, context) {
    if(context instanceof Object) {
      this.ApplicationController.dom.appendElement(element, context);
    }
    else {
      this.ApplicationController.dom.appendElement(element, this.container);
    }
  }

  /**
   * Creates a Dom element.
   * @param options
   */
  createElement(template) {
    return this.ApplicationController.dom.createElement(template);
  }

  /**
   * Removes element from Dom
   * @param element
   */
  removeElement(element) {
    this.ApplicationController.dom.removeElement(element);
  }

  /**
   * Adds an event handler to specific event
   * @param element
   * @param eventName
   * @param callback
   */
  addEventListener(element, eventName, callback) {
    this.ApplicationController.dom.addEventListener(element, eventName, callback);    
  }

  /**
   * gets specific attribute of element 
   * @param element
   * @param attrName
   */
  getAttribute(element, attrName) {
    this.ApplicationController.dom.getAttribute(element, attrName);
  }

  /**
   * sets value to specific element attribute
   * @param element
   * @param attrName
   * @param attrValue
   */
  setAttribute(element, attrName, attrValue) {
    this.ApplicationController.dom.setAttribute(element, attrName, attrValue);
  }

  /**
   * Removes an event handler to specific event
   */
  removeEventListener(element, eventName, callback) {
    this.ApplicationController.dom.removeEventListener(element, eventName, callback);
  }

  /**
   * Returns an element or elements relevant to the selector. If context is undefined element will be find in module own context.
   */
  find(selector, context) {
    if(context instanceof Object) {
      return this.ApplicationController.dom.find(selector, context);
    }
    
    return this.ApplicationController.dom.find(selector, this.container);
  }
  
  /**
   * Emits new event
   */
  emit(eventName, data) {
    this.ApplicationController.eventEmitter.emit(eventName, data);
  }

  /**
   * Subscribes module to specific events
   */
  subscribe(listeners) {
    if(listeners instanceof Array) {
      listeners.forEach((listener) =>
        this.ApplicationController.eventEmitter
          .subscribe(listener.eventName, listener.callback));
    }
    else if(listeners instanceof Object) {
      this.ApplicationController.eventEmitter
        .subscribe(listeners.eventName, listeners.callback);
    }
    else {
      
    }
  }

  /**
   * Unsubscribes module from specific event
   */
  unsubscribe(listeners) {
    if(listeners instanceof Array) {
      listeners.forEach((listener) =>
        this.ApplicationController.eventEmitter
          .unsubscribe(listener.eventName, listener.callback));
    }
    else if(listeners instanceof Object) {
      this.ApplicationController.eventEmitter
        .unsubscribe(listeners.eventName, listeners.callback);
    }
    else {

    }
  }
}

export default Sandbox;