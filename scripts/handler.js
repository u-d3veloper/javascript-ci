var button = document.getElementById("click");
var display = document.getElementById("counter")
var counter = 0;

button.addEventListener("click", (event)=>{
    counter++;
    if (counter==3) {
        button.classList.remove("btn-primary");
        button.classList.add("btn-danger");
    }
    else if(counter==5){
        button.style.display="none";
    }
    display.innerHTML = counter.toString();
    event.preventDefault();
});