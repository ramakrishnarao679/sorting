function customsort(arr){
    const len =arr.length;
    for(let i=0; i<len-1; i++){
        for(let j=0; j<len-1; j++){
            if(arr[j]>arr[j+1]){
                const temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
};
console.log(customsort([5,2,9,2,6]));