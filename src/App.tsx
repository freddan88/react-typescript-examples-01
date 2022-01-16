import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { todoReducer } from "./features/reducers";
import { TodoContext } from "./features/contexts";
import { Header } from "./components";
import { Contact, Home } from "./pages";

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
        </Routes>
      </BrowserRouter>
    </TodoContext.Provider>
  );
};

export default App;
