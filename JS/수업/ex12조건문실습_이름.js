let names = prompt("이름을 적어주세요");


if (names === null) {

    // 버튼 취소 누르면 name에 null 값임
    //false는 return되서 변수 names에 안들어감
    document.write("취소했습니다");
}
else if (names === "") {

    document.write('이름을 적어주세요');
}
else {
    document.write(`${names}님 안녕하세요`);
}