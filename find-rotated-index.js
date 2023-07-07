const findRotationCount = require("./find-rotation-count")

function findRotatedIndex(arr, num) {
    // args: array, num // returns the index of the given number
    var shift = findShift(arr);
    if (shift > 0 && num >= arr[0] && num <= arr[shift - 1]) {
        return binarySearch(arr, num, 0, shift - 1)
    } else {
        return binarySearch(arr,num, shift, arr.length)
    }
}

function binarySearch(arr, num, start, end) {
    if (arr.length === 0) return -1; // empty array
    if (num < arr[start] || num > arr[end]) return -1; // outside the given values

    while (start <= end) {
        var mid = Math.floor((start + end) / 2)
        if (arr[mid] === num) return mid; // if the mid value is num value
        else if (num < arr[mid]) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return -1;
}

//find where the array is rotated 
function findShift(arr) {
// if the array is only one object long
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    var start = 0;
    var end = arr.length - 1;
    while (start <= end) {
        var mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr[mid+1]) return mid + 1
        else if (arr[start] <= arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }
}


module.exports = findRotatedIndex