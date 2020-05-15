// we need a container to store our service providers
let serviceProviders = [];//this will be private

//resolved|created service providers objects
const resolvedServiceProviders = [];

//all services that will be provided to any module
const reactorServiceContainer = {}

/**
 * register the given service providers
 * @param serviceProvidersList
 */
function register(serviceProvidersList) {
  serviceProviders = serviceProvidersList;
}

function registerInternalServiceProviders(serviceProviders) {
  for (let serviceProvider of serviceProviders) {
    let {name, call} = serviceProvider.provider;
    reactorServiceContainer[name] = call;
  }
}

//start calling all service providers
function dispatch() {
  for (let serviceProvider of serviceProviders) {
    const provider = new serviceProvider(reactorServiceContainer); //because service provider may be a function or a class
    resolvedServiceProviders.push(provider);
  }
}

export default {
  register,
  dispatch,
  registerInternalServiceProviders
}