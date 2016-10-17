import template from './blist-edit.html';

import blistEditController from './blist-edit.controller';

const blistEditComponent = {
    template: template,
    bindings: {
        save: '&', //expecting a function
        bitem: '<', //expecting a variable or object
        cancel: '&?', //expecting a function but can be undefined...or something
    },

    controller: blistEditController,
    controllerAs: "blistEditCtrl",
};

export default blistEditComponent;