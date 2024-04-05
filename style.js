const text = document.getElementById("text");
const listcontainer = document.getElementById("list")

function addlist() {
    if (text.value === '') {
        alert("You must Write some Task");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = text.value;
        console.log(li);
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    text.value = "";
    saveData();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    }, false);

    function saveData(){
        localStorage.setItem("data", listcontainer.innerHTML);
    }
    function Showlist(){
        listcontainer.innerHTML = localStorage.getItem("data");
    }
    Showlist();