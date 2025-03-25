/**
 * @author superXu
 * @date 2020/10/8 16:45
 */


function get(k) {
    return localStorage.getItem(k)
}

function put(k, v) {
    return localStorage.setItem(k, v)
}

export default {
    get(k) {
        return get(k)
    },
    put(k,v) {
        put(k,v)
    },
    clear(k){
        localStorage.removeItem(k)
    }

}
