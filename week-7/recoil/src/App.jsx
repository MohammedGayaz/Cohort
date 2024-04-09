import { useState } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { jobAtom, meSelector, messageAtom, notificationAtom } from "./atom";

function App() {
  const [count, setCount] = useState(0);

  const notificatonValue = useRecoilValue(notificationAtom);
  const messageValue = useRecoilValue(messageAtom);
  const [jobValue, setJobValue] = useRecoilState(jobAtom);

  const updateJobs = () => {
    setJobValue((c) => c + 1);
  };

  return (
    <>
      <button>Notificatons ({notificatonValue})</button>
      <button>Messages ({messageValue})</button>
      <button onClick={updateJobs}>Jobs ({jobValue})</button>
      <Profile />
    </>
  );
}

function Profile() {
  const meValue = useRecoilValue(meSelector);
  return <button>Me ({meValue})</button>;
}

export default App;
