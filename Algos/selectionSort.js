function selectionSort(Arr) {
    for (let i = 0; i < Arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < Arr.length; j++) {
            if (Arr[j] < Arr[min]) {
              min = j;
            }     
        }
        [Arr[i], Arr[min]] = [Arr[min], Arr[i]];
    }
    return Arr;
}

console.log(selectionSort([1,4,2,9,5,6,8]))