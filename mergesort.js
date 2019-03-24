let c = 0;

function merge(left, right) {
    var result = [];
    var Llen = left.length;
    var rlen = right.length;
    var l = 0;
    var r = 0;
    while (l < Llen && r < rlen) {
        if (left[l] < right[r]) {
            result.push(left[l++])

        } else if (left[l] > right[r]) {
            result.push(right[r++]);
            c++;

        } else if (left[l] == right[r]) {
            result.push(right[r++]);
            //c++;
        }


    }
    return result.concat(left.slice(l), right.slice(r));
}

function mergesort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var mid = Math.floor(len / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid);
    //console.log(left);
    //console.log(right);
    return merge(mergesort(left), mergesort(right));

}
var a = [2, 1, 3, 1, 2];
//var a = [7, 5, 3, 1];

/*for (var i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random() * 100 + 1);
}*/
console.log(a);
console.log(mergesort(a));
console.log(c);