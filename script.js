//add task
function addtask()
{
    var task =document.getElementById('task-input').value;
    if(task.trim()!==''){
    console.log('Task:',task)
     var taskCount=document.getElementById('task-list').childElementCount;
      var totalTask=document.getElementById('task-count');
      totalTask.innerHTML=taskCount+1;

    var taskItem =document.createElement('li')
    taskItem.textContent = task
    taskItem.className ='border border-gray-200 bg-white-200 rounded-lg p-10 shadow-md py-4 px-10 mt-3 items-center flex justify-between '
    //create delete button and set class name
    var deleteButton=document.createElement('button')
    //set button name to delete
    deleteButton.textContent='Delete'
    //set class name for the button
    deleteButton.className='bg-red-500 text-white px-4 py-2 m-4 rounded-full '
    //add event listener to the class button
    deleteButton.addEventListener('click',function(){
      taskItem.remove()
      var taskCount=document.getElementById('task-list').childElementCount;
     
      totalTask.textContent=taskCount;
    })
    //append delete button to the task item
    taskItem.appendChild(deleteButton)
  document.getElementById('task-list').appendChild(taskItem)
  document.getElementById('task-input').value=''
}}
function deleteAll(){

  document.getElementById('task-list').innerHTML = '  '
  var totalTask=document.getElementById('total-task')
  totalTask.textContent=0
}