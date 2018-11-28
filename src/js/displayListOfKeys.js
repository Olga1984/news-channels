export const DisplayListOfUniqueKeys = (listOfKeys) => {
    const keys = [];
    for (let i = 0; i < listOfKeys.list.people.length; i++) {
        Object.keys(listOfKeys.list.people[i]).forEach(function (key) {
            if (keys.indexOf(key) === -1) {
                keys.push(key);
            }
        });
    }
    console.log(keys);
};