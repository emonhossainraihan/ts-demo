function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
// use function name(): undefined {
//     return;
// }
printResult(add(2, 3));
var combineValues = Function;
var combineNums;
// combineNums = printResult 
function addHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var Handler = addHandle(2, 3, printResult);
