import * as serviceWorker from './serviceWorker';
import { scan } from 'core/router'

export default class Reactor {

  /**
   * start the application
   */
  react() {
    scan();
  }
  /**
   * allow the app to work offline
   * @returns {Reactor}
   */
  workOffline() {
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register();
    return this;
  }
}