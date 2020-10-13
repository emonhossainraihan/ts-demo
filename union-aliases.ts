// Type aliases
type combinable = number | string;

function combine(
    input1: number | string,
    input2: combinable
) {
    let result;
    if (
        typeof input1 === 'number' &&
        typeof input2 === 'number'
    ) {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

const combineNum = combine(2, 3)
const combineStr = combine('Emon', ' Hossain')
console.log({ combineNum, combineStr })