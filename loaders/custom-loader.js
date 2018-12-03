module.exports = function(source) {
    const procesedSource = JSON.parse(source),
        keysToDelete = source.match(/[0-9]+/gi);
        keysToDelete.forEach(function(item){
        delete procesedSource.cars[item];
    });
    return JSON.stringify(procesedSource);
};