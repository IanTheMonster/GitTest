Promise.resolve('1')
    .then(res => {
        p = new Promise((resolve,reject)=>{
            resolve('asdasd');
        })
        return p;
    }).then((res)=>{
    console.log(res)
})
    .finally(() => {
        console.log('finally')
    })

Promise.resolve('2')
    .finally(() => {
        console.log('finally2')
        return '这是finally2返回的内容'
    })
    .then(res => {
        console.log('finally2后面的then接收', res)
    })
async function asyncFunction() {
    return 1;
}

const result = asyncFunction();
console.log(result); // 输出：Promise {<resolved>: 1}

