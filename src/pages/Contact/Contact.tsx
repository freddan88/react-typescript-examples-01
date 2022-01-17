import React, { useReducer } from "react";
import { formReducer } from "../../features/reducers";

interface IProps {}

const Contact: React.FC<IProps> = (props) => {
  const [state, dispatch] = useReducer(formReducer, {});
  // console.log(Object.values(state));

  console.log(state["email"] ?? "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    dispatch({ name, value });
  };

  return (
    <main className="app-contact">
      <form>
        <div className="form__group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" onChange={handleChange} />
        </div>
        <div className="form__group">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" onChange={handleChange} />
        </div>
        <div className="form__group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" onChange={handleChange}></textarea>
        </div>
      </form>
    </main>
  );
};

export default Contact;
