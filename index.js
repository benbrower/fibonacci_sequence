
//recursion
function fib1(n){
    //base case
    if (n < 3){
        return n - 1;
    } else {
        return recursive(n - 1) + recursive (n - 2)
    }
    
}

//iterative - slowest solution b/c of recursion
function fib0(n) {
    let arr = [0, 1];
    for (let i = 2; i < n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
        console.log(arr)
    }
    return arr[n-1]
}