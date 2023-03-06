import inquirer from 'inquirer'
interface Answers{
    todo:string,
    addMore:boolean
}
const todos:string[]=[]
let AddMore:boolean = true;
while(AddMore){
    const answers:Answers=await inquirer
    .prompt([
    {
        type:'string',
        name:"todo",
        message:"enter your todo", },
    {
         type:"confirm",
         name:"addMore",
         message:"enter your todo",
         default:false,
    }    
]);
const{todo,addMore}=answers;
AddMore=addMore;
if(todo){
    todos.push(todo);
}else{console.info("kindly write your input")}

}
if (todos.length >0){
    console.info(`your todo list :`)
    todos.forEach((t)=>console.info(t))
}else{console.info('no todos in the list')}
