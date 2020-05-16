import 'shared/config'
import Reactor from "core/reactor";
import 'modules/users/routes';

const reactor = new Reactor();
reactor.react();