import * as serviceWorker from './serviceWorker';
import routerServiceProvider from './router-service-provider';
import serviceProvidersContainer from './service-provider-container';

export default class Reactor {
  internalServiceProviders = [
    routerServiceProvider
  ];

  constructor() {
    serviceProvidersContainer.registerInternalServiceProviders(this.internalServiceProviders);
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

  /**
   * register entire app service providers to the service provider container
   * @param serviceProviders
   */
  registerServiceProviders(serviceProviders) {
    serviceProvidersContainer.register(serviceProviders)
  }

  /**
   * start the application
   */
  react() {
    // start calling all registered service providers
    serviceProvidersContainer.dispatch();

    //start scanning all routes
    routerServiceProvider.scan();

  }
}