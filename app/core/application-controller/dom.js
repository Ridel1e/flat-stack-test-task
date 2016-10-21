/**
 * Created by ridel1e on 20/10/2016.
 */

import Jquery from 'jquery';

const EXTENSION_NAME = 'dom';

const extension = (() => {
  return {
    addEventListener,
    appendElement,
    createElement,
    find,
    html,
    removeElement,
    removeEventListener,
    replaceWith
  };

  /**
   * Finds element in specific context. If context is undefined finds element in document
   * @param selector
   * @param context
   */
  function find(selector, context) {
    if(typeof selector === 'string' && (context instanceof Jquery || context === undefined)) {
      if(context instanceof Jquery) {
        return context.find(selector);
      }

      return Jquery(selector);
    }
    else {

    }
  }

  /**
   * Replaces DOM element with new Dom Element
   * @param oldElement
   * @param newElement
   */
  function replaceWith(oldElement, newElement) {
    if(oldElement instanceof Jquery && (newElement instanceof Jquery || typeof newElement === 'string')) {
      oldElement.replaceWith(newElement);
    } else {
      
    }
  }

  /**
   * Changes element inner html
   * @param element
   * @param template
   */
  function html(element, template) {
    if(element instanceof Jquery && typeof template === 'string') {
      element.html(template);
    }
    else {

    }
  }

  /**
   * Appends element to specific context
   * @param element
   * @param context
   */
  function appendElement(element, context) {
    if((element instanceof Jquery || typeof element === 'string') && context instanceof Jquery) {
      context.append(element);
    }
    else {

    }
  }

  /**
   * Creates new DOM Element
   * @param template
   */
  function createElement(template) {
    if(typeof template === 'string') {
      return Jquery(template)
    }
    else {

    }
  }

  /**
   * Removes element from DOM
   * @param element
   */
  function removeElement(element) {
    if(element instanceof Jquery) {
      element.remove();
    }
    else {

    }
  }

  /**
   * Adds handler to specific event
   * @param element
   * @param eventName
   * @param callback
   */
  function addEventListener(element, eventName, callback) {
    if(element instanceof Jquery && typeof eventName === 'string' && callback instanceof Function) {
      element.bind(eventName, callback);
    }
    else {

    }
  }

  /**
   * Removes handler from specific event
   * @param element
   * @param eventName
   * @param callback
   */
  function removeEventListener(element, eventName, callback) {
    if(element instanceof Jquery && typeof eventName === 'string' && callback instanceof Function) {
      element.unbind(eventName, callback);
    }
    else {

    }
  }
})();


export default (ApplicationController) => 
  ApplicationController.extend(EXTENSION_NAME, extension);