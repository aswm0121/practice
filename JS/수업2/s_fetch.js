fetch('student2.json')
// json파일을 읽어온다
.then(response => response.json())
// json 파일을 객체로 변환한다
.then(json => {  // 객체를 출력한다


    let output = ' ';
    json.forEach(student => {
        output += 
        `<h2>${student.name}</h2>
     
        <ul>
        <li>전공 : ${student.major}</li>
        <li>학년: ${student.grade}</li>
        </ul>
        <hr>
        `;
    });
    document.querySelector('#result').innerHTML = output;
})
.catch(error => console.log(error));