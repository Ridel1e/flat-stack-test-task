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
    this.ApplicationController.dom.html(this.container, template);
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
  dispatch(eventName, data) {

  }

  /**
   * Subscribes module to specific event
   */
  subscribe(eventName) {

  }

  /**
   * Unsubscribes module from specific event
   */
  unsubscribe() {

  }
}

export default Sandbox;