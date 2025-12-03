// map : 배열의 요소를 변환하여 새로운 배열을 반환 -모든 요소에 동일한 작업할 때
// 원본 배열은 변경되지 않음
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// filter : 조건을 만족하는 요소만 걸러서 새로운 배열로 반환
const nums = [10, 5, 8, 20, 3];
const small = nums.filter( n => n < 10);
console.log(small);

// spilit : 문자열을 구분자 기준으로 잘라서 배열로 변환
const text = "apple,banana,mango";
const arr = text.split(",");
console.log(arr);

// join : 배열을 구분자 기준으로 붙여서 문자열로 변환
const arr1 = ["안녕", "나는", "다은이야"];
const result = arr1.join("");
console.log(result);

const date = "2025-12-05";
const dates = date.split("-").join("/");
console.log(dates);