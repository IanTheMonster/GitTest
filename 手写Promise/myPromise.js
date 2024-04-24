class MyPromise {
    constructor(executor) {
        this._state = 'pending';
        this._data = undefined;
        executor(this._resolve.bind(this), this._reject.bind(this));
    }

    _resolve(data) {
        console.log('Resolve处理完成!', data);
        this._data = data;
        this._state = 'fulfilled';
    }

    _reject(reason) {
        console.log('已经拒绝!', reason);
        this._state = 'rejected';
    }
}
const pro = new MyPromise((resolve,rejected)=>{
    resolve(123);
})