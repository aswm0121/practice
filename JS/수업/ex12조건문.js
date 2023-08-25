// if (조건) {

//조건이 true 일때 실행할 명령
// }

// let age = 16;
// if (age >= 18) {

//     document.write("성인입니다")

// }


// //(조건)?참일때:거짓일 때, if 생략가능
// (age >= 18) ? "":document.write('미성년이에요');

let age = Number(prompt("나이는?"))
if (age >= 18) {
    document.write('성인이에요')
}
else if (age >=7) {
    document.write('학생입니다')
}
else {
    document.write("유아에요")
}