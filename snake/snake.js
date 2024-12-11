const canvas= document.querySelector("canvas");
const context= canvas.getContext('2d');
const restartButton =document.getElementById('restart')

let box =20;

let snake=[];

snake[0]={x:10*box, y:10*box}

let food= {
    x:Math.floor (Math.random()*15+1)*box,
    y:Math.floor (Math.random()*15+1)*box
}

let score=0
let d 

document.addEventListener("keydown",direction);
// le dessous la fonction permet de verifier que le serpent va dans le bon sens ex: si on appuie sur fleche de gauche il verifie que le serpent ne va pas dans la direction opposé pour pouvoir aller dans la direction souhaité

function direction(event){
    let key=event.key;
    if(key === "ArrowLeft" && d !=="RIGHT"){
        d="LEFT";
    }
    else if(key==="ArrowUp" && d!=="DOWN"){
        d="UP"
    }
    else if(key==="ArrowRight" && d!=="LEFT"){
        d="RIGHT"
    }
    else if(key==="ArrowDown" && d!=="UP"){
        d="DOWN"
    }
}
function draw (){
    context.clearRect(0,0,400,400)
    for(let i=0;i < snake.length;i++){
        context.fillStyle=(i ==0) ? "blue" : "cyan"
        context.fillRect(snake[i].x, snake[i].y,box,box)
        context.strokeStyle= "blue"
        context.strokeRect(snake[i].x,snake[i].y,box,box)
    }
    context.fillStyle="red"
    context.fillRect(food.x,food.y,box,box);

    let snakeX= snake[0].x;
    let snakeY= snake[0].y;

    if(d=="LEFT") snakeX-=box;
    if(d=="UP") snakeY-=box;
    if(d=="RIGHT")snakeX +=box;
    if(d=="DOWN") snakeY+=box;

    if(snakeX==food.x && snakeY===food.y){
        score++;
        food={
            x:Math.floor (Math.random()*15+1)*box,
            y:Math.floor (Math.random()*15+1)*box
        }
    }
    else{
        snake.pop()
    }
    let newHead={
        x:snakeX,
        y:snakeY
    }
    if(snakeX<0 || snakeY< 0|| snakeX>19*box || snakeY>19*box || collision(newHead,snake) )
        {
        clearInterval(game);
        restartButton.addEventListener("click", ()=> location.reload());
        
    }
    
    snake.unshift(newHead);
    context.fillStyle="blue"
    context.font="30px Arial"
    context.fillText(score,2*box,1.6*box)
}
function collision(head,array){
    for(let g=0; g< array.length; g++){
        if(head.x=== array[g].x&& head.y===array[g].y){
            return true;
        }
        return false;
    }
}
//le code en dessous permet de gere la vitesse du serpent 
let game= setInterval(draw,90)