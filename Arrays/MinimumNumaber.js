const numbers = [10, 5, 23, 8, 15, 30, 12];

minNUmber = numbers[1]
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < minNUmber) {
      minNUmber = numbers[i];
    }
   
}
console.log(minNUmber)
