// 반복문: 어떤 조건을 만족할 때까지 같은 처리를 반복하여 실행하는 구문


// 1. while문

let num2 = 0;

// console.log('1-1. while문');
// while (num1 < 3) {
//     console.log(num1);
//     num1++;
// }

console.log('1-2. do-while문')

do {
    console.log(num2);
    num2++;
}
while(num2>3);

// do while 문은 일단 한번은 실행함, 그리고 조건 확인

let num3 = 9;

while (num3 < 9) {
    console.log('while문', num3);
}
// 실행 안됨 즉 while문은 조건 먼저 확인 후 실행

do {
    console.log('dowhile문', num3);
} while (num3 < 9);

// 조건에 맞으면 반복하게 하기

let num4 = 3;

while (true) {
    console.log(num4);
    num4++;
    if (num4 === 6) break;
}
// 조건문에서 조건 1개일 때 {} 생략 가능

//=======================================================
// for문

// for (초기식 ; 조건문 ; 증감식) {
//     조건식이 true일 때의 실행문
// }

// for문 실습: 사용자로부터 시작문자, 마지막 숫자 입력 받음
let numA = Number(prompt("시작할 숫자를 입력하세요"));
let numB = Number(prompt("마지막 숫자를 입력하세요"));
let total = 0;

for (let i = numA; i<=numB;i++) {
    total += i;
}

document.write(`${numA}부터 ${numB}의 합은 ${total}`);