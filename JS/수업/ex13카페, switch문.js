const menu = prompt("어떤 음료수를 마시겠어요?");

// if (menu == null) {
//     document.write("주문 안 하실꺼면 꺼져주세요^^");
// }
// else if (menu == "딸기라떼") 
// {
//     document.write("딸기는 겨울한정이에요");
// }
// else if (menu == "아메리카노") 
// {
//     document.write("주문하신 메뉴 나왔습니다");
// }
// else {
//     document.write(`${menu}는 5분 걸려요`);
// }


// if (menu == null) {
//     document.write('주문해주세요');
// }
// else {
//     if (menu == '아메리카노'|| menu == '아아') {
//         document.write('주문하신 메뉴 나왔습니다')
//     }
//     else if (menu == "딸기라떼") {
//         document.write("딸기는 겨울 한정이에요")
//     }
//     else {
//         document.write(`${menu}는 겨울한정이에요`)
//     }
// }

if (menu == null) {
 document.write('주문해주세요');
}

else {
    switch(menu) {
        
        case "아메리카노":
            document.write("주문하신 메뉴 나왔습니다"); 
            break;

        case "딸기라떼":
            document.write("딸기 라떼는 겨울 한정 메뉴입니다");
            break;

        case "카페라떼":
            document.write("카페라떼 대기 시간 3분이요");
            break;

        case "캬라멜메끼예또":
            document.write("대기 시간 5분이요");

        default:// else와 기능 비슷하다
            document.write("최소 예상 5분 걸립니다");
        }

        

    }

//swith(변수) {

//        case 조건:
//         실행문;
//         break;
// }