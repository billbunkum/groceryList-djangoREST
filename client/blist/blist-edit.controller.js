
function blistEditController() {
    const ctrl = this;
    ctrl.editedBitem = {};

    ctrl.saveBitem = function saveBitem() {
        ctrl.save( { editedBitem: ctrl.editedBitem });
    //mutate 'editedBitem' in NG w/in blist-item.html
    };

}

export default blistEditController;