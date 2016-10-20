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
    this.container = document.querySelector(`#${moduleName}`);
  }

  /**
   * Initialize container template
   * @param template
   */
  initializeTemplate(template) {
    this.container.innerHTML = template;
  }
}

export default Sandbox;