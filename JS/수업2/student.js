let xhr = new XMLHttpRequest();
xhr.open("GET", "student2.json");
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        let student = JSON.parse(xhr.responseText);
        // document.querySelector(".result").innerHTML = `
        // <h1>${student.name}</h1>
        // <ul><li>전공 : ${student.major}</li><li>학년 : ${student.grade}</li></ul>`;

        renderHTML(student);
    }
}

function renderHTML (contents) {
    let output = "";
    for (let content of contents) {

     output += `<h2>${content.name}</h2>
     
     <ul>
     <li>전공 : ${content.major}</li>
     <li>학년: ${content.grade}</li>
     </ul>
     <hr>
     `;

    }
    document.getElementById("result").innerHTML = output;
}