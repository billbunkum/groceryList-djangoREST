import template from './blist-item.html';

import blistItemController from './blist-item.controller';

const blistItemComponent = {
    template: template,
    bindings: {
        bitem: '<',
    },

    controller: blistItemController,
    controllerAs: 'blistItemCtrl',
};

export default blistItemComponent;