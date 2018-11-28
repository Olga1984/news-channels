module.exports = function(source) {
    console.log('list of unique keys');
    return source.replace(/[0-9]+/gi, "allReplacedKeysAsUnique");
};