import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { todoReducer } from "./features/reducers/todoReducer";
import { TodoContext } from "./features/contexts";
import { Header } from "./components";
import { Contact, Home, FormInputs } from "./pages";
import Tutorials from "./components/Tutorials";

interface IProps {}

const App: React.FC<IProps> = (props) => {
  const [state, dispatch] = useReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/form-inputs" element={<FormInputs />} />
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
};

export default App;
