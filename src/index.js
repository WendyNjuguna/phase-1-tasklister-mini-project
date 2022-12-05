document.addEventListener("DOMContentLoaded", () => {
  // Grab the form by it's form tag
  //Add an event listener and a submit event for the submit button to fire the li addition handler.
  let form= document.getElementById('create-task-form')
  form.addEventListener("submit",(e)=>{
    //Remove the form's default refreshing.
    e.preventDefault()
    //Set the target for the event.
    buildToDo(document.getElementById('new-task-description').value)
    form.reset()

    })
})
function buildToDo(todo){
//Create new variables that will add new li and button HTML elements to our document.
let li = document.createElement("li")
//Create a button.
let btn = document.createElement("button")
//Add an event listener to our button for removing to do,and pass a handler handDelete.
btn.addEventListener("click", handDelete)
//Add text to our button.
btn.textContent ='x'
//Set the li text content to our parameter todo.
li.textContent=`${todo}`
li.appendChild(btn)
console.log(li)
document.querySelector('#list').appendChild(li)
}
//Handle the delete event.
function handDelete(e){
  e.target.parentNode.remove()
}