import React, { useContext, useState } from "react";
import { TodoContext } from "../../features/contexts";
import { TState, IAction } from "../../features/reducers";

interface IProps {}

interface ITodoContext {
  state: TState;
  dispatch: React.Dispatch<IAction>;
}

const Home: React.FC<IProps> = (props) => {
  const { state, dispatch } = useContext<ITodoContext>(TodoContext);
  const [title, setTitle] = useState("");

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: "CREATE_TODO", payload: { title, done: false } });
    setTitle("");
  };

  const deleteTodo = (id: number | undefined) => {
    if (typeof id !== "number") return;
    dispatch({ type: "DELETE_TODO", payload: { id } });
  };

  const toggleTodo = (id: number | undefined) => {
    if (typeof id !== "number") return;
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  const renderTodos = () => {
    if (!Array.isArray(state)) return;
    return state.map((todo) => {
      const cssClass = todo.done ? "todo--done" : "";
      return (
        <li key={todo.id} className={`todo ${cssClass}`}>
          <h2>{todo.title}</h2>
          <div className="todo__actions">
            <button onClick={() => deleteTodo(todo.id)} type="button">
              Delete
            </button>

            <button onClick={() => toggleTodo(todo.id)} type="button">
              Toggle
            </button>
          </div>
        </li>
      );
    });
  };

  return (
    <main className="app-home">
      <form onSubmit={addTodo}>
        <label htmlFor="add-todo">Todo: </label>
        <input
          id="add-todo"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>{renderTodos()}</ul>
    </main>
  );
};

export default Home;
