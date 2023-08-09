const boxinput = document.getElementById('input-box');
const addlist = document.getElementById('list-container');


function addTask(){
    if(boxinput.value == ''){
        alert("you must enter some task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=boxinput.value;
        addlist.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    boxinput.value='';
    saveData();
}

addlist.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();

    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();

    }
}, false);

function saveData(){
    localStorage.setItem("data" , addlist.innerHTML);
}

function show(){
    addlist.innerHTML=localStorage.getItem('data');
}
show();