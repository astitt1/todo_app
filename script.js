//bring in elements from todo list
const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(e)

  addTodo();
});

function addTodo(todo) {
    //saving the input value (text) to a var
  let todoText = input.value;

  //cheing if a todo exits
  if (todo) {
    //set the value of input to the value of todo.text
    todoText = todo.text;
  }
//   console.log(todoText);

  //if the text exists
  if (todoText) {
    //create a new list item
    const todoEL = document.createElement("li");

    //if there is a todo AND it completed
    if (todo && todo.completed) {
        //add the strikethrough class
      todo.classList.add("completed");
    }

    //make the text of li same as input value
    todoEL.innerText = todoText;
    //append the todo li item to the todo unordered list
    todoUL.appendChild(todoEL);
    //clear out after enter
    input.value = " "

    todoEL.addEventListener('click', () => {
        todoEL.classList.toggle('completed');
    })

    todoEL.addEventListener('contextmenu', (e)=> {
        e.preventDefault();

        //remove list item
        todoEL.remove()
    })

  }
}
