
let accumulatorOdd = [];
let numbers = [3, 4, 7, -8, 11, 13, -15, 18, 19, -21,];

for(let i = 0; i < numbers.length; i++){
    if (Math.abs(numbers[i]) % 2 > 0){
    accumulatorOdd.push(numbers[i])
    }
}

for(let j = 0; j < accumulatorOdd.length; j++) //проверка 
          console.log(accumulatorOdd[j]);