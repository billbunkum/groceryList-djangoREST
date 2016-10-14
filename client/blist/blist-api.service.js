function blistAPIService($resource) {
    const api = {
        bitems: $resource('/api/groceryList/')
    };

    return api;
}

export default blistAPIService;