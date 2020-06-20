const currency = function (v) {
    console.log(v);
    return "$"+v.toFixed(2);
}
const date = function (v){
    const time = new Date(v);
    return time.getFullYear() + "-" +
        ((time.getMonth() + 1)).toString().padStart(2, 0) + "-" +
        (time.getDate()).toString().padStart(2, 0) + " " +
        (time.getHours()).toString().padStart(2, 0) + ":" +
        (time.getMinutes()).toString().padStart(2, 0) + ":" +
        (time.getSeconds()).toString().padStart(2, 0);
}

const filters = {
    currency,
    date
}
// 将我的过滤器作为一个插件来使用。
export default {
    install(Vue){
        for(let key in filters){
            Vue.filter(key,filters[key]);
        }
    }
}