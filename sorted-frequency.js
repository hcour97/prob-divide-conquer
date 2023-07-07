function sortedFrequency(arr, val) {
    let firstIdx = findFirst(arr,val);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr,val);
    return lastIdx - firstIdx + 1;
}

    function findFirst(arr, val, leftIdx = 0, rightIdx = arr.length -1) {
        if (rightIdx >= leftIdx) {
            let midIdx = Math.floor((leftIdx + rightIdx)/2)
            if ((midIdx === 0 || val > arr[midIdx - 1]) && arr[midIdx] === val) {
                return midIdx;
            }
            else if (val > arr[midIdx]) {
                return findFirst(arr, val, midIdx+1, rightIdx);
            } else {
                return findFirst(arr, val, leftIdx, midIdx -1)
            }
        }
        return -1;
    }

    function findLast(arr, val, leftIdx=0, rightIdx=arr.length-1) {
        if (rightIdx >= leftIdx) {
            let midIdx = Math.floor((leftIdx + rightIdx)/2)
            if ((midIdx === arr.length - 1 || val < arr[midIdx + 1]) && arr[midIdx] == val) {
                return midIdx;
            }
            else if (val < arr[midIdx]) {
                return findLast(arr, val, leftIdx, midIdx - 1);
            }
            else {
                return findLast(arr, val, leftIdx + 1, rightIdx)
            }
        } 
        return -1;
    } 


module.exports = sortedFrequency