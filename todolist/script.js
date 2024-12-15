let taskList= document.getElementById('taskList');
 console.log("c'est ici que ca ce passe");
function addTask(){

    console.log("c'est ici que ca ce passe");
    let taskInpunt =document.getElementById('taskInput')
    let taskText = taskInpunt.value;
      console.log(taskInpunt.value);
    if(taskText===""){
        return
    }
    let li =document.createElement('li');
    li.innerHTML=taskText;

    let editBtn =document.createElement('button');
    editBtn.innerHTML= '<i class="bi bi-pencil-fill"></i> ';

    editBtn.onclick =function (){
        editTask(li);
    };


    let deletebtn =document.createElement('button');
    deletebtn.innerHTML='<i class="bi bi-trash"></i>';
    deletebtn.onclick=function(){
        deleteTask(li);
    };

    li.appendChild(editBtn);
    li.appendChild(deletebtn);
    console.log("c'est ici que ca ce passe la");
    taskList.appendChild(li);
    taskInpunt.value="";
}
function editTask(task){

    console.log("c'est ici que ca ce passe");

    let taskTextElement= task.firstChild;

    let taskText= taskTextElement.textContent;

    let newTaskText= prompt('modifier la tache:', taskText)
    if(newTaskText ===null|| newTaskText===""){
        return;
    }

    taskTextElement.textContent=newTaskText;

}
console.log("c'est ici que ca ce passe");
function deleteTask(task){
    taskList.removeChild(task);

}