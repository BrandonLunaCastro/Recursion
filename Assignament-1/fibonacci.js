function fibsOne(num){
    let series = [0,1]
    for (let n = 2  ; n < num ; n++) {
       series[n] = series[n-2] + series[n-1] 
    } 
    return (series)
}
console.log(fibsOne(8)); 

function fibs(n){
    let num = 1;
    let previous = 0; 
    let aux = 0;
    let arr  = [previous,num]
    for(let i = 2 ; i < n ; i++){
        num = num + previous;
        aux = previous
        previous = num - aux
        arr.push(num)
    }
   return arr; 
} 
console.log(fibs(8));

