import Fine from 'redux-fine';

import IndexModule from './module/index';
import HomeModule from './module/home';

Fine.config({ devtool: true });

Fine.module('index', IndexModule);
Fine.module('home', HomeModule);

export default Fine.store();
