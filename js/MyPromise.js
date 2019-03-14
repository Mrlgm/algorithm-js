const PANDING = 'panding'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
    const that = this
    that.value = null
    that.status = PANDING
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value){
        if(that.status === PANDING){
            that.status = RESOLVED
            that.value = value
            that.resolvedCallbacks.forEach(cb=>cb(value))
        }
    }

    function reject(value){
        if(that.status === PANDING){
            that.status = REJECTED
            that.value = value
            that.rejectedCallbacks.forEach(cb=>cb(value))
        }
    }

    try{
        fn(resolve, reject)
    }catch(e){
        reject(e)
    }
}

MyPromise.prototype.then= function(onFulfilled, onRejected){
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v=>v
    onRejected = typeof onRejected === 'function' ? onRejected : r=>{throw r}

    if(that.status === PANDING){
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }

    if(that.status === RESOLVED){
        onFulfilled(that.value)
    }

    if(that.status === REJECTED){
        onRejected(that.value)
    }
}

function ajax(method, url, body = null){
    return new MyPromise((resolve, reject)=>{
        let xhr = new XMLHttpRequest

        xhr.open(method, url)

        xhr.onreadystatechange = function(){
            if(this.readyState === 4){
                if(this.status === 200){
                    resolve(this.response)
                }else{
                    reject({'code':this.status, 'response':this.response})
                }
            }else if(this.readyState === 2){
                console.log('hhhh')
            }
        }
        xhr.send(body)
    })
}

ajax('get', 'http://api.wwnight.cn').then((e)=>{
    console.log(e)
})