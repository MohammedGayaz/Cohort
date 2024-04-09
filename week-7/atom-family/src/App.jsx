import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { todoAtomFamily } from "./atoms";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  );
}

function Todo({ id }) {
  const currentItem = useRecoilValue(todoAtomFamily(id));
  return (
    <div>
      <div>{currentItem.title}</div>
      <div>{currentItem.description}</div>
    </div>
  );
}

export default App;
