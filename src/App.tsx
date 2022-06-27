import styled from "styled-components";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import {FC} from "react";

const App: FC = () => {
  return (
    <StyledApp>
      <h1>To-do List App</h1>
      <AddTodo/>
      <TodosList/>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  text-align: center;
`;

export default App;
