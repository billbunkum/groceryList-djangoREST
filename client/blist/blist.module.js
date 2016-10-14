import angular from 'angular';
import 'angular-resource';

const BlistModule = angular.module('blist', [
    ]).config(($resourceProvider) => {
        $resourceProvider.defaults.stripTrailingSlashes = false;
    })
        .component('blistPage', blistPageComponent);

export default BlistModule;