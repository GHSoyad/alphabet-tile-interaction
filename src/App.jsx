import { useState } from 'react';

const keys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const App = () => {
  const [outputString, setOutputString] = useState("");

  const generateString = (key) => {
    const prevString = outputString;
    let newString;
    // check if the last two keys are same and replace with "_"
    if (prevString[prevString.length - 1] === key && prevString[prevString.length - 2] === key) {
      newString = prevString.replace(key + key, "_");
    } else {
      newString = prevString + key;
    }
    setOutputString(newString);

    // append the new string in HTML element with mentioned id
    document.getElementById('outputString').innerText = newString;
  }

  const resetString = () => {
    setOutputString("");
    document.getElementById('outputString').innerText = "";
  }

  return (
    <>
      <div className='keyboard'>
        {
          keys.map(key => (
            <div
              key={key}
              className="key"
              onClick={() => generateString(key)}
            >
              {key}
            </div>
          ))
        }
      </div>
      <div className="output">
        <h3>Output String :</h3>
        <p id="outputString">
          {/* {outputString} */}
        </p>

        {
          outputString &&
          <button onClick={resetString}>Reset</button>
        }
      </div>
    </>
  )
}

export default App;