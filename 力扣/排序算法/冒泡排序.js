let num = [2,8,6,5,1,2,3,4,5,6]

let bubbleSort = (arr)=>{
    for(let i = arr.length-1;i>=0;i--){
        for(let j = 0;j<=i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
}

bubbleSort(num)
console.log(num);