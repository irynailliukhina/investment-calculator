import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  let [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInputs.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInputs(prevUserInputs => {
      return {
        ...prevUserInputs,
        [inputId]: +newValue
      }
    })
  }
  return (<>
    <Header />
    <UserInput onChange={handleChange} userInputs={userInputs} />
    {!inputIsValid && <p className="center">Please enter a duration greater that zero.</p>}
    { inputIsValid && <Results userInputs={userInputs}/>}
  </>
  )
}

export default App
