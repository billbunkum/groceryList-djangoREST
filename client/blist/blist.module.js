import angular from 'angular';
import 'angular-resource';

import blistPageComponent from './blist-page.component';

const BlistModule = angular.module('blist', [
    'ngResource',
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .component('blistPage', blistPageComponent);

export default BlistModule;