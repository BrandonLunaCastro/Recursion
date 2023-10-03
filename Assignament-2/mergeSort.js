const merge = (arrLeft, arrRight,arr) => {
    let leftSize = Math.round(arr.length / 2)
    let rightSize = arr.length - leftSize
    console.log(leftSize)
    console.log(rightSize)
    let l = 0;
    let r = 0;
    let i = 0;

    while(l < leftSize && r < rightSize){
        if(arrLeft[l] < arrRight[r]){
            arr[i] = arrLeft[l]
            i++
            l++
        }else{
            arr[i] = arrRight[r]
            i++
            r++
        }
    } 
    while(l < leftSize){
        arr[i] = arrLeft[l]
        i++
        l++
    }    
    while(r < rightSize){
        arr[i] = arrRight[r]
        i++
        r++
    }
    return arr
} 
function mergeSort(arr){
   // console.log(arr)
    if(arr.length === 1){
        return arr;
    }else{
        let mid = Math.round((arr.length-1) / 2);
        let copy = [...arr]
        let left = copy.splice(0, mid);
        let right = copy;
        let arrLeft = mergeSort(left);
        let arrRight = mergeSort(right);
       return merge(arrLeft,arrRight,arr)
    } 
}

console.log(mergeSort([55,2,8,1,98,3,5]));
 