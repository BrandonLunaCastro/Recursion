const merge = (arr) => {
  console.log(arr)
}
function mergeSort(arr){
  
    if(arr.length === 1){
        return arr;
    }else{
        let half = Math.round(arr.length / 2);
        let left = arr.splice(0,half);
        let right = arr;
        mergeSort(left);
        mergeSort(right);
    }

}

console.log(mergeSort([5,2,8,6,9,1]));
