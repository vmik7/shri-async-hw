Promise._any = function(promises) {
    return new Promise((resolve, reject) => {
        
        let pendingCount = promises.length;
        let findFulfilled = false;
        let errors = [];

        promises.forEach((p) => {
            p.then(res => {
                if (!findFulfilled) {
                    findFulfilled = true;
                    resolve(res);
                }
            }, (e) => {
                errors.push(e);
                pendingCount--;
                if (pendingCount === 0) {
                    throw new AggregateError(errors, 'All Promises rejected');
                }
            });
        }); 
    });
}

Promise._allSettled = function(promises) {
    return new Promise((resolve, reject) => {
        
        let pendingCount = promises.length;
        let results = [];

        promises.forEach((p) => {
            p.then(res => {
                results.push({
                    status: 'fulfilled',
                    value: res
                });
                pendingCount--;
                if (pendingCount === 0) {
                    resolve(results);
                }
            }, e => {
                results.push({
                    status: 'rejected',
                    reason: e
                });
                pendingCount--;
                if (pendingCount === 0) {
                    resolve(results);
                }
            });
        }); 
    });
}

Promise.prototype._finally = function(onFinally) {
    this.then(onFinally, onFinally);
    return this;
}