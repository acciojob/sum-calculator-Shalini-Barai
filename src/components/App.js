import React,{useState} from 'react'
import './../styles/App.css';

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = async (event) => {
    const value = event.target.value;
    // Parse the input value as a number
    const number = parseFloat(value);

    // Check if the input is a valid number
    if (!isNaN(number)) {
      // Add the number to the array of numbers
      setNumbers([...numbers, number]);

      // Calculate the sum asynchronously to prevent UI freezes
      await new Promise((resolve) => setTimeout(resolve, 0));
      setSum(sum + number);
    }
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={handleChange} />
      <p>Sum: {sum}</p>
        
    </div>
  )
}

export default App
