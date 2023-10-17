function mergesort(array) {
    // i = subarray size
    for (i = 1; i < array.length; i = i * 2) {
        for (j = 0; j < array.length; j += i * 2) {
            var left = j
            var right = Math.min(left + i, array.length)
            var leftEnd = right
            var rightEnd = Math.min(right + i, array.length)

            while (left < leftEnd && right < rightEnd) {
                if (array[left] <= array[right]) left++
                else {
                    // swapping element at right with element at left
                    var tmp = array[right]
                    array[right] = array[left]
                    array[left] = tmp
                    // swap to maintain order of right subarray
                    for (k = right; k > left + 1; k--) {
                        tmp = array[k - 1]
                        array[k - 1] = array[k]
                        array[k] = tmp
                    }
                    left++
                    right++
                    leftEnd++
                }
            }
        }
    }
    return array;
}