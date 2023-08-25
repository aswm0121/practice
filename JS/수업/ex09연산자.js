// 증가 연산자 a = ++ a; a = =--a;
//y += -= *= /=
// ==(자동으로 자료형 변환, 값만 비교), !=, 



// '/' 실제 나누기 연산 결과를 말함
// '%' 나머지를 알려줌
// 몫 구하는 연산자 없으므로 나눈 다음에 parseint로 정수화해서 쓴다


console.log(100+3);
console.log(100-3);
console.log(100/3);
console.log(100%3);
console.log(parseInt(100/3)); // 몫 구해줌
console.log(10 == "10"); // 같다고 나옴;;;
console.log(10 === "10");//false
console.log(10 === Number("10"));//false


// 세자리 수 이상을 입력받아서 100이하의 자리수는 버리는 문제 

// 방법1
let num1 = Number(prompt("세 자리 숫자를 알려주세요"));
let num2 = num1 % 100;
document.write(num1 - num2 + '<br>');

// 방법2
document.write(parseInt(num1/100)*100 + "<br>");// 연산의 순서 존재 parseint -> * 100




document.write(('b'+'a'+ +'a'+'a').toLowerCase())
