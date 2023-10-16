function mergesort(array) {
    var tmpArr = array.slice()

    // i = subarray size
    for (i = 1; i < array.length; i = i * 2) {
        for (j = 0; j < array.length; j += i * 2) {
            var k = j
            var left = j
            var right = Math.min(left + i, array.length)
            var leftEnd = right
            var rightEnd = Math.min(right + i, array.length)

            while (left < leftEnd && right < rightEnd) {
                if (array[left] <= array[right]) {
                    tmpArr[k] = array[left]
                    k++
                    left++
                } else {
                    tmpArr[k] = array[right]
                    k++
                    right++
                }
            }
            while (left < leftEnd) {
                tmpArr[k] = array[left]
                k++
                left++
            }
            while (right < rightEnd) {
                tmpArr[k] = array[right]
                k++
                right++
            }
        }
        var tmp = array
        array = tmpArr
        tmpArr = tmp
    }
    return array;
}