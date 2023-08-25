let num = "3.1417";

document.write(typeof(num));
// 1.  문자 -> 숫자

document.write(typeof(Number(num)));


// 2. 문자 -> 정수 : parseInt(val)

document.write(parseInt(num));

// parsefloat, parsefloat는 대상 전체를 숫자로 바꾸고 Number는 문자열에 있는 숫자를 숫자로 바꾼다


//3. 문자 -> 실수: parseFloat(val)
document.write(parseFloat(num));


//4. 숫자 -> 문자: String(val), val.toString()
const num1 = 100;
document.write(typeof(num1));
document.write(typeof(String(num1)));
document.write(typeof(num1.toString()));

num = Number(num);

document.write(typeof(num));