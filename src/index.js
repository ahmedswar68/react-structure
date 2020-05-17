
import 'shared/config';
import 'shared/locales/en';

// home

// users
import 'modules/users/routes';
import 'modules/users/locales/en';
import 'modules/users/locales/ar';

// Reactor
import Reactor from 'core/reactor';

const reactor = new Reactor();
reactor.react();