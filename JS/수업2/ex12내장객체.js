// 내장 객체: Array, Math, Date....

//Math: 랜덤 숫자 -> Math.random()
// 소수점 이하 버리기 -> Math.floor()

let today = new Date();

console.log("오늘", today);

let tYear = today.getFullYear();
let tMonth = today.getMonth()+1; // 0~11 반환
let tDate = today.getDate();

document.write(`오늘은 ${tYear}년 ${tMonth}월 ${tDate}일 `);

let tDay = today.getDay(); // 0~6으로 반환()
//0일 경우 일요일 1: 월

switch (tDay) {
    case 0:
        tDay = "일요일"
        document.write(tDay);
        break;

    case 1:
        tDay = "월요일"
        document.write(tDay);
        break;

    case 2:
        tDay = "화요일"
        document.write(tDay);
        break;

    case 3:
        tDay = "수요일"
        document.write(tDay);
        break;

    case 4:
        tDay = "목요일"
        document.write(tDay);
        break;

    case 5:
        tDay = "금요일"
        document.write(tDay);
        break;

    case 6:
        tDay = "토요일"
        document.write(tDay);
        break;
}


console.log(`${tDay}`)


let tHour = today.getHours();
let tMinutes = today.getMinutes();
let tSeconds = today.getSeconds();
document.write(`${tHour}시 ${tMinutes}분 ${tSeconds}초`);





