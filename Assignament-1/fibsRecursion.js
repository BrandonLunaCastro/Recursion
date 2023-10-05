function fibRecursive(n,arr = [0,1]){
    if(n < 2){
        return arr
    }else{
        let operation1 = arr[arr.length-1]
        let operation2 = arr[arr.length-2]
        let sum = operation1 + operation2;
        arr.push(sum)
        return fibRecursive(n-1,arr)
    }
}

console.log(fibRecursive(7))
// input (7) --> [0,1,1,2,3,5,8,13]
// input (8) --> [0,1,1,2,3,5,8,13,21]
