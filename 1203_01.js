const user = {
    name : 'ghost',
    age : 500
}

// 객체의 속성 확인
console.log("name" in user); // true
console.log("mbti" in user); // false


for(const key in user){ // for..in문
    console.log(`${key} : ${user[key]}`);
}
    

const keys = Object.keys(user); // 키 값 추출

console.log(keys);

const values = Object.values(user); // 밸류 값 추출
console.log(values);

const entries = Object.entries(user); // 객체의 키 값 쌍을 추출
console.log(entries);

const target = { a: 1, b: 2 }
const source = { b: 3, c: 4, d: 5 }; // 뒤에 불린 b값이 덮어씀

const total = {...target, ...source};
console.log("total : ", total);

const totalAsign = Object.assign(target, source);
console.log("totalAsign : ", totalAsign);
