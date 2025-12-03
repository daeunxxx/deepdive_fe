// push : 배열 뒤에 요소를 추가
const fruits = [ "apple", "banana"];
fruits.push("mango"); 
console.log(fruits);

// pop : 배열 맨 뒤 요소를 제거
const nums = [1, 2, 3];
const removed = nums.pop();
console.log(nums);
console.log(removed);

// shift : 배열 맨 앞 요소 제거
const arr = [10, 20, 30];
const remove = arr.shift();
console.log(arr);
console.log(remove);

// unshift : 배열 맨 앞에 요소 추가
const arr1 = [20, 30];
arr1.unshift(10);
console.log(arr1);

// slice : 배열에서 일부 복사하여 새로운 배열로 반환-끝 index는 포함 안함 / 원본 배열은 변경되지 않음 
const colors = ['red', 'blue', 'green', 'yellow'];
const part = colors.slice(1, 3);
console.log(part);
console.log(colors);

// splice : 배열에서 요소를 삭제
const items = ['a', 'b', 'c', 'd'];
items.splice(1, 2);
console.log(items);

// splice : 배열에서 요소를 교체 splice(index,삭제할개수,추가할요소)
const number = [1,2,3,4];
number.splice(1, 1, 99)
console.log(number);