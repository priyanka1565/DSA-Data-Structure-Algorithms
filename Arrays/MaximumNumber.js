const numbers = [10, 5, 23, 8, 15, 30, 12];
//we assume the maximum number

let maxNumber = numbers[0];
//console.log(maxNumber);

for (var i = 1; i < numbers.length; i++){
    //console.log(numbers[i])
    //comapare the current elements with current maximum

    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]
    }
}
console.log(maxNumber)

