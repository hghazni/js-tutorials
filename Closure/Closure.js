/* closure
    1. Goal: get a scoped value from an inner function
    2. Hard part: Understanding how we can get it and why it works
*/

const outerFunction = () => {
    var cb = 'Curious Byte'
    const innerFunction = () => {
        var scopedValue = `I am restricted ${cb} scoped value`;
        return scopedValue;
    }
    return innerFunction();
}

const closureValue = outerFunction();

console.log(closureValue);