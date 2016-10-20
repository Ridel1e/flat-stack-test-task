/**
 * Created by ridel1e on 20/10/2016.
 */

const EXTENSION_NAME = 'dom';

const extension = (() => {
  return {
    findOne
  };
  
  function findOne() {
    
  }
  
})();


export default (ApplicationController) => 
  ApplicationController.extend(EXTENSION_NAME, extension);