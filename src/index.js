
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let res = [];
    if (arguments.length != 0) {
        let k = 0, f = 1;
        for (let i = 0; i < matrix.length; i++) {
            if (f == -1) {
                matrix[i].reverse();
            }
            for (k = 0; k < matrix[i].length; k++) {
                res.push(matrix[i][k]);
            }
            f *= -1;
        }
    }
  return res;
}

