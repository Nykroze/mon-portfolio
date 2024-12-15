let taskList= document.getElementById('taskList');
  
function addTask(){

     
    let taskInpunt =document.getElementById('taskInput')
    let taskText = taskInpunt.value;
     
    if(taskText===""){
        return
    }
    let li =document.createElement('li');
    li.innerHTML=taskText;

    let editBtn =document.createElement('button');
    editBtn.innerHTML= '<img src="/image/logo/pen-fill.svg" alt="">';

    editBtn.onclick =function (){
        editTask(li);
    };


    let deletebtn =document.createElement('button');
    deletebtn.innerHTML='<img src="/image/logo/trash.svg" alt="">';
    deletebtn.onclick=function(){
        deleteTask(li);
    };

    li.appendChild(editBtn);
    li.appendChild(deletebtn);
  
    taskList.appendChild(li);
    taskInpunt.value="";
}
function editTask(task){

    let taskTextElement= task.firstChild;
    let taskText= taskTextElement.textContent;
    let newTaskText= prompt('modifier la tache:', taskText)
    if(newTaskText ===null|| newTaskText===""){
        return;
    }
    taskTextElement.textContent=newTaskText;
}
function deleteTask(task){
    taskList.removeChild(task);

}
//projet en cours l'utilisation d'une base de donnée est envisager 