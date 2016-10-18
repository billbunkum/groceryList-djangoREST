
function blistPageController(blistAPIService, $interval) {
    const ctrl = this;
    ctrl.editedBitem = {};
    ctrl.gotBitems = [];
    ctrl.hasGotBitems = false;


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

//adds editedBitem object to gotBitem array; removes item using API
    ctrl.removeBitem = function removeBitem(editedBitem) {
        ctrl.gotBitems.push(editedBitem);
        alert(editedBitem.item_name + ' removed.');

        if (ctrl.gotBitems.length > 0) {
            ctrl.hasGotBitems = true;
        } else {
            ctrl.hasGotBitems = false;
        };

        blistAPIService.bitems.delete(editedBitem).$promise.then(getBitems());
// TESTING console.log(ctrl.gotBitems);
    };

// clears gotBitems array
    ctrl.clearGotBitems = function clearGotBitems() {
        ctrl.gotBitems = [];
        ctrl.hasGotBitems = false;
        alert('Got items cleared');
    };
}

// remove bitem from Get List
//    ctrl.removeBitem = function removeBitem() {
//        blistAPIService.bitems.
//    };

export default blistPageController;