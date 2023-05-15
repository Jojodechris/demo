// designing my TODO APP

function randomNumb(){
  const r = Math.floor(Math.random()* 256);
  const g = Math.floor(Math.random()* 256);
  const b = Math.floor(Math.random()* 256);
  return `rgb(${r},${g},${b})`
}



  const letters = document.querySelectorAll('.letter');
  setInterval(function () { 
  for (let letter of letters) {
      letter.style.color=randomNumb();
  }
  },500)



document.addEventListener('DOMContentLoaded', function(){
let todoForm = document.getElementById("newTodoForm");
let listOfTodo = document.getElementById("listOfTodo");
const addBtn = document.getElementById("addbtn");

// retrieve from localStorage
const storedTasks = JSON.parse(localStorage.getItem("todos")) || [];

// Display todo items from localStorage
for (let i = 0; i < storedTasks.length; i++) {
  let newTodo = document.createElement("li");
  let newTodoDiv = document.createElement("div");
  newTodoDiv.setAttribute("class", "todo-div");

  newTodo.innerText = storedTasks[i].task;
  newTodo.isCompleted = storedTasks[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.classList = "completed";
  }
  let checkBox = document.createElement("INPUT");
  checkBox.setAttribute("type", "checkbox");

  const liElements = document.getElementsByTagName("li");





  let removeButton = document.createElement("button");
  removeButton.innerText = "x";

  newTodoDiv.appendChild(newTodo);
  newTodoDiv.appendChild(checkBox);
  newTodoDiv.appendChild(removeButton);
  listOfTodo.appendChild(newTodoDiv);
}

// add todo item
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  let listItem = document.createElement("li");
  listItem.innerText = document.getElementById("userexpectations").value;
  let newTodoDiv = document.createElement("div");
  newTodoDiv.setAttribute("class", "todo-div");

  let checkBox = document.createElement("INPUT");
  checkBox.setAttribute("type", "checkbox");

  newTodoDiv.appendChild(listItem);
  newTodoDiv.appendChild(checkBox);
  newTodoDiv.appendChild(removeBtn);
  listOfTodo.appendChild(newTodoDiv);

  // save to localStorage
  storedTasks.push({ task: listItem.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(storedTasks)); //Adding to localStorage

  todoForm.reset();
});

//Deleting task and completing task
listOfTodo.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log(e.target.tagName);
    let todos = storedTasks.filter(
      (item) => item.task !== e.target.parentNode.firstChild.innerText
    );
    localStorage.setItem("todos", JSON.stringify(todos));
    e.target.parentNode.remove();
    location.reload();
  }
  if (e.target.tagName === "INPUT") {
    console.log(e.target.parentNode.firstChild);
    if (!e.target.parentNode.firstChild.isCompleted) {
      e.target.parentNode.firstChild.classList = "completed";
      e.target.parentNode.firstChild.isCompleted = true;
    } else {
      e.target.parentNode.firstChild.classList.remove("completed");
      e.target.parentNode.firstChild.isCompleted = false;
    }
    //sets local storage item true when done
    for (let i = 0; i < storedTasks.length; i++) {
      if (storedTasks[i].task === e.target.parentNode.firstChild.innerText) {
        //toggleing it from true to false when clicked on
        storedTasks[i].isCompleted = !storedTasks[i].isCompleted;
        localStorage.setItem("todos", JSON.stringify(storedTasks));
      }
    }
  }
});
});

































// // designing my TODO APP

// function randomNumb(){
//     const r = Math.floor(Math.random()* 256);
//     const g = Math.floor(Math.random()* 256);
//     const b = Math.floor(Math.random()* 256);
//     return `rgb(${r},${g},${b})`
// }
//     const letters = document.querySelectorAll('.letter');
//     setInterval(function () { 
//     for (let letter of letters) {
//         letter.style.color=randomNumb();
//     }
//     },500)



