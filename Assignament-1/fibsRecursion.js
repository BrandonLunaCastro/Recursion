function fibsRecursive(num){
    //console.log(num)
    let arr = []
    if(num === 1 || num === 0 ){
        return num;
    }
    else{
        return arr.concat(fibsRecursive(num - 1) + fibsRecursive(num - 2))
    }
}
console.log(fibsRecursive(7));
