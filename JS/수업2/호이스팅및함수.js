//  함수: 특정 기능을 수행하는 소스 코드를 하나로 묶어서 필요할 때마다 
// 사용하기 위한 구조


// 함수 선언

function intro() {

    document.write("서초캠 이람다입니다");
}

intro()

//매개변수(파라메터)

function intro2(name) {


    document.write(`서초캠 ${name}입니다`);
}

intro2('최성우');

//호이스팅 : 선언문이 코드의 선두로 끌어올려진 것처럼 동작하는 현상
// 소스코드 처리 과정: 평가 -> 실행/  평가 과정에서 모든 선언문 등록됨
// -> 소스코드 실행(런타임)
// 변수 호이스팅

console.log(lunchmenu);
//lunchmenu is not defined -> 선언x


var lunchmenu;
//undefined -> 선언 o 할당 x


lunchmenu = '쌀국수';
console.log(lunchmenu);

// console.log(dinnermenu);



//함수 호이스팅

func1('위: ');
// func2('위: ')

function func1(val) {
    console.log(val, '함수 선언문');
}
// 함수 불러오는 걸 선언 보다 먼저 했는데 이게 되네? 호이스팅(끌어 올린것)


const func2 = function(val) {

    console.log(val, '함수 표현식');
}
// Cannot access 'func2' before initialization
// -> 변수에 함수를 할당하면 호이스팅 안된다
// 호이스팅을 막기 위해서 표현식(익명함수)를 사용한다



func1('아래: ');
func2('아래: ');


// 함수 표현식: 익명 함수 형태로 함수 선언-> 변수 참조
// function();
intro(); // 함수로 정의 되지 않는다
console.log(intro);


var intro = function() {
    console.log('이람다입니다');
}



// let numb = function(a,b) {
//     return a+b;
// }

let intro2 = function(name) {
    console.log(`서초캠 담임을 맡은 ${name}`);
}


intro2('최성우');
// 호이스팅 되면 함수 선언하기 전에 함수 사용할 수 있으나 이것은 좋지 않다
// 따라서 함수 표현식이나 익명함수. 화살표 함수 사용해야




//화살표 함수 사용법
var intro = () => {
    console.log("서초캠 이람다입니다")
}

let intro = name => {
    console.log(`서초캠 담임을 맡은 ${name}입니다`)
}

intro2('최성우');