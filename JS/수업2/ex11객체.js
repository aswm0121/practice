// 객체: 여러 데이터를 하나의 변수에 저장할 수 있는 데이터 타입


// 구조: {key1: value1, key2: value2................}
// key: 객체의 속성 property
// value: 속성의 값/ 기본 자료형, 함수, 배열, 객체


let person = {
    "name":"이람다",
    isPerson: true,
    isFemale: true,
    intro: function() {
        console.log("여러분 만나서 반갑습니다")
    },
    favorite: {
        food: "yangyumchicken",
        drink: "zerocola"
    },
    smhrd : ['이람다', '최성우', '김윤호']
}

// 객체 접근
console.log(person);
console.log(person.name);
console.log("좋아하는 음식:", person.favorite.food);
console.log("담임선생님", person.smhrd[1], "😍");
person.intro();
console.log(person.favorite);

// 속성(프로퍼티) 변경 및 추가

person.name = "김윤호";
console.log(person)
person.isFemale = false;
console.log(person.isFemale)
person.height = 180;
console.log(person);


// 사용자가 생성해서 사용하는 객체: 사용자객체(userobject)

//내장객체: 자바스크립트에서 제공하는 객체
