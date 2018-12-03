export function promiseError(err) {
    return () => Promise.reject(ErrorSingleton.instance(err))
}
 const ErrorSingleton = (function () {
    function ErrorSingleton(err) {
        this.error = err;
    }

    ErrorSingleton.instance = function (err) {
        if (this.singleton == null) {
            this.singleton = new ErrorSingleton(err);
        }
        return this.singleton;
    };
    return ErrorSingleton;
}());
