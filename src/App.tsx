import './App.css';
import Home from 'Home';
import Calculator from "Calculator";
import { useEffect, useState } from "react";
import { useCounter } from 'useCounter';
import { useCounterCalculator } from "counterCalculator";

function App(){
  // const [homeName, setHomeName] = useState<string>("");
  // const [isShowText, setIsShowText] = useState<boolean>(false);
  // console.log("isShowText : ", isShowText);

  // const [isAnswer, setAnswer] = useState<number>(0);
  // const [first_input, setFirstInput] = useState<number>(0);
  // const [second_input, setSecondInput] = useState<number>(0);

  // useEffect(() => {
  //   // do something
  //   console.log("render");
  //   setHomeName("Is use effect" + Math.random() * 999);
  // }, [isShowText]);

  // useEffect(() => {
  //   // do something
  //   console.log("calculate");
  //   setAnswer(first_input + second_input);
  // }, []);

  // useEffect(() => {
  //   // do something
  //   console.log("render");
  //   setResult();
  // }, [setResult]);

  // const renderList = () => {
  //   console.log("render list");

  //   return Array.from(Array(10).keys()).map((item) => {
  //     return <h3 key={item} > {item}</h3>;
  //   })
  // }

  // const { counterComponent, increaseCounter, decreaseCounter, resetCounter, divideCounter, multipleCounter } = useCounter();
  const { answerComponent, plus, minus, multiple, divide, resetCalculator, setFirstInput, setSecondInput} = useCounterCalculator();

  return(
    <div className="App">
      {/* <Home window={5} homeName={homeName} />
      <input onChange={({ target: {value} }) => setHomeName(value)}/>
      <button onClick={() => setIsShowText((prevState) => !prevState)}>
        close
      </button>

      <Calculator answer={isAnswer} first_input={first_input} second_input={second_input} />
      <input onChange={(event)  => {setFirstInput(parseInt(event.target.value))}}/>
      <input onChange={ (event)  => {setSecondInput(parseInt(event.target.value))}}/>
      <button onClick={() => setAnswer(first_input + second_input)}>
        Calculate
      </button> */}
      <Home window={0} homeName="hello" />
      {answerComponent}

      Input 1 : <input onChange={(event) => {setFirstInput(parseInt(event.target.value))}} />
      <br></br>
      Input 2 : <input onChange={(event) => {setSecondInput(parseInt(event.target.value))}} />
      <br></br>
      <button onClick={plus}> + </button>
      <button onClick={minus}> - </button>
      <br></br>
      <button onClick={multiple}> x </button>
      <button onClick={divide}> / </button>
      <br></br>
      <button onClick={resetCalculator}>reset</button>

      {/* {counterComponent}
      <button onClick={increaseCounter}> + </button>
      <button onClick={decreaseCounter}> - </button>
      <br></br>
      <button onClick={multipleCounter}> x </button>
      <button onClick={divideCounter}> / </button>
      <br></br>
      <button onClick={resetCounter}>reset</button> */}

      

      {/* <button onClick={plus}> + </button>
      <button onClick={minus}> - </button>
      <br></br>
      <button onClick={multiple}> x </button>
      <button onClick={divide}> / </button>
      <br></br>
      <button onClick={resetCalculator}> reset </button>
      <br></br>
      <button onClick={() => setAnswer(first_input + second_input)}>calculate</button> */}
    </div>
  );

}

export default App;