import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const current = useRecoilValue(todoAtomFamily(id));
  return (
    <div>
      <div>{current.title}</div>
      <div>{current.description}</div>
    </div>
  );
}

export default App;
