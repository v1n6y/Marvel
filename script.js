class student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}

function takeInput() {
    let stu = [];
    let index = 0;
    let obj = document.getElementById("input");
    for (let i of obj.children) {
        stu[index] = new student(i.children["fname"].value, parseInt(i.children["marks"].value));
        index++;
    }
    stu.sort((a, b) => b.marks - a.marks);
    console.table(stu);
    let avg = 0;
    var output = "<table><tr><th>Name</th><th>Score</th><th>Percentage</th></tr>";
    for (let i of stu) {
        let percent = (i.marks/100)*100;
        avg = avg + i.marks;
        output += "<tr><td>" + i.name + "</td><td>" + i.marks + "</td><td>" + percent + "</td></tr>" ;
    }
    output += "<tr><td>" + "Average Marks:" + "</td><td>" + avg/10 + "</td></tr>" + "</table>";
    document.getElementById("output").innerHTML = output;
}

