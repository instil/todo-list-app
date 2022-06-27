import {FC} from "react";

// Here's where you'll add an input that is used to create new to-dos.
const AddTodo: FC = () => {
  return (
    <>
      <input type="text" placeholder="Add your todo here"/>
    </>
  );
};

export default AddTodo;