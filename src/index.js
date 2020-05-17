import 'shared/config';
import 'modules/users/routes';
import 'shared/locales/en';
import 'modules/users/locales/en';
import 'modules/users/locales/ar';
import Reactor from 'core/reactor';

const reactor = new Reactor();

// start the application
reactor.react();