import angular from 'angular';

import BlistModule from '../blist/blist.module';
// why does this need to be in 'app.module'??
// what does 'app.module' communicate with?

import appComponent from './app.component';

const AppModule = angular.module('app', [
    BlistModule.name,
])
    .component('app', appComponent);

export default AppModule;
