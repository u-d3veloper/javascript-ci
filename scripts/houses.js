var selector = document.getElementById("houses");
var list = document.getElementById("student-list");

studentList = {
    "gryffondor" : ["Harry Potter","Hermione Granger","Ron Weasley"],
    "pouffsoufle" : ["hannah Habot","Susan bones"],
    "serdaigle" : ["Luna Lovegood","Cho chang"],
    "serpentard" : ["Malefoy","Crab","Goyle"]
}

selector.addEventListener("change", (event)=>{
    let childs = document.querySelectorAll("li");
    console.log(childs);
    childs.forEach(element => {
        list.removeChild(element);
    });
    let house = selector.value;
    studentList[house].forEach(element => {
        let child = document.createElement("li");
        child.textContent = element;
        list.appendChild(child);
    });
});

