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
            return
        }
    }
    return origin
}

const equal = function (origin,...args) {
    if(len < 1){
        return false
    }
    const dest = args.pop()
    const len = args.length;
    for(let i = 0;i<len-1;i++) {
        origin = origin[args[i]]
        if(origin === void(0)) {
            return false
        }
    }
    return origin === dest
}

export default {
    hit,
    target,
    equal
}