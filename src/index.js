const hit = function (origin, ...args) {
    const len = args.length;
    for(let i = 0;i<len;i++){
        origin = origin[args[i]]
        if(origin === void(0)) {
            return false
        }
    }
    return true
}

const target = function (origin,...args) {
    const len = args.length;
    for(let i = 0;i<len;i++) {
        origin = origin[args[i]]
        if(origin === void(0)) {
            return false
        }
    }
    return origin
}

export default {
    hit,
    target
}