// document.addEventListener('DOMContentLoaded', function(){
// let todoForm = document.getElementById("newTodoForm");
// let listOfTodo = document.getElementById("listOfTodo");
// const addBtn = document.getElementById("addbtn");

// todoForm.addEventListener("submit",function(e){
//   e.preventDefault();

//   let removeBtn = document.createElement('button');
//   removeBtn.innerText='REMOVE';
//   let listItem = document.createElement("li");
//   listItem.innerText=document.getElementById("userexpectations").value;
//   listItem.appendChild(removeBtn);
//   listOfTodo.appendChild(listItem);

//   todoForm.reset();


// });

// });

// listOfTodo.addEventListener("click", function(event) {
//     const targetTagToLowerCase = event.target.tagName.toLowerCase();
//     if (targetTagToLowerCase === "li") {
//       event.target.style.textDecoration = "line-through";
//     } else if (targetTagToLowerCase === "button") {
//       event.target.parentNode.remove();
//     }
//   });


//   // I'm creating a list(<li>....</li>) storing what the user will write:
// // document.querySelector('#add').addEventListener("click",function(e){
// //     e.preventDefault();
// //     const userStuff=document.querySelector('#userexpectations');
// //     const myList= document.createElement("li");
  
// // });
// // // Get references to the DOM elements
// // const addBtn = document.getElementById("addbtn");
// // const userStuff = document.getElementById("userexpectations");
// // const listItem = document.createElement("li");
// // // Add click event listener to the add button
// //   // Add user's input to the list item
// //   listItem.appendChild(userStuff.value);
// //   // Create checkbox
// //   const checkbox = document.querySelector("#completed");
// //   // Create remove button
// //   const removeBtn = document.querySelector("#remove");
// //   // Add click event listener to the remove button
// //   removeBtn.addEventListener("click", () => {
// //     // Remove the list item
// //     listItem.remove();
// //   });
// //   // Add checkbox and remove button to the list item
// //   listItem.appendChild(checkbox);
// //   listItem.appendChild(removeBtn);
// //   // Add the new list item to the list
// //   const myOl = document.querySelector("#listOfTodo");

// //   document.querySelector('#add').addEventListener("click",function(e){
// //         e.preventDefault();
// //         const userStuff =document.querySelector('#userexpectations');
       
// //   });
// //   myOl.appendChild(listItem);


// //   // Clear the input field
// // //   userStuff.value = "";
// // // });

// // // Add change event listener to the list
// // listItem.addEventListener("change", (event) => {
// //   // Check if the event target is a checkbox
// //   if (event.target.type === "checkbox") {
// //     // If the checkbox is checked, add a class to the parent list item
// //     if (event.target.checked) {
// //       event.target.parentElement.classList.add("checked");
// //     } else {
// //       // If the checkbox is unchecked, remove the class from the parent list item
// //       event.target.parentElement.classList.remove("checked");
// //     }
// //   }
// // });


    

















//  // setting  up my input checkbox to know if the user has completed his task 
//     // const input = document.createElement("input");
//     // input.setAttribute("type", "checkbox");
//     // input.setAttribute("id", "myInput");
//     // input.setAttribute("name","myName");
//     // input.setAttribute("value", "true");
//     // const check = document.querySelector("#myInput");

// // creatimg my div element that will store my input checkbox
//     // const div = document.getElementById("myDiv");
// // Append the input element to the div element
//     // div.append(check)

// // putting my checkbox next to each todoList 
//     // myList.append(userStuff.value);
//     // myList.appendChild(div)
//     // const myOl = document.querySelector("#listOfTodo");
//     // myOl.appendChild(myList);

// // crossing out the task completed by the user (if the checkbox is clicked that means task completed)



// // removing the whole line  when the user clicks on remove 
// // document.querySelector('#remove').addEventListener("click",function(event){
// //     e.preventDefault();
// //     myList.parentNode.removeChild(myList);





    



// // })


// // }