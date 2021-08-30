
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];
    if (matrix == undefined || matrix.length == 0) { return [] }
    matrix.map(function (element, index) {
        if (index % 2 == 0) {
            res.push(element);
        } else {
            res.push(element.reverse());
        }
    });
    let res2 = res.join();
    let fin = (res2.split(',')).map(Number);
    return fin;
}
