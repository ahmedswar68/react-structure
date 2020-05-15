import Reactor from "./core/reactor";


// grab all service providers from all users
import UserServiceProvider from './modules/users/service-provider';
import CategoriesServiceProvider from './modules/categories/service-provider';

const reactor = new Reactor();
reactor.registerServiceProviders([UserServiceProvider, CategoriesServiceProvider])
reactor.react();