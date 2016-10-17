import template from './blist-item.html';

import blistItemController from './blist-item.controller';

const blistItemComponent = {
    template: template,
    bindings: {
        bitem: '<',
        remove: '&', //removes bitem from Got List
    },

    controller: blistItemController,
    controllerAs: 'blistItemCtrl',
};

export default blistItemComponent;