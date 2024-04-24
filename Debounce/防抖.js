function debounce(fn,delay) {
    let t = null ; //定义定时器
    return function f(){
        if ( t != null ){
            clearTimeout(t);
        }
        t = setTimeout(()=>{
            fn.call(this);
        },delay);
    }
}
function throttle(fn,delay){
    let  t = true; //默认存在
    return function f(){
        if(t){
            //如果放在这里，则会每次触发的时候都执行一下.
            setTimeout(()=>{
                fn.call(this);//执行操作
                t = true;
            },delay);
            t = false;
        }
    }
}