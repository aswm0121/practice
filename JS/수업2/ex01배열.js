// 배열: 여러 변수를 하나의 묶음으로 다루는 구조

//1. 배열의 선언

let numlist = [];
console.log(numlist);
let numlist2 = new Array(3); // 숫자 하나만 넣었을 때는 배열의 길이가 됨
console.log(numlist2)

// 연습



// 3개로 선언했어도 초과로 넣을 수 있다, 공간이 동적이고 가변적

let numlist3 = new Array(1,2,3,4,5); // 숫자 여러 개 넣으면 각각이 요소로 들어감
console.log(numlist3);

// 2. 배열의 생성
numlist = [1,2,3]; // 이미 선언한 배열에 값을 넣어줌
console.log(numlist);

//인덱스를 활용해서 데이터 저장 가능
// 배열을 선언 한 후에 접근 가능
// 인덱스는 0부터 시작



// update
numlist3[2] = 7;
console.log(numlist3);



// const 배열해도 안에 내용을 바꿀 수 있다(update 가능)
// 배열 관련 함수: 배열.length, 

numlist3[5] = 6;
console.log(numlist3.length);


//season = ['봄', '여름', '가을', '겨울'] -> 
// [0: '봄',
//1: '여름',
//2:'가을',
//3: '겨울'] -> 딕셔너리와 매우 비슷





