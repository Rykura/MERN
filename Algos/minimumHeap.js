// The parent must be smaller than its children for it to be a min heap
//[null, 23, 50, 35]

class minHeap{
    constructor(){
        this.heap = [null]
    }

    insert(value){
        this.heap.push(value)
        if (this.heap.length > 1) {
            let temp = this.heap.length - 1;
            while (temp > 1 && this.heap[Math.floor(temp/2)] > this.heap[temp]) {
                [this.heap[Math.floor(temp/2)], this.heap[temp]] = [this.heap[temp], this.heap[Math.floor(temp/2)]]
                temp = Math.floor(temp/2)
            }
        }
    }
    remove(){
        [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]]
        this.heap.pop();
        for(var i = 1; i < this.heap.length; i++){
            if (this.heap[i] > this.heap[i*2] && this.heap[i*2] < this.heap[(i*2)+1]){
                [this.heap[i], this.heap[i*2]] = [this.heap[i*2], this.heap[i]]
            }
            else if (this.heap[i] > this.heap[(i*2)+1]){
                [this.heap[i], this.heap[(i*2)+1]] = [this.heap[(i*2)+1], this.heap[i]]
            }
            console.log(this.heap)
        }
    }
}

let heap1 = new minHeap();
heap1.insert(23);
heap1.insert(16);
heap1.insert(12);
heap1.insert(19);
heap1.insert(99);
heap1.insert(109);
heap1.insert(33);
heap1.insert(117);


console.log(heap1)

heap1.remove();
