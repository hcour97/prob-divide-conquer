function findRotationCount(arr, lowIdx = 0, highIdx = arr.length -1) {
    if (highIdx < lowIdx) return 0;
    if (highIdx === lowIdx) return lowIdx;
    let midIdx = Math.floor((lowIdx + highIdx) / 2);

    // Check if element (mid+1) is minimum element.
    // Consider the cases like [3, 4, 5, 1, 2]
    if (midIdx < highIdx && arr[midIdx + 1] < arr[midIdx]) {
        return midIdx+1;
    }
    // Check if mid is the minimum element
    if (midIdx > lowIdx && arr[midIdx-1] > arr[midIdx]) {
        return midIdx;
    }

    // Decide whether need to move to the left half or the right half
    if (arr[highIdx] > arr[midIdx]) {
        return findRotationCount(arr, lowIdx, midIdx - 1);
    }

    return findRotationCount(arr, midIdx + 1, highIdx);
}

module.exports = findRotationCount