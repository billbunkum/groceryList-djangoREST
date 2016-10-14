import angular from 'angular';
import 'angular-resource';

import blistPageComponent from './blist-page';

const BlistModule = angular.module('blist', [
    ]).config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
        .component('blistPage', blistPageComponent);

export default BlistModule;