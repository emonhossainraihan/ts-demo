function add(
    n1: number,
    n2: number
) {
    return n1 + n2
}

function printResult(num: number): void {
    console.log('Result: ' + num)
}

// use function name(): undefined {
//     return;
// }

printResult(add(2, 3))

let combineValues = Function;
let combineNums: (a: number, b: number) => number;

// combineNums = printResult 

function addHandle(
    n1: number,
    n2: number,
    cb: (num: number) => void
) {
    const result = n1 + n2
    cb(result)
}

const Handler = addHandle(3, 3, printResult)