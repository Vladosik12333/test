const mergeSort = (arr) => {
    const merge = (left, right) => {
        const sortedArr = [];

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                sortedArr.push(left.shift());
            } else {
                sortedArr.push(right.shift());
            }
        }

        return [...sortedArr, ...left, ...right];
    };

    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);

    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

mergeSort([3, 8, 5, 6, 99, 1]);
