//1. number: 정수, 실수 등 산술 연산이 가능한 자료형

const num1 = 1.234;
const num2 = 50;
// document.write(typeof(num1));
// document.write(typeof(num2));

//2. string: 문자열로 이루어진 자료형
const str1= "이람다";
const str2 = "smhrd";
// document.write(`${str1}은 ${str2} 소속입니다`);

//3. boolean: 참, 거짓으로 표현되는 논리 형태의 자료형
const isFemale = false;
const isRich = false;
document.write(typeof(isFemale));
document.write(isNaN(isFemale));
document.write(isNaN(str1)); // 숫자가 아닌 문자열이라 true가 나옴
