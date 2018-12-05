export class ErrorSingleton {
    constructor() {
        if(!ErrorSingleton.instance){
            ErrorSingleton.instance = this;
        }
        return ErrorSingleton.instance;
    }
    showError(error) {
        alert(error);
    }
};
