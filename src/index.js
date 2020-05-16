import Reactor from "./core/reactor";


// grab all service providers from all users
import UserServiceProvider from './modules/users/service-provider';


const reactor = new Reactor();
reactor.registerServiceProviders([UserServiceProvider])
reactor.react();