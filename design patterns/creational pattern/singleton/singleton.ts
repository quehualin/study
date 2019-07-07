
class Singleton {
    static _instance: Singleton;
    static instance(): Singleton {
        if (!this._instance) {
            this._instance = new Singleton();
        }
        return this._instance;
    }
}
