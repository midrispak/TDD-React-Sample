import React from "react";

export default function Calculator() {
  const [result, setResult] = React.useState(0);
  const [firstNumber, setFirstNumber] = React.useState(0);
  const [secondNumber, setSecondNumber] = React.useState(0);
  return (
    <div>
      <h1>CalWise, A NextGen Calculator 🙃</h1>
      <br></br>
      <div id="result-container">
        <label >Result: </label>
        <label id="result">{result}</label> 
      </div>

      <br></br>

      <div>
        <label>First Number:</label>
        <input type="text" id="first-num" onChange={(event) => {
            let value = event.target.value;
            setFirstNumber(value);
        }}></input>
      </div>
      <br></br>

      <div>
        <label>Second Number:</label>
        <input type="text" id="second-num" onChange={(event) => {
            let value = event.target.value;
            setSecondNumber(value);
        }}></input>
      </div>

      <br></br>
      <br></br>

      <div id="buttons-container">
        <button
          id="add-btn"
          onClick={() => {
            let num1 = firstNumber;
            num1 = parseInt(num1);

            let num2 = secondNumber;
            num2 = parseInt(num2);

            setResult(num1 + num2);
          }}
        >
          Addition
        </button>
        <button
          id="sub-btn"
          onClick={() => {
            let num1 = firstNumber;
            num1 = parseInt(num1);

            let num2 = secondNumber;
            num2 = parseInt(num2);

            setResult(num1 - num2);
          }}
        >
          Subtraction
        </button>
        <button
          id="div-btn"
          onClick={() => {
            let num1 = firstNumber;
            num1 = parseInt(num1);

            let num2 = secondNumber;
            num2 = parseInt(num2);

            setResult(num1 / num2);
          }}
        >
          Division
        </button>

        
      </div>
    </div>
  );
}
