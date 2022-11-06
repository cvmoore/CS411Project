import React from 'react';
import './App.css';

function App() {
  return(
    <div className="wrapper">
      <h1>Input Search Keyword</h1>
      <form>
      <fieldset>
         <label>
           <p>Keyword</p>
           <input keyword="keyword" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
