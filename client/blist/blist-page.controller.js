
function blistPageController(blistAPIService, $interval) {
    const ctrl = this;
    ctrl.editedBitem = {};

    function getBitems() {
        blistAPIService.bitems.get().$promise.then( (data) => {
            ctrl.bitems = data.results;
//getting ctrl.bitems
        });
    }
    getBitems();
    $interval(getBitems, 5000);

//saving new Bitems on main page
    ctrl.saveBitem = function saveBitem(editedBitem) {
        blistAPIService.bitems.save(editedBitem).$promise.then(
            (bitemData) => { ctrl.bitems = [ bitemData, ...ctrl.bitems, ];
            ctrl.editedbitem = {};
        });
    };


//NOT WORKING
    ctrl.removeBitem = function removeBitem(editedBitem) {
        blistAPIService.bitems.shift(editedBitem);
    };
}

// remove bitem from Get List
//    ctrl.removeBitem = function removeBitem() {
//        blistAPIService.bitems.
//    };

export default blistPageController;