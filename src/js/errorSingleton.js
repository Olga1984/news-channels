export class ErrorSingleton {
    constructor(err) {
        this.error = err;
        if(!ErrorSingleton.instance){
            ErrorSingleton.instance = this;
        }
        return ErrorSingleton.instance;
    }
    showError() {
        alert(this.error);
    }
};
