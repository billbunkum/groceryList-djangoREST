import angular from 'angular';
import 'angular-resource';

import blistPageComponent from './blist-page.component';
import blistItemComponent from './blist-item.component';

const BlistModule = angular.module('blist', [
    'ngResource',
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .component('blistPage', blistPageComponent)
    .component('blistItem',
        blistItemComponent);

export default BlistModule;