import angular from 'angular';
import 'angular-resource';

import blistPageComponent from './blist-page.component';
import blistItemComponent from './blist-item.component';
import blistEditComponent from './blist-edit.component';

import blistAPIService from './blist-api.service';

const BlistModule = angular.module('blist', [
    'ngResource',
]).config(($resourceProvider) => {
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
    .factory('blistAPIService', blistAPIService)
    .component('blistPage', blistPageComponent) //t'blistPage becomes blist-page
    .component('blistItem', blistItemComponent)
    .component('blistEdit', blistEditComponent);

export default BlistModule;