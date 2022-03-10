// create a helper function that takes 2 already sorted array, and combines them into one sorted array and returns that new sorted array

const combineSortedArrays = (arr1, arr2) =>{
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        // compare the value at the first array att index i with the value at the second array at index j to see which is smaller
        if(arr1[i]<arr2[j]){
            result.push(arr1[i])
            i++;
        }
        else{
            result.push(arr2[j])
            j++;
        }
        // check to see if there are any remaining values in the first array, and if there are just push them to results
    }
    while (i < arr1.length){
        result.push(arr1[i]);
        i++
    }
    while (j < arr2.length){
        result.push(arr2[j]);
        j++
    }


    return result;
}

// console.log(combineSortedArrays([1,3,7,8],[0,2,4,5])) // [0,1,2,3,4,5,7,8]

const mergeSort = (arr)=>{
    if(arr.length<=1){
        return arr;
    }
    let center = Math.floor(arr.length/2);
    let left = arr.slice(0,center)
    let right = arr.slice(center)
    return combineSortedArrays(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([3,5,2,1,8,3,9]))