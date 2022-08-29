import { useState } from "react";

function App() {
    const [todo, settodo] = useState("");
    const [todos, settodos] = useState([]);
    const onChange = (event) => {
      console.log(todo);
      settodo(event.target.value); };
    const onSubmit = (event) => {
      event.preventDefault();
      if (todo === "") {
        return;
      }
      settodo("");
      settodos((currentArray) => [todo, ...currentArray]);
      console.log(todos);
    };

  return (
    <div>
        <h1>My To Dos ({todos.length})</h1>
        <form onSubmit={onSubmit}>
          <input type="text" 
                placeholder="Write your to do..."
                value={todo}
                onChange={onChange}
          />
          <button>Add To Do</button>

        </form>
        <hr />
          <ul>
          {todos.map((item,index) => <li key={index}>{item}</li>)}

          </ul>


    </div>
  );
}

export default App;
