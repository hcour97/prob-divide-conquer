function findFloor(arr, val, lowIdx = 0, highIdx = arr.length -1) {
    // returns floor of val (the largest element which is smaller than or equal to x)
    if (lowIdx > highIdx) return -1;
    if (val >= arr[highIdx]) return arr[highIdx];

    let midIdx = Math.floor((lowIdx + highIdx) / 2)

    if (val === arr[midIdx]) return arr[midIdx];

    // check for left or right side:
    if (midIdx > 0 && arr[midIdx - 1] <= val && val < arr[midIdx]) {
        return arr[midIdx - 1]
    }

    if (val < arr[midIdx]) {
        return findFloor(arr, val, lowIdx, midIdx - 1)
    }
    
    return findFloor(arr, val, midIdx + 1, highIdx)
}

module.exports = findFloor