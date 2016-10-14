
function blistPageController(blistAPIService, $interval) {
    const ctrl = this;

    function getBitems() {
        blistAPIService.bitems.get().$promise.then( (data) => {
            ctrl.bitems = data.results;
//getting ctrl.bitems
        });
    }
    getBitems();
    // $interval(getBitems, 2000);
}

export default blistPageController;