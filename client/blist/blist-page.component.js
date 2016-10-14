import template from './blist-page.html';
//where does 'template' come from?
//why can use file extensions here but not elsewhere?

import blistPageController from './blist-page.controller';

const blistPageComponent = {
    template: template,
    controller: blistPageController,
    controllerAs: 'blistPageCtrl',
};

export default blistPageComponent;