function blistAPIService($resource) {
    const api = {
        bitems: $resource('/api/groceryList/:id/',
            { id: '@id' }
            )
    };

    return api;
}

export default blistAPIService;