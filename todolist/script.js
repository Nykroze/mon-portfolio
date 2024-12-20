let taskList= document.getElementById('taskList');
let tasks =JSON.parse(localStorage.getItem('tasks'))|| [];

function majTasks() {
    taskList.innerHTML = ''; // Vider la liste 
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.innerHTML = task.text;
        li.setAttribute('data-id', task.id); // Ajouter l'identifiant en attribut

        //la partie modifier remonter dans la fonction render render task
        let editBtn = document.createElement('button');
        editBtn.innerHTML = '<img src="/image/logo/pen-fill.svg" alt="">';
        editBtn.onclick = function () {
            editTask(task.id);
        };

        // la partie delete remonter dans la fonction render render task
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<img src="/image/logo/trash.svg" alt="">';
        deleteBtn.onclick = function () {
            deleteTask(task.id);
        };

        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
  //la partie d'ajout
function addTask(){


    let taskInpunt =document.getElementById('taskInput')
    let taskText = taskInpunt.value;
     
    if(taskText===""){
        return
    }
let newTask={
    text:taskText,
    id:Date.now()
};

tasks.push(newTask);
localStorage.setItem('tasks',JSON.stringify(tasks));
majTasks();
taskInpunt.value="";
}




//la partie de modification

function editTask(taskId){

    let task= tasks.find(t=> t.id===taskId);
    let newTaskText=prompt('modifier la tache :',task.Text);

    if(newTaskText==="" || newTaskText.trim()===""){
        return;
    }
    task.text = newTaskText.trim();
    localStorage.setItem('tasks',JSON.stringify(tasks));
    majTasks();
    }


function deleteTask(taskId){
   tasks=tasks.filter(t=>t.id!==taskId);
   localStorage.setItem('tasks',JSON.stringify(tasks));
   majTasks();
}
majTasks();
//projet terminer, le design est a revoir