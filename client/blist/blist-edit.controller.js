import { merge } from 'ramda';


function blistEditController() {
    const ctrl = this;
    ctrl.editedBitem = {};

     ctrl.$onChanges = function $onChanges() {
// //$onChanges is an Angular function
// // used to make a COPY of ctrl.editedSup
         ctrl.editedBitem = merge({}, ctrl.bitems); //overwrites {} w/ key from 'ctrl.sup' and returns it
     };

    ctrl.saveBitem = function saveBitem() {
        ctrl.save( { editedBitem: ctrl.editedBitem });
    //mutate 'editedBitem' in NG w/in blist-item.html
    };

}

export default blistEditController;