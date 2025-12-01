const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 1. filter를 사용하여 짝수만 골라서 evenNumbers 변수에 담아 출력합니다.
const evenNumbers = numbers.filter(num => num % 2 === 0 );
console.log(evenNumbers);

// 2. evenNumbers의 숫자들을 모두 2제곱수로 만들어서 doubleNumbers 변수에 담아 출력
const doubleNumbers = evenNumbers.map( num => num ** 2 );
console.log("제곱수로 변환 : ", doubleNumbers);

const arr = [ 13, 5, 22, 10 ,5, 15, 82 ];
// 3. arr 인덱스 3번째부터 4번째까지만 추출하기 -> [ 10, 5]
console.log(arr.slice(3, 5));

// 4. arr 에서 짝수의 개수를 구하시오. // filter, length 사용 -> 3
const evenCount = arr.filter(num => num % 2 === 0).length;
console.log(evenCount);

// 5. arr에서 5의 배수의 개수를 구하시오 -> 4
const multipleCount = arr.filter(num => num % 5 === 0).length;
console.log("5의 배수의 개수는 : ", multipleCount);

