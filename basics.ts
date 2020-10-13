function add(n1: number, n2: number, showResult: boolean) {
    const result = n1 + n2
    if (showResult) {
        console.log(result)
    } else {
        return result
    }
}

// type inference
let number1: number;
number1 = 2;
const number2 = 3;
const printResult = true

add(number1, number2, printResult)
